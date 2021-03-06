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
exports.Migration20210407033010 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20210407033010 extends migrations_1.Migration {
    up() {
        return __awaiter(this, void 0, void 0, function* () {
            this.addSql('alter table "vendor" rename column "uuid" to "id";');
            this.addSql('alter table "vendor" drop constraint if exists "vendor_modified_by_id_check";');
            this.addSql('alter table "vendor" alter column "modified_by_id" type int4 using ("modified_by_id"::int4);');
            this.addSql('alter table "vendor" alter column "modified_by_id" drop not null;');
        });
    }
}
exports.Migration20210407033010 = Migration20210407033010;
//# sourceMappingURL=Migration20210407033010.js.map