"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20210405024959 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20210405024959 extends migrations_1.Migration {
    up() {
        return __awaiter(this, void 0, void 0, function* () {
            this.addSql('create table "user" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "username" text not null, "email" text not null, "password" text not null);');
            this.addSql('alter table "user" add constraint "user_username_unique" unique ("username");');
            this.addSql('alter table "user" add constraint "user_email_unique" unique ("email");');
            this.addSql('create table "vendor" ("uuid" varchar(255) not null, "created_at" timestamptz(0) not null, "created_by_id" int4 not null, "modified_by_id" int4 not null, "updated_at" timestamptz(0) not null, "name" text not null, "value" text not null);');
            this.addSql('alter table "vendor" add constraint "vendor_pkey" primary key ("uuid");');
            this.addSql('alter table "vendor" add constraint "vendor_value_unique" unique ("value");');
            this.addSql('create table "post" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "title" text not null);');
            this.addSql('alter table "vendor" add constraint "vendor_created_by_id_foreign" foreign key ("created_by_id") references "user" ("id") on update cascade;');
            this.addSql('alter table "vendor" add constraint "vendor_modified_by_id_foreign" foreign key ("modified_by_id") references "user" ("id") on update cascade;');
        });
    }
}
exports.Migration20210405024959 = Migration20210405024959;
//# sourceMappingURL=Migration20210405024959.js.map