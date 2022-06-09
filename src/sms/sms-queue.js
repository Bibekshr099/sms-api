import { SQSClient, SendMessageCommand } from '@aws-sdk/client-sqs';
import config from '../config.js';

async function sqsCredentialProvider() {
  return {
    accessKeyId: config.smsQueue.accessKeyId,
    secretAccessKey: config.smsQueue.secretAccessKey
  };
}

function getSQSClient() {
  return new SQSClient({
    region: config.smsQueue.region,
    credentialDefaultProvider: sqsCredentialProvider
  });
}

export async function enqueueMessage(phone, message) {
  const client = getSQSClient();

  const params = {
    MessageGroupId: '0',
    MessageBody: JSON.stringify({
      phone,
      message,
      date: new Date().toISOString(),
      attempt: 1
    }),
    QueueUrl: config.smsQueue.queueUrl
  };

  return await client.send(new SendMessageCommand(params));
}
