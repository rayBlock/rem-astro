import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

export const libsqlClient = createClient({
  url:  "libsql://d-riffs-test-block-lab.turso.io",
  authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3MjY3MzkwOTYsImlkIjoiZTBhYTRlOGQtNjZjOS00OTE0LWJlN2EtNGM5MDNkMWNhZTQ4In0.l14RKm5e1Oqgn_n1TKJZ04LrbWcU3CNyNtwaqmH0gixcN9MrOkvdElxnyHehbhPWYJnVAIfMS9ytGu-_YO41CA",
});

export const db = drizzle(libsqlClient);
