import { Module } from '@nestjs/common';

import { movieServiceProviders } from './movie.providers';
import { MovieResolver } from './movie.resolver';

@Module({
  providers: [...movieServiceProviders, MovieResolver],
  exports: [...movieServiceProviders],
})
export class MovieModule {}
