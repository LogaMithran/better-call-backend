import { MailerInput, MailerResponse } from './mailer.model';
import { createTransport, SentMessageInfo } from 'nodemailer';

export class MailerService {
  async sendMail(args: MailerInput): Promise<MailerResponse> {
    try {
      const mailerInstance = createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: 'logamithran2001@gmail.com',
          pass: 'liqfgnydklrzgdjo',
        },
        tls: {
          rejectUnauthorized: true,
          minVersion: 'TLSv1.2',
        },
      });
      console.log(`${args.from} is sending a mail`);
      const response: SentMessageInfo = await mailerInstance.sendMail({
        from: args.from,
        to: "logamithran2001@gmail.com",
        subject: `${args.from} sent you a message`,
        html: `Message from ${args.from} <br> ${args.body}`,
      });
      if (response && response.accepted && response.response.toLowerCase().includes('ok')) {
        console.log(`Mail sent successfully`);
        return {
          status: true,
          response: response.response,
        };
      }
    } catch (e: any) {
      return {
        status: false,
        response: e.message,
      };
    }
  }
}