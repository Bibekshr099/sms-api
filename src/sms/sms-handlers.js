import * as smsService from './sms-service.js';

export async function sendMessage(req, res) {
  await smsService.sendMessage(req.body.phone, req.body.message);
  res.status(200).end('Message Sent');
}
