import * as graphql from "@nestjs/graphql";
import { AboutResolverBase } from "./base/about.resolver.base";
import { About } from "./base/About";
import { AboutService } from "./about.service";

@graphql.Resolver(() => About)
export class AboutResolver extends AboutResolverBase {
  constructor(protected readonly service: AboutService) {
    super(service);
  }
}
