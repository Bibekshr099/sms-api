import AWS from 'aws-sdk';
import config from '../config.js';

const sqs = new AWS.SQS({
  apiVersion: '2012-11-05',
  accessKeyId: config.smsQueue.accessKeyId,
  secretAccessKey: config.smsQueue.secretAccessKey,
  region: config.smsQueue.region
});

export function enqueueMessage(phone, message) {
  return new Promise((resolve, reject) => {
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

    sqs.sendMessage(params, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}
