import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

export const libsqlClient = createClient({
  url: "",
  authToken: ""
});

export const db = drizzle(libsqlClient);
