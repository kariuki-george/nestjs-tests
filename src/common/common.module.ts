import { Module } from '@nestjs/common';
import { ConfigModule } from './config.module';
import { GraphQlModule } from './graphql.module';
import { MongoModule } from './mongo.module';

@Module({
  imports: [ConfigModule, GraphQlModule, MongoModule],
  exports: [ConfigModule, GraphQlModule, MongoModule],
})
export class CommonModule {}
