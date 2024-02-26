import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Posts } from '../../Schema/posts.schema';
import axios from 'axios';
import { BASE_URL, CAPTION, DUMMY_TOKEN } from '../../lib/constants';
import { response } from 'express';
import { StoryFields } from './insta.model';

@Injectable()
export class InstaService {
  constructor(
    @InjectModel(Posts)
    private postsModel: typeof Posts,
  ) {
  }

  async getAllPostsAndSave(userName: string, hashTag: string): Promise<StoryFields[] | null> {
    try {
      let postResponse: any = [];
      let response = await this.postsModel.findAll({
        where: {
          username: userName,
        },
      });
      if (response) {
        for (let i = 0; i < response.length; i++) {
          if (userName == response[i].username && response[i].caption.trim().includes(hashTag)) {
            postResponse.push(response[i]);
          }
        }
      } else {
        return null;
      }
      return postResponse || [];
    } catch (e) {
      console.log('Error in getting the posts', e);
    }
  }

  async getStories(userName: string): Promise<StoryFields> {
    try {
      let storyResponse: any = {};
      await axios.get(`${BASE_URL}/17841426342870040/stories?fields=caption,ig_id,owner,username`, {
        params: {
          'access_token': DUMMY_TOKEN,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => {
        let data = response.data.data;
        for (let i = 0; i < data.length; i++) {
          if (userName == data[i].username) {
            console.log(JSON.stringify(data));
            storyResponse = data[i];
          }
        }
        console.log(storyResponse);
      }).catch((err) => {
        console.log(err);
      });
      return storyResponse;
    } catch (e) {
      console.log('Error in getting the story', e);
    }
  }

  async storeUserEvents(): Promise<boolean> {
    try {
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
          console.log('Inserted --> ', post);
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