import { Injectable } from '@nestjs/common';

import { MovieApi } from '@dkr/common/api/movie';
import { concatPath } from '@dkr/common/api/utils/path';
import { getData } from '@dkr/common/api/utils/response';

import { IMovieGenreResponse, MovieGenre } from './movie-genre.type';

@Injectable()
export class MovieGenreApi extends MovieApi {
  private static REQUEST_PATH = '/genre';

  public async getMovieGenres(): Promise<MovieGenre[]> {
    const path = concatPath(MovieGenreApi.REQUEST_PATH, '/movie/list');
    const { genres } = await getData(this.httpClient.get<IMovieGenreResponse>(path));

    return genres;
  }
}
