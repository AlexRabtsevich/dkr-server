import { Args, Query, Resolver } from '@nestjs/graphql';

import { GenderModel } from './gender.model';
import { GenderArgs } from './dto/gender.args';
import { AbstractGenderService as GenderService } from './gender.interface';

@Resolver(() => GenderModel)
export class GenderResolver {
  constructor(private readonly genreService: GenderService) {}

  @Query(() => GenderModel)
  async gender(@Args() { uuid }: GenderArgs): Promise<GenderModel> {
    return await this.genreService.findOneByUuid(uuid);
  }

  @Query(() => [GenderModel])
  async genders(): Promise<GenderModel[]> {
    return await this.genreService.findAll();
  }
}
