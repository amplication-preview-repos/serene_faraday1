import { ReservationCreateNestedManyWithoutSlotsInput } from "./ReservationCreateNestedManyWithoutSlotsInput";

export type SlotCreateInput = {
  endTime?: Date | null;
  isAvailable?: boolean | null;
  reservations?: ReservationCreateNestedManyWithoutSlotsInput;
  startTime?: Date | null;
};
