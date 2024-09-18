import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";


export const libsqlClient = createClient({
  url: import.meta.env.TURSO_DB_URL,
  authToken: import.meta.env.TURSO_TOKEN,
});

export const db = drizzle(libsqlClient);