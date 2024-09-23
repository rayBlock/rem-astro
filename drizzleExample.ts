import type { Config } from "drizzle-kit";

export default {
  schema: "./src/lib/drizzle/schema.ts",
  out: "./src/lib/drizzle/migrations",
  driver: "turso",
  dialect: "sqlite",
  dbCredentials: {
    url: "",
    authToken: "",
  },
} satisfies Config;
