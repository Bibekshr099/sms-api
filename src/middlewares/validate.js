export default function validate(schema) {
  return async function validate(req, res, next) {
    try {
      const result = await schema.validate({
        body: req.body,
        query: req.query,
        params: req.params
      });

      req.body = result.body;
      req.query = result.query;
      req.params = result.params;

      next();
    } catch (err) {
      res.status(422).end('Unprocessable Entity');
    }
  };
}
