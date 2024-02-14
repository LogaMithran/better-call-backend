import { Field, InputType, Int, ObjectType, Scalar } from '@nestjs/graphql';

@InputType()
export class Feed{
  @Field(type => Int, {nullable: false})
  feedId: number
}

@ObjectType()
export class FeedResponse{
  @Field(type => Int, {nullable: false})
  feedId: number

  @Field({nullable: false})
  feedSubject: string
}