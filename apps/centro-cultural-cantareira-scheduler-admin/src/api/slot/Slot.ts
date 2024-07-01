import { Reservation } from "../reservation/Reservation";

export type Slot = {
  createdAt: Date;
  endTime: Date | null;
  id: string;
  isAvailable: boolean | null;
  reservations?: Array<Reservation>;
  startTime: Date | null;
  updatedAt: Date;
};
