import { Args, Query, Resolver } from '@nestjs/graphql';
import { InstaFeedResponse, InstaFilter, InstaStoryFilter, InstaStoryResponse, StoryFields } from './insta.model';
import { InstaService } from './insta.service';

@Resolver()
export class InstaResolver {

  constructor(
    private instapostsService: InstaService,
  ) {
  }

  @Query(() => InstaFeedResponse, { nullable: true })
  async getInstFeed(
    @Args('getInstaFeedInput') args: InstaFilter,
  ): Promise<StoryFields | null> {
    return await this.instapostsService.getAllPostsAndSave(args.username, args.hashTag);
  }


  @Query(() => InstaStoryResponse, { nullable: true })
  async getInstStory(
    @Args('getInstaStory') args: InstaStoryFilter,
  ) {
    return await this.instapostsService.getStories(args.userName);
  }
}