import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

import { UserEntity } from '@dkr/modules/user/user.entity';

@ValidatorConstraint({ async: true })
@Injectable()
export class UniqueEmailOnDatabaseConstraint implements ValidatorConstraintInterface {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async validate(email: string) {
    try {
      return !(await this.userRepository.findOneBy({ email }));
    } catch (e) {
      return true;
    }
  }

  defaultMessage() {
    return `That email already exists`;
  }
}

export function UserEmailUnique(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'UniqueEmail',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: UniqueEmailOnDatabaseConstraint,
    });
  };
}
