import { Customer } from "../customer/Customer";
import { Event } from "../event/Event";
import { Payment } from "../payment/Payment";
import { Slot } from "../slot/Slot";

export type Reservation = {
  createdAt: Date;
  customer?: Customer | null;
  event?: Event | null;
  id: string;
  payments?: Array<Payment>;
  reservationDate: Date | null;
  slot?: Slot | null;
  updatedAt: Date;
};
