import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Type } from '@nestjs/common';

import { ResultsWithPagination } from '@dkr/common/typings';

export function Paginated<T>(classRef: Type<T>): any {
  @ObjectType({ isAbstract: true })
  abstract class ResultsWithPaginationModel implements ResultsWithPagination<T> {
    @Field(() => Int)
    public page: number;

    @Field(() => Int)
    public totalPages: number;

    @Field(() => Int)
    public totalResults: number;

    @Field(() => [classRef])
    public results: T[];
  }

  return ResultsWithPaginationModel;
}
