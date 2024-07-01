import { ReservationUpdateManyWithoutSlotsInput } from "./ReservationUpdateManyWithoutSlotsInput";

export type SlotUpdateInput = {
  endTime?: Date | null;
  isAvailable?: boolean | null;
  reservations?: ReservationUpdateManyWithoutSlotsInput;
  startTime?: Date | null;
};
