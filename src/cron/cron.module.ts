import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksService } from './cron.service';
import { InstaService } from '../modules/Instagram/insta.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Posts } from '../Schema/posts.schema';
import { OrderDetail } from '../Schema/orders.schema';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    SequelizeModule.forFeature([Posts, OrderDetail]),
  ],
  providers: [TasksService],
})
export class CronModule {
}