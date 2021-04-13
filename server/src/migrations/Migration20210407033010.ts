import { Migration } from '@mikro-orm/migrations';

export class Migration20210407033010 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "vendor" rename column "uuid" to "id";');


    this.addSql('alter table "vendor" drop constraint if exists "vendor_modified_by_id_check";');
    this.addSql('alter table "vendor" alter column "modified_by_id" type int4 using ("modified_by_id"::int4);');
    this.addSql('alter table "vendor" alter column "modified_by_id" drop not null;');
  }

}
