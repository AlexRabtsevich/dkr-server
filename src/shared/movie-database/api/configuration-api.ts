import { Injectable } from '@nestjs/common';

import { IMDCountry, IMDLanguage } from '@dkr/shared/movie-database';
import { getData } from '@dkr/common/api/utils/response';
import { concatPath } from '@dkr/common/api/utils/path';

import { BaseMDApi } from './base.api';

@Injectable()
export class MDConfigurationApi extends BaseMDApi {
  protected static BASE_CONFIGURATION_PATH = '/configuration';

  public getLanguages(): Promise<IMDLanguage[]> {
    const requestPath = concatPath(MDConfigurationApi.BASE_CONFIGURATION_PATH, '/languages');

    return getData(this.httpClient.get(requestPath));
  }

  public getCountries(): Promise<IMDCountry[]> {
    const requestPath = concatPath(MDConfigurationApi.BASE_CONFIGURATION_PATH, '/countries');

    return getData(this.httpClient.get(requestPath));
  }
}
