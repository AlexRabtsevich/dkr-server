import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { GenderEntity } from './gender.entity';
import { AbstractGenderService, IGender } from './gender.interface';

@Injectable()
export class GenderService extends AbstractGenderService {
  constructor(
    @InjectRepository(GenderEntity)
    private genderRepository: Repository<GenderEntity>,
  ) {
    super();
  }

  public findOneByUuid(uuid: string): Promise<IGender> {
    return this.genderRepository.findOne({ where: { uuid } });
  }

  public findAll(): Promise<IGender[]> {
    return this.genderRepository.find();
  }
}
