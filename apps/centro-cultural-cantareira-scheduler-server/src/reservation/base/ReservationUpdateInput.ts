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
import { CustomerWhereUniqueInput } from "../../customer/base/CustomerWhereUniqueInput";
import { ValidateNested, IsOptional, IsDate } from "class-validator";
import { Type } from "class-transformer";
import { EventWhereUniqueInput } from "../../event/base/EventWhereUniqueInput";
import { PaymentUpdateManyWithoutReservationsInput } from "./PaymentUpdateManyWithoutReservationsInput";
import { SlotWhereUniqueInput } from "../../slot/base/SlotWhereUniqueInput";

@InputType()
class ReservationUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CustomerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CustomerWhereUniqueInput)
  @IsOptional()
  @Field(() => CustomerWhereUniqueInput, {
    nullable: true,
  })
  customer?: CustomerWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => EventWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EventWhereUniqueInput)
  @IsOptional()
  @Field(() => EventWhereUniqueInput, {
    nullable: true,
  })
  event?: EventWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => PaymentUpdateManyWithoutReservationsInput,
  })
  @ValidateNested()
  @Type(() => PaymentUpdateManyWithoutReservationsInput)
  @IsOptional()
  @Field(() => PaymentUpdateManyWithoutReservationsInput, {
    nullable: true,
  })
  payments?: PaymentUpdateManyWithoutReservationsInput;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  reservationDate?: Date | null;

  @ApiProperty({
    required: false,
    type: () => SlotWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SlotWhereUniqueInput)
  @IsOptional()
  @Field(() => SlotWhereUniqueInput, {
    nullable: true,
  })
  slot?: SlotWhereUniqueInput | null;
}

export { ReservationUpdateInput as ReservationUpdateInput };
