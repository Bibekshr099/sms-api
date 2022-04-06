import 'dotenv/config';
import fromEnv from './utils/from-env.js';

export default {
  port: fromEnv('PORT'),
  devMode: fromEnv('NODE_ENV') === 'development',
  accessToken: fromEnv('ACCESS_TOKEN'),
  smsQueue: {
    accessKeyId: fromEnv('AWS_QUEUE_ACCESS_KEY_ID'),
    secretAccessKey: fromEnv('AWS_QUEUE_SECRET_ACCESS_KEY'),
    queueUrl: fromEnv('AWS_QUEUE_URL'),
    region: fromEnv('AWS_QUEUE_REGION')
  }
};
