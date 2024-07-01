import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { SlotWhereUniqueInput } from "../slot/SlotWhereUniqueInput";

export type ReservationWhereInput = {
  customer?: CustomerWhereUniqueInput;
  event?: EventWhereUniqueInput;
  id?: StringFilter;
  payments?: PaymentListRelationFilter;
  reservationDate?: DateTimeNullableFilter;
  slot?: SlotWhereUniqueInput;
};
