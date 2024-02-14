import { FeedResponse } from './feed.model';

export class FeedService {
  getFeed(): FeedResponse {
    return {
      feedId: 1,
      feedSubject: "Hello There I am the feed 1"
    }
  }
}