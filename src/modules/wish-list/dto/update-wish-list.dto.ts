import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateWishListDto {
  @IsString()
  @Field(() => String)
  wishListUuid: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  title: string;
}
