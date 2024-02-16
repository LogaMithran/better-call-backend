import { Module } from '@nestjs/common';
import { FeedResolver } from './feed.resolver';
import { FeedService } from './feed.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { FeedTable } from '../../Schema/feeds.schema';

@Module({
  imports: [
    SequelizeModule.forFeature([FeedTable])
  ],
  providers: [FeedResolver, FeedService]
})

export class FeedModule {}