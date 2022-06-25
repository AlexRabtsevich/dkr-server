import { ArgsType, Field, Int } from '@nestjs/graphql';
import { IsNumber, Min } from 'class-validator';

import { DEFAULT_PAGE } from '@dkr/common/constants/pagination';

@ArgsType()
export class PaginationArgs {
  @IsNumber()
  @Min(DEFAULT_PAGE)
  @Field(() => Int)
  page: number;
}
