import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { GenderEntity } from '@dkr/modules/gender';

import { UniqueEmailOnDatabaseConstraint } from './decorators/unique-email.decorator';
import { userProviders } from './user.providers';
import { UserResolver } from './user.resolver';
import { UserEntity } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, GenderEntity])],
  providers: [...userProviders, UserResolver, UniqueEmailOnDatabaseConstraint],
})
export class UserModule {}
