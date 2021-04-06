import { Migration } from '@mikro-orm/migrations';

export class Migration20210405024959 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "user" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "username" text not null, "email" text not null, "password" text not null);');
    this.addSql('alter table "user" add constraint "user_username_unique" unique ("username");');
    this.addSql('alter table "user" add constraint "user_email_unique" unique ("email");');

    this.addSql('create table "vendor" ("uuid" varchar(255) not null, "created_at" timestamptz(0) not null, "created_by_id" int4 not null, "modified_by_id" int4 not null, "updated_at" timestamptz(0) not null, "name" text not null, "value" text not null);');
    this.addSql('alter table "vendor" add constraint "vendor_pkey" primary key ("uuid");');
    this.addSql('alter table "vendor" add constraint "vendor_value_unique" unique ("value");');

    this.addSql('create table "post" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "title" text not null);');

    this.addSql('alter table "vendor" add constraint "vendor_created_by_id_foreign" foreign key ("created_by_id") references "user" ("id") on update cascade;');
    this.addSql('alter table "vendor" add constraint "vendor_modified_by_id_foreign" foreign key ("modified_by_id") references "user" ("id") on update cascade;');
  }

}
