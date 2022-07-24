import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RefreshTokenModule } from '@dkr/modules/refresh-token';
import { UserEntity } from '@dkr/modules/user';

import { TokenService } from './token.service';
import { JwtStrategy } from './jwt.strategy';
import { AuthenticationResolver } from './authentication.resolver';
import { authenticationProviders } from './authentication.providers';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    JwtModule.register({}),
    PassportModule,
    RefreshTokenModule,
    ConfigModule,
  ],
  providers: [...authenticationProviders, AuthenticationResolver, TokenService, JwtStrategy],
  exports: [JwtStrategy],
})
export class AuthenticationModule {}
