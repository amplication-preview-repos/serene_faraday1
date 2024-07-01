import { SortOrder } from "../../util/SortOrder";

export type ReservationOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  eventId?: SortOrder;
  id?: SortOrder;
  reservationDate?: SortOrder;
  slotId?: SortOrder;
  updatedAt?: SortOrder;
};
