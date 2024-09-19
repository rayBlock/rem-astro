import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
// import { TanStackRouterDevtools } from "@tanstack/router-devtools";
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import type { QueryClient } from "@tanstack/react-query";

export interface SessionContext {
  id: string;
  userId: string;
  fresh: boolean;
  expiresAt: string;
}


interface MyRouterContext {
  queryClient: QueryClient
  session: SessionContext | undefined
}


export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <Outlet />
  )
}
// Fragments & devTools
{/* {import.meta.env.DEV && <TanStackRouterDevtools initialIsOpen={false} />}
{import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />} */}
