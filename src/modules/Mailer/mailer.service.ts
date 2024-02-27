import { MailerInput, MailerResponse } from './mailer.model';
import { createTransport, SentMessageInfo } from 'nodemailer';
import * as Handlebars from 'handlebars';
import * as fs from 'fs';
import * as path from 'path';


export class MailerService {
  async sendMail(args: MailerInput): Promise<MailerResponse> {
    try {
      const mailerInstance = createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: 'tushargoel.s@caratlane.com',
          pass: 'fher zkht gnbo zwvg ',
        },
        tls: {
          rejectUnauthorized: true,
          minVersion: 'TLSv1.2',
        },
      });
      
      let fileName = args.type === "rewards"? 'rewards.hbs' : 'welcome.hbs'
      const filePath = path.join('/home/tushar/better-call-backend/dist/Data store/templates/', fileName);
      const template = Handlebars.compile(fs.readFileSync(filePath, 'utf8'));
      console.log(`${args.from} is sending a mail`);
      const response: SentMessageInfo = await mailerInstance.sendMail({
        from: args.from,
        to: args.to,
        subject: `Caratlane Community`,
        html: template({ name: args.from }),
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