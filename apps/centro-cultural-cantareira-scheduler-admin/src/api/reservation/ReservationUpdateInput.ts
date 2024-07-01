import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { PaymentUpdateManyWithoutReservationsInput } from "./PaymentUpdateManyWithoutReservationsInput";
import { SlotWhereUniqueInput } from "../slot/SlotWhereUniqueInput";

export type ReservationUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  event?: EventWhereUniqueInput | null;
  payments?: PaymentUpdateManyWithoutReservationsInput;
  reservationDate?: Date | null;
  slot?: SlotWhereUniqueInput | null;
};
