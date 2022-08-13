import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TypeOrmConfigService } from './typeorm/typeorm.service';
import { graphQLConfig, DateScalar } from './gql';
import * as modules from './modules';

@Module({
  imports: [
    ...Object.values(modules),
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot(graphQLConfig),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
  ],
  providers: [DateScalar],
})
export class AppModule {}
