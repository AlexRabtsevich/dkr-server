import { Provider } from '@nestjs/common/interfaces/modules/provider.interface';

import { AuthenticationService } from './authentication.service';
import { AbstractAuthenticationService } from './authentication.interface';

export const authenticationProviders: Provider[] = [
  {
    provide: AbstractAuthenticationService,
    useClass: AuthenticationService,
  },
];
