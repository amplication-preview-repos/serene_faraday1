import { Module } from "@nestjs/common";
import { SlotModuleBase } from "./base/slot.module.base";
import { SlotService } from "./slot.service";
import { SlotController } from "./slot.controller";
import { SlotResolver } from "./slot.resolver";

@Module({
  imports: [SlotModuleBase],
  controllers: [SlotController],
  providers: [SlotService, SlotResolver],
  exports: [SlotService],
})
export class SlotModule {}
