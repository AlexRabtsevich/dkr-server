import { Module } from '@nestjs/common';

import { MovieGenreResolver } from './movie-genre.resolver';
import { TMDBServiceProviders } from './TMDB/TMDB-movie-genre.provider';

@Module({
  providers: [...TMDBServiceProviders, MovieGenreResolver],
})
export class MovieGenreModule {}
