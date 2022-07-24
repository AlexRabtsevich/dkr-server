import { Module } from '@nestjs/common';

import { movieGenreServiceProviders } from './movie-genre.providers';
import { MovieGenreResolver } from './movie-genre.resolver';

@Module({
  providers: [...movieGenreServiceProviders, MovieGenreResolver],
})
export class MovieGenreModule {}
