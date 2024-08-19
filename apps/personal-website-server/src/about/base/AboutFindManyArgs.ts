/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AboutWhereInput } from "./AboutWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AboutOrderByInput } from "./AboutOrderByInput";

@ArgsType()
class AboutFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AboutWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AboutWhereInput, { nullable: true })
  @Type(() => AboutWhereInput)
  where?: AboutWhereInput;

  @ApiProperty({
    required: false,
    type: [AboutOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AboutOrderByInput], { nullable: true })
  @Type(() => AboutOrderByInput)
  orderBy?: Array<AboutOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { AboutFindManyArgs as AboutFindManyArgs };