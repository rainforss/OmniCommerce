import {
  BeforeCreate,
  BeforeUpdate,
  Entity,
  ManyToOne,
  PrimaryKey,
  Property,
} from "@mikro-orm/core";
import { Field, ObjectType } from "type-graphql";
import { v4 } from "uuid";
import { User } from "./User";

@ObjectType()
@Entity()
export class Vendor {
  @Field()
  @PrimaryKey()
  uuid: string = v4();

  @Field(() => String)
  @Property({ type: "date" })
  createdAt = new Date();

  @Field()
  @Property()
  createdById: number;

  @Field(() => User)
  @ManyToOne({ entity: () => User })
  createdBy: User;

  @Field()
  @Property()
  modifiedById?: number;

  @Field(() => User)
  @ManyToOne({ entity: () => User })
  modifiedBy?: User;

  @Field(() => String)
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date();

  @Field()
  @Property({ type: "text" })
  name!: string;

  @Field()
  @Property({ type: "text", unique: true })
  value: string;

  @BeforeCreate()
  @BeforeUpdate()
  async format() {
    this.value = this.name.toLowerCase();
    this.value = this.value.replace(/[^a-zA-Z ]/g, "");
    this.value = this.value.replace(/ /, "");
  }
}
