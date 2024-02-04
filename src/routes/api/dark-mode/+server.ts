import type { RequestHandler } from "./$types";

export const POST: RequestHandler = async (request) => {
  const body =  request.request.body;
  console.log(body);

  return new Response(null);
}
