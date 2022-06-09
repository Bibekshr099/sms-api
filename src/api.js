import { Router } from 'itty-router';
import notFoundHandler from './errors/not-found-handler.js';
import smsRoutes from './sms/sms-routes.js';

const api = Router();
api.all('/api/v1/sms/*', smsRoutes.handle);
api.all('*', notFoundHandler);

export default api;
