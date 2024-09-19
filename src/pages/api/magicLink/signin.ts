import type { APIRoute } from "astro";
import { eq } from "drizzle-orm";
import { createEmailVerificationToken, sendEmail } from "@/pages/api/magicLink/resend";
import { db } from "@/database/turso";
import { userTable } from "@/database/schema";

export const prerender = false;

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  
  const email = formData.get("email")?.toString()!;
  const origin = request.headers.get("origin")!;
  
  const userArray = await db
    .select()
    .from(userTable)
    .where(eq(userTable.email, email));
  const user = userArray[0];
  if (!user) return redirect("/signup");

  const tokenId = await createEmailVerificationToken(user.id, email);
  const verificationLink = new URL(
    `/api/magicLink/verifyToken?token=${tokenId}`,
    origin
  ).toString();

  // send them to wating page and tell them to check emails for magicLink
  await sendEmail(email, verificationLink);
  return redirect("/waiting");
};

export const GET: APIRoute = async ({ redirect }) => {
  return redirect("/login");
};