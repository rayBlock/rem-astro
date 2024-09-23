import type { APIRoute } from "astro";
import { eq } from "drizzle-orm";
import { generateIdFromEntropySize } from "lucia";
import {
  createEmailVerificationToken,
  sendEmail,
} from "@/pages/api/magicLink/resend";
import { db } from "@/database/db";
import { userTable } from "@/database/schema";

export const prerender = false;

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString()!;
  const origin = request.headers.get("origin")!;

  const existingUserArray = await db
    .select()
    .from(userTable)
    .where(eq(userTable.email, email));
  const existingUser = existingUserArray[0];

  // an example usecase of signups being split out
  //   const whistListed = await db.select(WhiteListedEmails.email).where(eq(WhiteListedEmail.email, email))
  //   if (!whistListed) return redirect("/error")

  if (existingUser) {
    if (existingUser.email_verified) return redirect("/"); // signed up and now needs to sign in

    if (!existingUser.email_verified) {
      // User exists but is not verified, resend the magic link
      // Could check if first magic link hasn't expired yet and reuse
      const tokenId = await createEmailVerificationToken(
        existingUser.id,
        email,
      );
      const verificationLink = new URL(
        `/api/magicLink/verifyToken?token=${tokenId}`,
        origin,
      ).toString();
  // send them to signupWaiting page and tell them to check emails for magicLink
      await sendEmail(email, verificationLink);
      return redirect("/signupWaiting");
    }
  }

  const userId = generateIdFromEntropySize(10);
  await db.insert(userTable).values({
    id: userId,
    email: email,
    email_verified: false,
  });

  const tokenId = await createEmailVerificationToken(userId, email);
  const verificationLink = new URL(
    `/api/magicLink/verifyToken?token=${tokenId}`,
    origin,
  ).toString();


  // if failed redirect to somwehwere ...
  await sendEmail(email, verificationLink);
  return redirect("/somewhere");
};
