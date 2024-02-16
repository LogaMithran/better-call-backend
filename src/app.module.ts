import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { FeedModule } from './modules/Feed/feed.module';
import { MailerModule } from './modules/Mailer/mailer.module';
import { MongoModule } from './Data store/postgress/mongo.module';
import { MysqlProvider } from './Data store/mysql/mysql.provider';

@Module({
  imports: [
    FeedModule,
    MailerModule,
    MysqlProvider,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: 'schema.gql',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
