import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SlotService } from "./slot.service";
import { SlotControllerBase } from "./base/slot.controller.base";

@swagger.ApiTags("slots")
@common.Controller("slots")
export class SlotController extends SlotControllerBase {
  constructor(protected readonly service: SlotService) {
    super(service);
  }
}
