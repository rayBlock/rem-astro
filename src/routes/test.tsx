import { lucia } from '@/lib/auth/lucia'
// import { cn } from '@/lib/utils/twM'
import { createFileRoute, Link, useRouterState } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/test')({

  loader: async ({ context }) => {

    console.log(context, "context test loader");

    const sessionId = context.session?.id ?? "null";
    const { session, user } = await lucia.validateSession(sessionId);

    console.log(session, user ?? "none", "session test loader");



  },
  component: () => <ReactComponent />

  // <div>Hello /test! what what

  //   <Link className={cn(  'hover:underline hover:decoration-red-500')} to='/'>go home</Link>
  // </div>
})


const ReactComponent = () => {
  const matches = useRouterState({ select: (s) => s.matches })
  console.log(matches, "matches test");
  const [state, setState] = useState(0);
  const sessionId = matches[1] && matches[1].context.session ? matches[1].context.session.id : "null";

  // const { session, user } = lucia.validateSession(sessionId);

  return (

    <div>
      {state === 0 ? <button onClick={() => setState(1)}>click</button> : <button onClick={() => setState(0)}>clack</button>}
      <br />

      Hello /test! what what

      <br />
      <form method="post" action="/api/logout" id="logout">
        <button>Sign out</button>
      </form>


      <br />
      {JSON.stringify(matches[1].context.session)}

    </div>


  )
}