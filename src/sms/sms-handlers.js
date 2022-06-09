import * as smsService from './sms-service.js';
import * as smsValidators from './sms-validators.js';
import validateSanitize from '../utils/validate-sanitize.js';

export async function sendMessage(request) {
  const { body } = await validateSanitize(request, smsValidators.sendMessage);
  await smsService.sendMessage(body.phone, body.message);
  return new Response('Message Sent', { status: 200 });
}
