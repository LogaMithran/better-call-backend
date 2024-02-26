import { Field, InputType, Int, ObjectType, ID } from '@nestjs/graphql';

@InputType()
export class InstaFilter {
  @Field({ nullable: false })
  hashTag: string;

}

@ObjectType()

export class InstaFeedResponse {
  @Field(type => ID, { nullable: false })
  id: number;

  @Field({ nullable: false })
  media_url: string;

  @Field()
  caption: string;
}
