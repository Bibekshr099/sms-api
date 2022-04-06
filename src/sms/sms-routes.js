import { Router } from 'express';
import authenticate from '../middlewares/authenticate.js';
import wrapAsyncHandler from '../utils/wrap-async.js';
import * as smsValidators from './sms-validators.js';
import validate from '../middlewares/validate.js';
import * as smsHandlers from './sms-handlers.js';

const router = Router();

router.post(
  '/send',
  authenticate(),
  validate(smsValidators.sendMessage),
  wrapAsyncHandler(smsHandlers.sendMessage)
);

export default router;
