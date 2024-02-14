import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType()
export class MailerInput {

  @Field({ nullable: false })
  from: string;

  @Field({ nullable: false })
  body: string;
}

@ObjectType()
export class MailerResponse {
  @Field({ nullable: false, defaultValue: true || false })
  status: boolean;

  @Field({ nullable: false })
  response: string;
}