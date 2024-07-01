import { Reservation } from "../reservation/Reservation";

export type Payment = {
  amount: number | null;
  createdAt: Date;
  id: string;
  paymentDate: Date | null;
  paymentMethod?: "Option1" | null;
  reservation?: Reservation | null;
  updatedAt: Date;
};
