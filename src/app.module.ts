import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import { graphQLConfig } from '@dkr/gql/gql.config';
import { TypeOrmConfigService } from '@dkr/typeorm/typeorm.service';

import * as modules from './modules';

@Module({
  imports: [
    ...Object.values(modules),
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot(graphQLConfig),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
  ],
})
export class AppModule {}
