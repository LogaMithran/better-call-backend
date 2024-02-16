import { FeedResponse } from './feed.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { createConnection, Model, Query } from 'mongoose';
import { Db } from 'mongodb';
import { FeedTable } from '../../Schema/feeds.schema';

@Injectable()
export class FeedService {

  constructor(
    @InjectModel(FeedTable)
    private feedModel: typeof FeedTable
  ) {
  }

  async getFeed(): Promise<FeedResponse> {
    try {
      let response = await this.feedModel.findAll({
        raw: true
      })

      return {
        feedId: 1,
        feedSubject: 'Hello There I am the feed 1',
      };
    } catch (e) {
      console.log(e);
    }
  }
}