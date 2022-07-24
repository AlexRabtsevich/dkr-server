import { Provider } from '@nestjs/common/interfaces/modules/provider.interface';

import { GenderService } from './gender.service';
import { AbstractGenderService } from './gender.interface';

export const genderProviders: Provider[] = [
  {
    provide: AbstractGenderService,
    useClass: GenderService,
  },
];
