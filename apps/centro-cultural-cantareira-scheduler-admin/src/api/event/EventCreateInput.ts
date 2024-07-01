import { ReservationCreateNestedManyWithoutEventsInput } from "./ReservationCreateNestedManyWithoutEventsInput";

export type EventCreateInput = {
  description?: string | null;
  name?: string | null;
  reservations?: ReservationCreateNestedManyWithoutEventsInput;
  typeField?: "Option1" | null;
};
