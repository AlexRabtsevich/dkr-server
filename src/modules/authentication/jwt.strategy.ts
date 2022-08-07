import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { AccessTokenPayload } from './authentication.interface';
import { JWT_AUTHENTICATION } from './jwt.constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, JWT_AUTHENTICATION) {
  constructor(private readonly configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_ACCESS_TOKEN_SECRET'),
    });
  }

  public async validate(tokenPayload: AccessTokenPayload): Promise<AccessTokenPayload> {
    return tokenPayload;
  }
}
