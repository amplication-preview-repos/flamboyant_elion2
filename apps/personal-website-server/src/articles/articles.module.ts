import { Module } from "@nestjs/common";
import { ArticlesModuleBase } from "./base/articles.module.base";
import { ArticlesService } from "./articles.service";
import { ArticlesController } from "./articles.controller";
import { ArticlesResolver } from "./articles.resolver";

@Module({
  imports: [ArticlesModuleBase],
  controllers: [ArticlesController],
  providers: [ArticlesService, ArticlesResolver],
  exports: [ArticlesService],
})
export class ArticlesModule {}
