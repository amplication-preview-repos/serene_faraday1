import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { ReservationListRelationFilter } from "../reservation/ReservationListRelationFilter";

export type SlotWhereInput = {
  endTime?: DateTimeNullableFilter;
  id?: StringFilter;
  isAvailable?: BooleanNullableFilter;
  reservations?: ReservationListRelationFilter;
  startTime?: DateTimeNullableFilter;
};
