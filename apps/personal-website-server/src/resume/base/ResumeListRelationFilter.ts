/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ResumeWhereInput } from "./ResumeWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ResumeListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ResumeWhereInput,
  })
  @ValidateNested()
  @Type(() => ResumeWhereInput)
  @IsOptional()
  @Field(() => ResumeWhereInput, {
    nullable: true,
  })
  every?: ResumeWhereInput;

  @ApiProperty({
    required: false,
    type: () => ResumeWhereInput,
  })
  @ValidateNested()
  @Type(() => ResumeWhereInput)
  @IsOptional()
  @Field(() => ResumeWhereInput, {
    nullable: true,
  })
  some?: ResumeWhereInput;

  @ApiProperty({
    required: false,
    type: () => ResumeWhereInput,
  })
  @ValidateNested()
  @Type(() => ResumeWhereInput)
  @IsOptional()
  @Field(() => ResumeWhereInput, {
    nullable: true,
  })
  none?: ResumeWhereInput;
}
export { ResumeListRelationFilter as ResumeListRelationFilter };