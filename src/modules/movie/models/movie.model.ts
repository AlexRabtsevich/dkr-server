import { Field, ObjectType } from '@nestjs/graphql';

import { Movie } from '../movie.interface';
import { BaseMovieModel } from './base-movie.model';

@ObjectType({ description: 'Movie list' })
export class MovieModel extends BaseMovieModel implements Movie {
  @Field(() => [Number], { nullable: true })
  genresId: number[];
}
