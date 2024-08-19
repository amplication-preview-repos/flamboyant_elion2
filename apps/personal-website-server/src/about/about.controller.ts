import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AboutService } from "./about.service";
import { AboutControllerBase } from "./base/about.controller.base";

@swagger.ApiTags("abouts")
@common.Controller("abouts")
export class AboutController extends AboutControllerBase {
  constructor(protected readonly service: AboutService) {
    super(service);
  }
}
