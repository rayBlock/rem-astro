// import { Navigation } from '@/components/Nav/Nav';
import { lucia } from '@/lib/auth/lucia';
import { Player } from '@remotion/player';
import { createFileRoute, useRouterState } from '@tanstack/react-router'
import { MyComp } from 'rem/Composition';

export const Route = createFileRoute('/')({
    beforeLoad: async ({ location }) => {

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

        return (
            <div className='mt-6 flex justify-center items-center w-full flex-col gap-28'>
                {/* <Navigation from={'/'} /> */}
                <Player
                    component={MyComp}
                    compositionHeight={360}
                    compositionWidth={640}
                    durationInFrames={300}
                    fps={30}
                    controls
                    allowFullscreen
                    clickToPlay />
                {/* {JSON.stringify(so)} */}
            </div>
        )
    }


})