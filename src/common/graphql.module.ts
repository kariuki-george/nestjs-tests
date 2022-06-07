import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';

import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: './schema.qll',
      debug: true,
      playground: true,
      introspection: true,
      driver: ApolloDriver,
      //plugins: [ApolloServerPluginLandingPageLocalDefault],
    }),
  ],
})
export class GraphQlModule {}
