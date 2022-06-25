import { Module } from '@nestjs/common';

import { TMDBMovieServiceProviders } from './TMDB/TMDB-genre.provider';
import { MovieResolver } from './movie.resolver';

@Module({
  providers: [...TMDBMovieServiceProviders, MovieResolver],
})
export class MovieModule {}
