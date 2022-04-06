import config from '../config.js';

export default function authenticate() {
  return function authenticate(req, res, next) {
    const token = req.header('x-auth-token');

    if (!token || token !== config.accessToken) {
      return res.status(401).end('Unauthorized');
    }

    next();
  };
}
