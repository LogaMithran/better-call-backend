import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  InstaFeedResponse,
  InstaFilter,
  InstaStoryFilter,
  InstaStoryResponse,
  StoreResponse,
  StoryFields,
} from './insta.model';
import { InstaService } from './insta.service';
import { isBoolean } from '@nestjs/graphql/dist/plugin/utils/ast-utils';

@Resolver()
export class InstaResolver {

  constructor(
    private instapostsService: InstaService,
  ) {
  }

  @Mutation(returns => StoreResponse)
  async syncUserEvents(
    @Args('StoreEvents') args: InstaFilter,
  ): Promise<StoreResponse> {
    let response = await this.instapostsService.storeUserEvents();

    if (response) {
      return {
        status: true,
      };
    } else {
      return {
        status: false,
      };
    }
  }

  @Query(() => [InstaFeedResponse], { nullable: true })
  async getInstFeed(
    @Args('getInstaFeedInput') args: InstaFilter,
  ): Promise<StoryFields[] | null> {
    return await this.instapostsService.getAllPostsAndSave(args.username, args.hashTag);
  }


  @Query(() => InstaStoryResponse, { nullable: true })
  async getInstStory(
    @Args('getInstaStory') args: InstaStoryFilter,
  ) {
    return await this.instapostsService.getStories(args.userName);
  }
}