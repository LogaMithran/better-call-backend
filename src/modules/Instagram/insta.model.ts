import { Field, InputType, Int, ObjectType, ID } from '@nestjs/graphql';


export interface StoryFields {
  ig_id: string;
  caption: string;
  owner: {
    id: string
  };
  username: string;
  timestamp: string;
  permalink: string;
}

@InputType()
export class InstaFilter {
  @Field({ nullable: false })
  username: string;

  @Field({ nullable: false })
  hashTag: string;

}

// caption,ig_id,owner,username,permalink,timestamp
//
// "owner": {
//   "id": "17841426342870040"
// },

@InputType()
export class InstaStoryFilter {
  @Field({ nullable: false })
  userName: string;
}


@ObjectType()
export class InstaStoryResponse {
  @Field({ nullable: true })
  ig_id: string;

  @Field({ nullable: true })
  caption: string;

  @Field({ nullable: true })
  owner: string;
  @Field({ nullable: true })
  username: string;

  @Field({ nullable: true })
  timestamp: string;

  @Field({ nullable: true })
  permalink: string;

}


@ObjectType()
export class InstaFeedResponse {
  @Field({ nullable: true })
  id: number;

  @Field({ nullable: true })
  media_url: string;

  @Field({ nullable: true })
  caption: string;

  @Field({ nullable: true })
  username: string;
}
