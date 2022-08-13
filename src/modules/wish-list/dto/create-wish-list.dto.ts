import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreateWishListDto {
  @Field(() => String)
  @IsString()
  title: string;
}
