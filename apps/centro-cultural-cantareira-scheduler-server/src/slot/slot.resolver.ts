import * as graphql from "@nestjs/graphql";
import { SlotResolverBase } from "./base/slot.resolver.base";
import { Slot } from "./base/Slot";
import { SlotService } from "./slot.service";

@graphql.Resolver(() => Slot)
export class SlotResolver extends SlotResolverBase {
  constructor(protected readonly service: SlotService) {
    super(service);
  }
}
