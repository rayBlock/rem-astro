import { Link, RouterProvider, createRouter } from "@tanstack/react-router";
import { QueryClientProvider } from "@tanstack/react-query";
import { routeTree } from "./routeTree.gen";
import { queryClient } from "./lib/queryClient";




// Router instance with auth context
const router = createRouter({
    defaultNotFoundComponent: () => {
        return (
            <div className="flex flex-col items-center gap-10 justify-center">
                <h1 className="text-2xl pr-20">Route not found</h1>
                <Link className="hover:underline text-5xl pr-28" to="/">Go home</Link>
            </div>
        )
    },
    routeTree,
    context: {
        //  auth: undefined!,
        queryClient, // This will be set after we wrap the app in an AuthProvider
        session: undefined,
    },
    defaultPreload: 'intent',

});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router;
    }
}

function ReactApp({
    session
}: {
    session: any
}) {

    console.log(session, "sessionista ??");
    
    // const cookieHeader = lucia.sessionCookieName;
    // console.log(cookieHeader, "cookieHeader");

    // const som = lucia.readSessionCookie();
    // const auth = useAuth();
    if (!session) {
        return <div className="w-screen flex justify-center align-middle items-center min-w-screen min-h-screen h-screen absolute ">
            <p className="text-3xl text-primary-content">
                {/* TODO insert animation and Logo  */}
                DriFFs.com
            </p>
        </div>
    }
    return <RouterProvider basepath="/app" router={router}
        context={{ session }}
    />
}

export const App = function ({
    session
}: {
    session: any
}) {
    return (
        <QueryClientProvider client={queryClient}  >
            {/* <Navigation /> */}
            <ReactApp session={session} />
        </QueryClientProvider>
    )

};
