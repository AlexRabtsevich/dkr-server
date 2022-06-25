import { ObjectType } from '@nestjs/graphql';

import { Paginated } from '@dkr/common/models/pagination.model';

import { MovieModel } from './movie.model';

@ObjectType({ description: 'Movies with pagination info' })
export class MoviesResultsModelWithPagination extends Paginated(MovieModel) {}
