import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BaseMovieModel {
  @Field(() => String, { nullable: true })
  posterPath: string;

  @Field(() => Boolean)
  adult: boolean;

  @Field(() => String, { nullable: true })
  overview: string;

  @Field(() => String)
  releaseDate: string;

  @Field(() => ID)
  id: number;

  @Field(() => String)
  originalTitle: string;

  @Field(() => String)
  originalLanguage: string;

  @Field(() => String)
  title: string;

  @Field(() => String, { nullable: true })
  backdropPath: string;

  @Field(() => Number)
  popularity: number;

  @Field(() => Boolean)
  video: boolean;

  @Field(() => Number)
  voteAverage: number;

  @Field(() => Number)
  voteCount: number;
}
