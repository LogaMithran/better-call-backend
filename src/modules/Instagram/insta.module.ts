import { Module } from '@nestjs/common';
import { InstaResolver } from './insta.resolver';

@Module({
  imports: [],
  providers: [InstaResolver]
})

export class InstaModule {}