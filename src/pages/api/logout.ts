
import { lucia } from "@/lib/auth/lucia";
import type { APIRoute } from "astro";
import type { APIContext } from "astro";


export const POST: APIRoute = async ({
  locals,
  cookies,
  redirect,
  request,
}: APIContext) => {
  const session = locals.session;
  const origin = request.headers.get("origin")!;

  if (session) {
    await lucia.invalidateSession(session.id);
    const sessionCookie = lucia.createBlankSessionCookie();

    cookies.set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );
  }

  return redirect(origin, 303);
};