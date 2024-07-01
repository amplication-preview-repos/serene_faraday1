import { Slot as TSlot } from "../api/slot/Slot";

export const SLOT_TITLE_FIELD = "id";

export const SlotTitle = (record: TSlot): string => {
  return record.id?.toString() || String(record.id);
};
