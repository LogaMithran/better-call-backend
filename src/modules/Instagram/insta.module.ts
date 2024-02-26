import { Module } from '@nestjs/common';
import { InstaResolver } from './insta.resolver';
import { SequelizeModule } from '@nestjs/sequelize';
import { Posts } from '../../Schema/posts.schema';
import { InstaService } from './insta.service';

@Module({
  imports: [
    SequelizeModule.forFeature([Posts]),
  ],
  providers: [InstaResolver, InstaService],
})

export class InstaModule {}