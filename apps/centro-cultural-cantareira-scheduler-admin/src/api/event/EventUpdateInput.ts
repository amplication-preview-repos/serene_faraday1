import { ReservationUpdateManyWithoutEventsInput } from "./ReservationUpdateManyWithoutEventsInput";

export type EventUpdateInput = {
  description?: string | null;
  name?: string | null;
  reservations?: ReservationUpdateManyWithoutEventsInput;
  typeField?: "Option1" | null;
};
