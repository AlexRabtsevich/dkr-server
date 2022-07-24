import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { genderProviders } from './gender.providers';
import { GenderResolver } from './gender.resolver';
import { GenderEntity } from './gender.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GenderEntity])],
  providers: [...genderProviders, GenderResolver],
})
export class GenderModule {}
