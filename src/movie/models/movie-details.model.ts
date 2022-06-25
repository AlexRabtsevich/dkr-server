import { Field, ObjectType } from '@nestjs/graphql';

import { AnyObject } from '@dkr/common/typings';

import { MovieDetails } from '../movie.types';
import { GenreModel } from '../../genre/models/genre.model';
import { MovieProductionCompanyModel } from './movie-production-company.model';
import { MovieProductionCountryModel } from './movie-production-country.model';
import { MovieSpokenLanguageModel } from './movie-spoken-language.model';
import { BaseMovieModel } from './base-movie.model';
import { MovieStatus } from '../TMDB/TMDB-movie.types';

@ObjectType({ description: 'Movie details' })
export class MovieDetailsModel extends BaseMovieModel implements MovieDetails {
  @Field(() => String, { nullable: true })
  belongsToCollection: AnyObject;

  @Field(() => Number)
  budget: number;

  @Field(() => [GenreModel])
  genres: [GenreModel];

  @Field(() => String, { nullable: true })
  homepage: string;

  @Field(() => String, { nullable: true })
  imdbId: string;

  @Field(() => [MovieProductionCompanyModel])
  productionCompanies: [MovieProductionCompanyModel];

  @Field(() => [MovieProductionCountryModel])
  productionCountries: [MovieProductionCountryModel];

  @Field(() => Number)
  revenue: number;

  @Field(() => Number, { nullable: true })
  runtime: number;

  @Field(() => [MovieSpokenLanguageModel])
  spokenLanguages: [MovieSpokenLanguageModel];

  @Field(() => String)
  status: MovieStatus;

  @Field(() => String, { nullable: true })
  tagline: string;
}
