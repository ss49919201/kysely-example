import { db } from "./dialect";
import { sql } from "kysely";

// FIXME: ブロッキングが発生する

const crateUserTable = async () => {
  return await db.schema
    .createTable("user")
    .addColumn("id", "integer", (cb) => cb.primaryKey())
    .addColumn("first_name", "varchar(191)", (cb) => cb.notNull())
    .addColumn("last_name", "varchar(191)")
    .addColumn("type", "varchar(191)", (cb) => cb.notNull())
    .addColumn("created_at", "datetime", (cb) =>
      cb.notNull().defaultTo(sql`now()`)
    )
    .execute();
};

const findById = async (id: number) => {
  return await db
    .selectFrom("user")
    .selectAll()
    .where("id", "=", id)
    .executeTakeFirst();
};
