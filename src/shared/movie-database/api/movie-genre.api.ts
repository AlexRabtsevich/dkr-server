import { Injectable } from '@nestjs/common';

import { concatPath } from '@dkr/common/api/utils/path';
import { getData } from '@dkr/common/api/utils/response';

import { BaseTheMovieDatabaseApi } from './base.api';
import { IMDMovieGenreResponse, IMDMovieGenre } from '../interfaces';

@Injectable()
export class MDMovieGenreApi extends BaseTheMovieDatabaseApi {
  private static REQUEST_PATH = '/genre';

  public async getMovieGenres(): Promise<IMDMovieGenre[]> {
    const path = concatPath(MDMovieGenreApi.REQUEST_PATH, '/movie/list');
    const { genres } = await getData(this.httpClient.get<IMDMovieGenreResponse>(path));

    return genres;
  }
}
