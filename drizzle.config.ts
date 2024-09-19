import type { Config } from "drizzle-kit";

export default {
  schema: "./src/lib/drizzle/schema.ts",
  out: "./src/lib/drizzle/migrations",
  driver: "turso",
  dialect: "sqlite",
  dbCredentials: {
    url: "libsql://d-riffs-test-block-lab.turso.io",
    authToken:
      "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3MjYyMjc1MDgsImlkIjoiZTBhYTRlOGQtNjZjOS00OTE0LWJlN2EtNGM5MDNkMWNhZTQ4In0.702GsucAK0RpynbdHvR_JzkSxk6I_kFcK7I0q8hC4i0gXLF3HrXcQkJt_hFgaQgLILhsFt3IPvme5jCaeLAiBQ",
  },
} satisfies Config;
