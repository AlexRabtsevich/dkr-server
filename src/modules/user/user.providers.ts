import { Provider } from '@nestjs/common/interfaces/modules/provider.interface';

import { UserService } from './user.service';
import { AbstractUserService } from './user.interface';

export const userProviders: Provider[] = [
  {
    provide: AbstractUserService,
    useClass: UserService,
  },
];
