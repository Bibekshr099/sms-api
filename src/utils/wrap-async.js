export default function wrapAsyncHandler(handler) {
  return function wrappedHandler(req, res, next) {
    handler(req, res, next).catch(next);
  };
}
