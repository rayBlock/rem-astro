import type { APIContext, APIRoute } from "astro";

export const prerender = false;

export const GET: APIRoute = async ({ request, redirect }: APIContext) => {
  console.log(request, "req");

  return redirect("/new", 303);
};

export const POST: APIRoute = async ({ redirect, request }: APIContext) => {
  console.log(request, "req");

  //   const respo = new Response(JSON.stringify({ id: "helloWorld" }), {
  //     status: 200,
  //   });

  //   return respo;
  return redirect("/nonsense", 303);
};
