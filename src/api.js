import { Router } from 'express';
import smsRoutes from './sms/sms-routes.js';

const api = Router();
api.use('/sms', smsRoutes);

export default api;
