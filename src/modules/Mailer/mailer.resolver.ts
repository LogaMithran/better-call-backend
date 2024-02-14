import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { MailerInput, MailerResponse } from './mailer.model';
import { MailerService } from './mailer.service';

@Resolver((of) => MailerInput)
export class MailerResolver {

  constructor(private readonly mailerService: MailerService) {
  }

  @Mutation(returns => MailerResponse)
  async sendMail(
    @Args('sendMailInput') args: MailerInput
  ): Promise<MailerResponse> {
    return await this.mailerService.sendMail(args);
  }
}
