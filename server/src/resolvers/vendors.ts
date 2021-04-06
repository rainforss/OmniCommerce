import { Vendor } from "../entities/Vendor";
import { MyContext } from "src/types";
import {
  Arg,
  Ctx,
  Field,
  Mutation,
  ObjectType,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { FieldError } from "./users";

import { EntityManager } from "@mikro-orm/postgresql";
import { Authenticate } from "../middleware/Authenticate";

@ObjectType()
export class VendorResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => Vendor, { nullable: true })
  vendor?: Vendor;
}

@Resolver()
export class VendorResolver {
  @Query(() => [Vendor])
  async vendors(@Ctx() { em }: MyContext): Promise<Vendor[]> {
    //Need to cast 'em' as the EntityManager type provided by postgresql package to get correct methods according to https://mikro-orm.io/docs/query-builder
    const conn = (em as EntityManager).getConnection();

    //Mikro-Orm queryBuilder does not provide API to select columns from both tables, use native SQL
    const result = (await conn.execute(
      `select v.*, json_build_object('username', u.username) "createdBy", json_build_object('username', z.username) "modifiedBy" from vendor v left join public.user u on u.id = v.created_by_id inner join public.user z on z.id = v.modified_by_id
    `
    )) as Vendor[];

    console.log(result);

    //Use the EntityManager to map the snake_case column names back to camelCase
    const vendors = result.map((v) => em.map(Vendor, v));

    return vendors;
  }

  @Query(() => Vendor, { nullable: true })
  async vendor(@Arg("uuid") uuid: string, @Ctx() { em }: MyContext) {
    //Need to cast 'em' as the EntityManager type provided by postgresql package to get correct methods according to https://mikro-orm.io/docs/query-builder
    const conn = (em as EntityManager).getConnection();

    //Mikro-Orm queryBuilder does not provide API to select columns from both tables, use native SQL
    const result = await conn.execute(
      `select v.*, json_build_object('username', u.username) "createdBy", json_build_object('username', z.username) "modifiedBy" from vendor v left join public.user u on u.id = v.created_by_id inner join public.user z on z.id = v.modified_by_id where v.uuid = '${uuid}'
    `
    );

    const vendor = result.map((v) => em.map(Vendor, v));

    return vendor[0];
  }

  @Mutation(() => VendorResponse)
  @UseMiddleware(Authenticate)
  async createVendor(
    @Arg("name") name: string,
    @Ctx() { em, req }: MyContext
  ): Promise<VendorResponse> {
    //Create the vendor and set up the foreign keys to reference user
    const vendor = em.create(Vendor, {
      name,
      modifiedById: req.session.userId,
      createdById: req.session.userId,
    });
    try {
      await em.persistAndFlush(vendor);
    } catch (err) {
      console.log(err);
      if (err.code === "23505" && err.constraint === "vendor_name_unique") {
        return {
          errors: [{ field: "name", message: "Vendor already exists" }],
        };
      }
    }

    return { vendor };
  }

  @Mutation(() => Vendor, { nullable: true })
  @UseMiddleware(Authenticate)
  async updateVendor(
    @Arg("uuid") uuid: string,
    @Arg("name", { nullable: true }) name: string,
    @Ctx() { em, req }: MyContext
  ) {
    const vendor = await em.findOne(Vendor, { uuid });
    if (!vendor) {
      return null;
    }
    if (name) {
      vendor.name = name;
      vendor.modifiedById = req.session.userId;
      await em.persistAndFlush(vendor);
    }
    return vendor;
  }

  @Mutation(() => Vendor, { nullable: true })
  @UseMiddleware(Authenticate)
  async deleteVendor(@Arg("uuid") uuid: string, @Ctx() { em }: MyContext) {
    const vendor = await em.findOne(Vendor, { uuid });
    if (!vendor) {
      return null;
    }
    await em.nativeDelete(Vendor, { uuid });
    return vendor;
  }
}
