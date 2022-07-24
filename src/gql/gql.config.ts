import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { DirectiveLocation, GraphQLDirective } from 'graphql';

import { upperDirectiveTransformer } from './utils/gql.transformer';

export const graphQLConfig: ApolloDriverConfig = {
  driver: ApolloDriver,
  autoSchemaFile: 'schema.gql',
  transformSchema: (schema) => upperDirectiveTransformer(schema, 'upper'),
  installSubscriptionHandlers: true,
  playground: true,
  buildSchemaOptions: {
    directives: [
      new GraphQLDirective({
        name: 'upper',
        locations: [DirectiveLocation.FIELD_DEFINITION],
      }),
    ],
  },
};
