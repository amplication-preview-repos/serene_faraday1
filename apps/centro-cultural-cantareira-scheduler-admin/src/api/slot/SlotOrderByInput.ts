import { SortOrder } from "../../util/SortOrder";

export type SlotOrderByInput = {
  createdAt?: SortOrder;
  endTime?: SortOrder;
  id?: SortOrder;
  isAvailable?: SortOrder;
  startTime?: SortOrder;
  updatedAt?: SortOrder;
};
