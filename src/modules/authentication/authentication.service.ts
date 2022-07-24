import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UnauthorizedException } from '@nestjs/common';

import { UserEntity } from '@dkr/modules/user';
import { BadRequestException } from '@dkr/shared/http-exception';
import { compareValueWithHashed } from '@dkr/shared/crypt';
import { RefreshTokenService } from '@dkr/modules/refresh-token';

import { TokenService } from './token.service';
import { AbstractAuthenticationService, IAuthentication, RefreshTokenPayload } from './authentication.interface';

export class AuthenticationService extends AbstractAuthenticationService {
  constructor(
    private refreshTokenService: RefreshTokenService,
    @InjectRepository(UserEntity)
    private userEntityRepository: Repository<UserEntity>,
    private tokenService: TokenService,
  ) {
    super();
  }

  public async authenticate(userEmail: string, password: string): Promise<IAuthentication> {
    const user = await this.userEntityRepository.findOne({ where: { email: userEmail }, select: ['password', 'uuid'] });

    if (!user) {
      throw new BadRequestException('email', 'User with such email does not exist');
    }

    if (!(await compareValueWithHashed(password, user.password))) {
      throw new BadRequestException('password', 'Password is not valid');
    }

    return this.generateAuthentication(user.uuid);
  }

  public async refreshAuthentication(refreshToken): Promise<IAuthentication> {
    const isTokenValid = await this.tokenService.isRefreshTokenValid(refreshToken);

    if (!isTokenValid) {
      throw new UnauthorizedException('Invalid token');
    }

    const { userUuid } = this.tokenService.decodeToken<RefreshTokenPayload>(refreshToken);
    const isRefreshTokenExist = await this.refreshTokenService.isRefreshTokenExist(refreshToken, userUuid);

    if (!isRefreshTokenExist) {
      throw new UnauthorizedException('Token not found');
    }

    return this.generateAuthentication(userUuid);
  }

  public async deleteAuthentication(userUuid: string): Promise<boolean> {
    await this.refreshTokenService.deleteRefreshToken(userUuid);

    return true;
  }

  private async generateAuthentication(userUuid: string): Promise<IAuthentication> {
    const accessToken = this.tokenService.generateAccessToken(userUuid);
    const refreshToken = this.tokenService.generateRefreshToken(userUuid);
    const { exp } = await this.tokenService.decodeToken<RefreshTokenPayload>(refreshToken);
    await this.refreshTokenService.saveRefreshToken(exp, userUuid);

    return { accessToken, refreshToken };
  }
}
