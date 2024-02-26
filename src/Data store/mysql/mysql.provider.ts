import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import Dialect from 'sequelize';
import { FeedTable } from '../../Schema/feeds.schema';
import { Posts } from '../../Schema/posts.schema';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      imports: [],
      useFactory: () => ({
        models: [FeedTable, Posts],
        name: 'portfolio',
        host: 'stagedb-ar.caratlane.com',
        username: 'nidhistageuser',
        password: 'Re#dfg44565y7gfde45566fde4445',
        database: 'nidhi_stage',
        dialect: 'mysql',
        port: 6606
      }),
    }),
  ],
})

export class MysqlProvider {}