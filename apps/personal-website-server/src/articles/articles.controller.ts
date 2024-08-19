import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ArticlesService } from "./articles.service";
import { ArticlesControllerBase } from "./base/articles.controller.base";

@swagger.ApiTags("articles")
@common.Controller("articles")
export class ArticlesController extends ArticlesControllerBase {
  constructor(protected readonly service: ArticlesService) {
    super(service);
  }
}
