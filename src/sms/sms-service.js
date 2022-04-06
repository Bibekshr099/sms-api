import { enqueueMessage } from './sms-queue.js';

export async function sendMessage(phone, message) {
  await enqueueMessage(phone, message);
}
