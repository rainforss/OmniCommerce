import { Vendor } from "../entities/Vendor";
import { MyContext } from "src/types";
import {
  Arg,
  Ctx,
  Field,
  InputType,
  Mutation,
  ObjectType,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { FieldError } from "./user";

import { EntityManager } from "@mikro-orm/postgresql";
import { Authenticate } from "../middleware/Authenticate";
import { User } from "../entities/User";

@InputType()
export class VendorInput {
  @Field()
  name: string;
}

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
    const vendors = em.find(Vendor, {});

    return vendors;
  }

  @Query(() => Vendor, { nullable: true })
  async vendor(@Arg("id") id: string, @Ctx() { em }: MyContext) {
    //Need to cast 'em' as the EntityManager type provided by postgresql package to get correct methods according to https://mikro-orm.io/docs/query-builder
    const conn = (em as EntityManager).getConnection();

    //Mikro-Orm queryBuilder does not provide API to select columns from both tables, use native SQL
    const result = await conn.execute(
      `select v.*, json_build_object('username', u.username) "createdBy", json_build_object('username', z.username) "modifiedBy" from vendor v left join public.user u on u.id = v.created_by_id inner join public.user z on z.id = v.modified_by_id where v.id = '${id}'
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
    const user = await em.findOne(User, { id: req.session.userId });
    if (!name) {
      return {
        errors: [{ field: "name", message: "Vendor name cannot be empty" }],
      };
    }
    const vendor = em.create(Vendor, {
      name,
      createdBy: user,
      modifiedBy: user,
    });
    try {
      await em.persistAndFlush(vendor);
    } catch (err) {
      console.log(err);
      if (err.code === "23505" && err.constraint === "vendor_value_unique") {
        return {
          errors: [{ field: "name", message: "Vendor already exists" }],
        };
      }
    }

    return { vendor };
  }

  @Mutation(() => VendorResponse, { nullable: true })
  @UseMiddleware(Authenticate)
  async updateVendor(
    @Arg("id") id: string,
    @Arg("name", { nullable: true }) name: string,
    @Ctx() { em }: MyContext
  ) {
    const vendor = await em.findOne(Vendor, { id });
    if (!vendor) {
      return null;
    }
    if (!name) {
      return {
        errors: [{ field: "name", message: "Vendor name cannot be empty" }],
      };
    }

    vendor.name = name;
    await em.persistAndFlush(vendor);

    return vendor;
  }

  @Mutation(() => Vendor, { nullable: true })
  @UseMiddleware(Authenticate)
  async deleteVendor(@Arg("id") id: string, @Ctx() { em }: MyContext) {
    const vendor = await em.findOne(Vendor, { id });
    if (!vendor) {
      return null;
    }
    await em.nativeDelete(Vendor, { id });
    return vendor;
  }
}
