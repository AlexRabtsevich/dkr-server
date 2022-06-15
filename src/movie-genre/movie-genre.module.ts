import { Module } from '@nestjs/common';

import { MovieGenreService } from './movie-genre.service';
import { MovieGenreResolver } from './movie-genre.resolver';
import { MovieGenreApi } from './movie-genre.api';

@Module({
  providers: [MovieGenreApi, MovieGenreService, MovieGenreResolver],
})
export class MovieGenreModule {}
