import { Module } from "@nestjs/common";
import { AboutModuleBase } from "./base/about.module.base";
import { AboutService } from "./about.service";
import { AboutController } from "./about.controller";
import { AboutResolver } from "./about.resolver";

@Module({
  imports: [AboutModuleBase],
  controllers: [AboutController],
  providers: [AboutService, AboutResolver],
  exports: [AboutService],
})
export class AboutModule {}
