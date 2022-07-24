import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { JwtGuard } from '@dkr/modules/authentication/jwt.guard';
import { JwtPayload } from '@dkr/modules/authentication/jwt-payload.decorator';

import { AuthenticationDto, RefreshAuthenticationDto } from './dto';
import { AbstractAuthenticationService, IAuthentication } from './authentication.interface';
import { AuthenticationModel, LogoutModel } from './models';

@Resolver()
export class AuthenticationResolver {
  constructor(private readonly authenticationService: AbstractAuthenticationService) {}

  @Mutation(() => AuthenticationModel)
  public async authenticate(@Args('authentication') { email, password }: AuthenticationDto): Promise<IAuthentication> {
    return await this.authenticationService.authenticate(email, password);
  }

  @Mutation(() => AuthenticationModel)
  public async refreshAuthentication(
    @Args('refreshToken') { refreshToken }: RefreshAuthenticationDto,
  ): Promise<IAuthentication> {
    return await this.authenticationService.refreshAuthentication(refreshToken);
  }

  @Mutation(() => LogoutModel)
  @UseGuards(JwtGuard)
  public async logout(@JwtPayload('userUuid') userUuid: string): Promise<LogoutModel> {
    const success = await this.authenticationService.deleteAuthentication(userUuid);

    return { success };
  }
}
