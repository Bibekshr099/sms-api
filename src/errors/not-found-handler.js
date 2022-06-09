export default function notFoundHandler() {
  return new Response('Not Found', { status: 404 });
}
