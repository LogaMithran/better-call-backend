import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { InstaService } from '../modules/Instagram/insta.service';
import axios from 'axios';
import { BASE_URL, CAPTION, DUMMY_TOKEN } from '../lib/constants';
import { InjectModel } from '@nestjs/sequelize';
import { Posts } from '../Schema/posts.schema';
import { OrderDetail } from '../Schema/orders.schema';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  constructor(
    @InjectModel(Posts)
    private postsModel: typeof Posts,
    @InjectModel(OrderDetail)
    private orderDetail: typeof OrderDetail,
  ) {
  }

  @Cron(CronExpression.EVERY_5_MINUTES)
  async storeUserEvents(): Promise<boolean> {
    try {
      this.logger.debug('Called when the current second is 45');
      let isInserted: boolean = false;
      await axios.get(`${BASE_URL}/17841426342870040/tags?fields=media_url,username,caption,like_count,media_type,comments_count,timestamp,comments`, {
        params: {
          'access_token': DUMMY_TOKEN,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(async (response) => {
        let data = response.data.data;
        for (let i = 0; i < data.length; i++) {
          const post = await this.postsModel.findOrCreate({
            where: { post_id: data[i].id },
            defaults: {
              post_id: data[i].id,
              media_url: data[i].id,
              caption: CAPTION,
              like_count: data[i].like_count,
              media_type: data[i].media_type,
              comments_count: data[i].comments_count,
              timestamp: data[i].timestamp,
              comments: JSON.stringify(data[i].comments || {}),
              username: data[i].username,
            },
          });
          let updateResponse = await this.orderDetail.update({ score : 1 }, {
            returning: [],
            where: {
              voucher_id: CAPTION
            }
          });
          console.log('Inserted --> ', post.length, updateResponse);
          isInserted = true;
        }
      }).catch((e) => {
        console.log('Error in making call to Facebook', e);
      });
      return isInserted;
    } catch (e) {
      console.log('Error in getting the posts', e);
    }
  }
}