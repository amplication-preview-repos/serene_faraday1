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
import {
  IsNumber,
  Min,
  Max,
  IsOptional,
  IsDate,
  IsEnum,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumPaymentPaymentMethod } from "./EnumPaymentPaymentMethod";
import { ReservationWhereUniqueInput } from "../../reservation/base/ReservationWhereUniqueInput";

@InputType()
class PaymentCreateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  amount?: number | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  paymentDate?: Date | null;

  @ApiProperty({
    required: false,
    enum: EnumPaymentPaymentMethod,
  })
  @IsEnum(EnumPaymentPaymentMethod)
  @IsOptional()
  @Field(() => EnumPaymentPaymentMethod, {
    nullable: true,
  })
  paymentMethod?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => ReservationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ReservationWhereUniqueInput)
  @IsOptional()
  @Field(() => ReservationWhereUniqueInput, {
    nullable: true,
  })
  reservation?: ReservationWhereUniqueInput | null;
}

export { PaymentCreateInput as PaymentCreateInput };
