import { Reservation } from "../reservation/Reservation";

export type Event = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  reservations?: Array<Reservation>;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
