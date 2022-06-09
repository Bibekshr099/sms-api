export default {
  devMode: NODE_ENV === 'development',
  accessToken: ACCESS_TOKEN,
  smsQueue: {
    accessKeyId: AWS_QUEUE_ACCESS_KEY_ID,
    secretAccessKey: AWS_QUEUE_SECRET_ACCESS_KEY,
    queueUrl: AWS_QUEUE_URL,
    region: AWS_QUEUE_REGION
  }
};
