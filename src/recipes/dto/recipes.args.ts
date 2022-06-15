import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Max, Min, isArray, IsArray, IsString } from 'class-validator';

@ArgsType()
export class RecipesArgs {
  @Field((type) => Int)
  @Min(1)
  @Max(5)
  skip = 1;

  @Field((type) => Int)
  @Min(1)
  @Max(10, { always: true, message: 'ERROR' })
  take: number;
}
