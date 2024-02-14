import { Resolver, Query, Args } from '@nestjs/graphql';
import { Feed, FeedResponse } from './feed.model';
import { FeedService } from './feed.service';

@Resolver()
export class FeedResolver{
  constructor(private readonly feedService: FeedService) {
  }
  @Query(returns => FeedResponse)
  getFeed(@Args("feedInput") args: Feed): FeedResponse{
    return this.feedService.getFeed();
  }

  @Query(returns => FeedResponse)
  getAllFeed(@Args('allFeedInput') args: Feed): FeedResponse{
    return {feedSubject: "", feedId: 1}
  }
}