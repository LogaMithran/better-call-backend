import { Args, Query, Resolver } from '@nestjs/graphql';
import { InstaFeedResponse, InstaFilter } from './insta.model';

@Resolver()
export class InstaResolver{
  @Query(returns => InstaFeedResponse)
  getInstFeed(
    @Args("getInstaFeedInput") args: InstaFilter
  ){
    return {}
  }
}