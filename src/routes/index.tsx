// import { Navigation } from '@/components/Nav/Nav';
import { lucia } from '@/lib/auth/lucia';
import { createFileRoute, useRouterState } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
    beforeLoad: async ({ location }) => {



        // const so = lucia.readSessionCookie();
        console.log(location, "location")
        // if (!isAuthenticated()) {
        //   throw redirect({
        //     to: '/login',
        //     search: {
        //       // Use the current location to power a redirect after login
        //       // (Do not use `router.state.resolvedLocation` as it can
        //       // potentially lag behind the actual current location)
        //       redirect: location.href,
        //     },
        //   })
        // }
    },
    loader: async ({ context }) => {
        console.log(context, "context");

        const s = await lucia.validateSession(context.session?.id as string);
        return s
    },
    component: () => {

        const matches = useRouterState({ select: (s) => s.matches })
        console.log(matches, "matches");

        const { session: so } = Route.useRouteContext();
        console.log(so, "so");

        const { session, user } = Route.useLoaderData();
        console.log(user, "rr");

        // const t = useRouterState().matches;
        // console.log(t, "tttttt");

        return (
            <div>
                {/* <Navigation from={'/'} /> */}
                Hello / world
                {JSON.stringify(so)}
                {/* {JSON.stringify(matches[0].context.session)} */}
            </div>
        )
    }


})