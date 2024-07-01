import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { PaymentCreateNestedManyWithoutReservationsInput } from "./PaymentCreateNestedManyWithoutReservationsInput";
import { SlotWhereUniqueInput } from "../slot/SlotWhereUniqueInput";

export type ReservationCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  event?: EventWhereUniqueInput | null;
  payments?: PaymentCreateNestedManyWithoutReservationsInput;
  reservationDate?: Date | null;
  slot?: SlotWhereUniqueInput | null;
};
