import { ReservationWhereUniqueInput } from "../reservation/ReservationWhereUniqueInput";

export type PaymentCreateInput = {
  amount?: number | null;
  paymentDate?: Date | null;
  paymentMethod?: "Option1" | null;
  reservation?: ReservationWhereUniqueInput | null;
};
