import { Injectable } from '@nestjs/common';

import { TMDBApi } from '@dkr/common/api/TMDB';
import { concatPath } from '@dkr/common/api/utils/path';
import { getData } from '@dkr/common/api/utils/response';

import { IMovieGenreResponse, MovieGenre } from '../movie-genre.types';

@Injectable()
export class TMDBMovieGenreApi extends TMDBApi {
  private static REQUEST_PATH = '/genre';

  public async getMovieGenres(): Promise<MovieGenre[]> {
    const path = concatPath(TMDBMovieGenreApi.REQUEST_PATH, '/movie/list');
    const { genres } = await getData(this.httpClient.get<IMovieGenreResponse>(path));

    return genres;
  }
}
