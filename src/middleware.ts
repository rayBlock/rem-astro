

import { verifyRequestOrigin } from "lucia";
import { defineMiddleware } from "astro:middleware";
import { lucia } from "./lib/auth/lucia";


export const onRequest = defineMiddleware(async (context, next) => {
	if (context.request.method !== "GET") {
		console.log("not a get", context.request.method);
		
		const originHeader = context.request.headers.get("Origin");
		const hostHeader = context.request.headers.get("Host");
		console.log('originHeader', originHeader, 'hostHeader', hostHeader);
		if (!originHeader || !hostHeader || !verifyRequestOrigin(originHeader, [hostHeader])) {
			return new Response(null, {
				status: 403
			});
		}
	}
	
	const sessionId = context.cookies.get(lucia.sessionCookieName)?.value ?? null;
	console.log(sessionId, "sessionId");
	
	if (!sessionId) {
		context.locals.user = null;
		context.locals.session = null;
		return next();
	}

	const { session, user } = await lucia.validateSession(sessionId);
	console.log(session, "session from lucia validat");
	
	if (session && session.fresh) {
		const sessionCookie = lucia.createSessionCookie(session.id);
		context.cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
	}

	if (!session) {
		const sessionCookie = lucia.createBlankSessionCookie();
		context.cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
	}

	context.locals.session = session;
	context.locals.user = user;
	return next();
});
