import { Module } from '@nestjs/common';

import { GenreService } from './genre.service';
import { GenreResolver } from './genre.resolver';
import { GenreApi } from './genre.api';

@Module({
  providers: [GenreApi, GenreService, GenreResolver],
})
export class GenreModule {}
