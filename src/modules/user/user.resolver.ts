import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { JwtGuard, JwtPayload } from '@dkr/modules/authentication';

import { CreateUserDto, UpdateUserDto } from './dto';
import { AbstractUserService } from './user.interface';
import { UserModel } from './models/user.model';

@Resolver(() => CreateUserDto)
export class UserResolver {
  constructor(private readonly userService: AbstractUserService) {}

  @UseGuards(JwtGuard)
  @Query(() => UserModel)
  public async user(@JwtPayload('userUuid') userUuid: string): Promise<UserModel> {
    return await this.userService.findByUuid(userUuid);
  }

  @Mutation(() => Boolean)
  public async createUser(@Args('crateUserData') crateUserData: CreateUserDto): Promise<boolean> {
    return await this.userService.create(crateUserData);
  }

  @UseGuards(JwtGuard)
  @Mutation(() => UserModel)
  public async updateUser(
    @Args('updateUserData') updateUserData: UpdateUserDto,
    @JwtPayload('userUuid') userUuid: string,
  ): Promise<UserModel> {
    return await this.userService.update(userUuid, updateUserData);
  }
}
