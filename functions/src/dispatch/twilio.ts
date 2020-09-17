import * as functions from 'firebase-functions';
import * as Client from 'twilio';

import { config } from '../config/config';

const TWILIO_ACCOUNT_SID = functions.config().twilio.account_sid;
const TWILIO_SERVICE_SID = functions.config().twilio.service_sid;
const TWILIO_AUTH_TOKEN = functions.config().twilio.auth_token;

const mockClient = {
  messages: {
    create: () => Promise.resolve(),
  },
};

const client = config.get('env') === 'test' ? mockClient : Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

export const sendSMS = (body: string, to: string) =>
  client.messages.create({
    body,
    from: TWILIO_SERVICE_SID,
    to,
  });
