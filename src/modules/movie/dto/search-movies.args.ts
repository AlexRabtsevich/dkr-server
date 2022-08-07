import { ArgsType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { IsNumber, IsOptional } from 'class-validator';

import { MovieSorting } from '@dkr/shared/movie-database';

import { ISearchMoviesParams } from '../movie.interface';

registerEnumType(MovieSorting, { name: 'MovieSorting' });

@ArgsType()
export class SearchMoviesArgs implements ISearchMoviesParams {
  @IsNumber()
  @Field(() => Int)
  page: number;

  @IsOptional()
  @IsNumber()
  @Field(() => Int, { nullable: true })
  year?: number;

  @IsOptional()
  @Field(() => String, { nullable: true })
  language?: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  releaseDateGte?: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  releaseDateLte?: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  runtimeGte?: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  runtimeLte?: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  genreIds?: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  region?: string;

  @IsOptional()
  @Field(() => MovieSorting, { nullable: true })
  sortBy?: MovieSorting;
}
