import {
  Collection,
  Entity,
  OneToMany,
  PrimaryKey,
  Property,
} from "@mikro-orm/core";
import { Field, ObjectType } from "type-graphql";
import { Vendor } from "./Vendor";

@ObjectType()
@Entity()
export class User {
  @Field()
  @PrimaryKey()
  id!: number;

  @Field(() => String)
  @Property({ type: "date" })
  createdAt = new Date();

  @Field(() => String)
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date();

  @Field()
  @Property({ type: "text", unique: true })
  username!: string;

  @Field()
  @Property({ type: "text", unique: true })
  email!: string;

  @Property({ type: "text" })
  password!: string;

  @OneToMany({ entity: () => Vendor, mappedBy: (vendor) => vendor.createdBy })
  createdVendors = new Collection<Vendor>(this);

  @OneToMany({ entity: () => Vendor, mappedBy: (vendor) => vendor.modifiedBy })
  modifiedVendors = new Collection<Vendor>(this);
}
