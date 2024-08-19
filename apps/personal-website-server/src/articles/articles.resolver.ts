import * as graphql from "@nestjs/graphql";
import { ArticlesResolverBase } from "./base/articles.resolver.base";
import { Articles } from "./base/Articles";
import { ArticlesService } from "./articles.service";

@graphql.Resolver(() => Articles)
export class ArticlesResolver extends ArticlesResolverBase {
  constructor(protected readonly service: ArticlesService) {
    super(service);
  }
}
