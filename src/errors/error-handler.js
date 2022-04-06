export default function errorHandler(error, req, res, next) {
  console.error(error);
  res.status(500).end('Internal Server Error');
}
