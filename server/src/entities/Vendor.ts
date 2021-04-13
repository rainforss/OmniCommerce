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
  @Field(() => String)
  @PrimaryKey()
  id: string = v4();

  @Field(() => String)
  @Property({ type: "date" })
  createdAt = new Date();

  @Field(() => User)
  @ManyToOne({ entity: () => User })
  createdBy: User;

  @Field(() => User, { nullable: true })
  @ManyToOne({ entity: () => User, nullable: true })
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
