/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Slot as PrismaSlot,
  Reservation as PrismaReservation,
} from "@prisma/client";

export class SlotServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.SlotCountArgs, "select">): Promise<number> {
    return this.prisma.slot.count(args);
  }

  async slots(args: Prisma.SlotFindManyArgs): Promise<PrismaSlot[]> {
    return this.prisma.slot.findMany(args);
  }
  async slot(args: Prisma.SlotFindUniqueArgs): Promise<PrismaSlot | null> {
    return this.prisma.slot.findUnique(args);
  }
  async createSlot(args: Prisma.SlotCreateArgs): Promise<PrismaSlot> {
    return this.prisma.slot.create(args);
  }
  async updateSlot(args: Prisma.SlotUpdateArgs): Promise<PrismaSlot> {
    return this.prisma.slot.update(args);
  }
  async deleteSlot(args: Prisma.SlotDeleteArgs): Promise<PrismaSlot> {
    return this.prisma.slot.delete(args);
  }

  async findReservations(
    parentId: string,
    args: Prisma.ReservationFindManyArgs
  ): Promise<PrismaReservation[]> {
    return this.prisma.slot
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .reservations(args);
  }
}
