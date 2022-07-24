import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';

import { RefreshTokenEntity } from './refresh-token.entity';
import { IRefreshToken } from './refresh-token.interface';

export class RefreshTokenService {
  constructor(
    @InjectRepository(RefreshTokenEntity)
    private refreshTokenRepository: Repository<RefreshTokenEntity>,
  ) {}

  public async isRefreshTokenExist(expires: number, userUuid: string): Promise<boolean> {
    const refreshToken = await this.refreshTokenRepository.findOneBy({ userUuid });

    if (!refreshToken) {
      return false;
    }

    return refreshToken.expires === expires;
  }

  public async saveRefreshToken(expires: number, userUuid: string): Promise<IRefreshToken> {
    let refreshToken = await this.refreshTokenRepository.findOneBy({ userUuid });

    if (refreshToken) {
      refreshToken.expires = expires;
    } else {
      refreshToken = this.refreshTokenRepository.create({ userUuid, expires });
    }

    await refreshToken.save();

    return refreshToken;
  }

  public async deleteRefreshToken(userUuid: string): Promise<void> {
    const refreshToken = await this.refreshTokenRepository.findOneBy({ userUuid });

    if (!refreshToken) {
      throw new NotFoundException('Refresh token is not found');
    }

    await refreshToken.remove();
  }
}
