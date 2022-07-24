import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BadRequestException, NotFoundException } from '@nestjs/common';

import { GenderEntity } from '@dkr/modules/gender';

import { AbstractUserService, ICreateUser, IUser, UpdateUser } from './user.interface';
import { UserEntity } from './user.entity';

export class UserService extends AbstractUserService {
  constructor(
    @InjectRepository(GenderEntity)
    private genderRepository: Repository<GenderEntity>,
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {
    super();
  }

  public async create({ genderUuid, ...createUserProps }: ICreateUser): Promise<boolean> {
    const gender = await this.genderRepository.findOneBy({ uuid: genderUuid });

    if (!gender) {
      throw new BadRequestException();
    }

    const user = this.userRepository.create({ ...createUserProps, gender });
    await this.userRepository.save(user);

    return true;
  }

  public async update(userUUid, { genderUuid, ...updateUserProps }: UpdateUser): Promise<IUser> {
    const gender = await this.genderRepository.findOneByOrFail({ uuid: genderUuid });
    await this.userRepository.update(userUUid, { ...updateUserProps, gender });

    return await this.userRepository.findOne({ where: { uuid: userUUid } });
  }

  public findByUuid(uuid: string): Promise<IUser> {
    const user = this.userRepository.findOne({ where: { uuid }, relations: ['gender'] });

    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }
}
