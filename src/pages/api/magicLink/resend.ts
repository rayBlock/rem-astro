
import { Resend } from "resend";
import { TimeSpan, createDate } from "oslo";
import { generateIdFromEntropySize } from "lucia";
import { eq } from "drizzle-orm";
import { db } from "@/database/turso";
import { emailVerificationTokenTable } from "@/database/schema";
import { Resource } from "sst";

// sst set secret ResendApiKey YourKey
// https://sst.dev/docs/reference/cli/#secret

export const prerender = false;
const resend = new Resend(
    Resource.ResendApiKey.value
);

export const sendEmail = async (
  userEmail: string,
  verificationLink: string
) => {
  // change the example to your domain
  // <onboarding@resend.dev> needs to stay until prod domain
  // https://resend.com/docs/send-with-nodejs

  const from = "🧙 example.com <onboarding@resend.dev>";
  const to = userEmail;
  const subject = "Magic Link 🪄";
  const html = `<p style={{color: 'red'}}}>Sign in with this Magic Link: <a href="${verificationLink}" rel="noreferrer"> Sign In </a></p>`;

  const send = await resend.emails.send({
    from,
    to,
    subject,
    html,
  });

  return send.data;
};

export const createEmailVerificationToken = async (
  userId: string,
  email: string
) => {
  await db
    .delete(emailVerificationTokenTable)
    .where(eq(emailVerificationTokenTable.user_id, userId));
  const tokenId = generateIdFromEntropySize(25); // 40 characters long
  await db.insert(emailVerificationTokenTable).values({
    id: tokenId,
    user_id: userId,
    email,
    expires_at: createDate(new TimeSpan(2, "h")).getTime(),
  });
  return tokenId;
};