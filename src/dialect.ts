import { Database } from "./database";
import { createPool } from "mysql2";
import { Kysely, MysqlDialect } from "kysely";

const dialect = new MysqlDialect({
  pool: async () =>
    createPool({
      database: "kysely_example",
      user: "root",
      password: "password",
      host: "localhost",
    }),
});

export const db = new Kysely<Database>({
  dialect,
});
