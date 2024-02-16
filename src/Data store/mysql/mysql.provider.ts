import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import Dialect from 'sequelize';
import { FeedTable } from '../../Schema/feeds.schema';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      imports: [],
      useFactory: () => ({
        models: [FeedTable],
        name: 'portfolio',
        host: 'localhost',
        username: 'root',
        password: 'Ksrmk.logamithran2001',
        database: 'portfolio',
        dialect: 'mysql'
      }),
    }),
  ],
})

export class MysqlProvider {}