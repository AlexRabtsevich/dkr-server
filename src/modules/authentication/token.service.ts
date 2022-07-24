import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class TokenService {
  constructor(private configService: ConfigService, private jwtService: JwtService) {}

  public generateAccessToken(userUuid: string): string {
    return this.jwtService.sign(
      { userUuid },
      {
        secret: this.configService.get<string>('JWT_ACCESS_TOKEN_SECRET'),
        expiresIn: this.configService.get<number>('JWT_ACCESS_TOKEN_EXPIRES_IN'),
      },
    );
  }

  public generateRefreshToken(userUuid: string): string {
    return this.jwtService.sign(
      { userUuid },
      {
        secret: this.configService.get<string>('JWT_REFRESH_TOKEN_SECRET'),
        expiresIn: this.configService.get<number>('JWT_REFRESH_TOKEN_EXPIRES_IN'),
      },
    );
  }

  public decodeToken<T>(token: string): T {
    return this.jwtService.decode(token) as T;
  }

  public async isRefreshTokenValid(token: string): Promise<boolean> {
    try {
      await this.jwtService.verifyAsync(token, {
        secret: this.configService.get<string>('JWT_REFRESH_TOKEN_SECRET'),
      });

      return true;
    } catch (e) {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }
}
