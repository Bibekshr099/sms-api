import config from '../config.js';

export default function authenticate() {
  return function authenticate(request) {
    const token = request.headers.get('x-auth-token');

    if (!token || token !== config.accessToken) {
      return new Response('Unauthorized', { status: 401 });
    }
  };
}
