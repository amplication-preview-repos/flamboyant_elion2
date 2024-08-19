/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { About } from "./About";
import { AboutCountArgs } from "./AboutCountArgs";
import { AboutFindManyArgs } from "./AboutFindManyArgs";
import { AboutFindUniqueArgs } from "./AboutFindUniqueArgs";
import { DeleteAboutArgs } from "./DeleteAboutArgs";
import { AboutService } from "../about.service";
@graphql.Resolver(() => About)
export class AboutResolverBase {
  constructor(protected readonly service: AboutService) {}

  async _aboutsMeta(
    @graphql.Args() args: AboutCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [About])
  async abouts(@graphql.Args() args: AboutFindManyArgs): Promise<About[]> {
    return this.service.abouts(args);
  }

  @graphql.Query(() => About, { nullable: true })
  async about(
    @graphql.Args() args: AboutFindUniqueArgs
  ): Promise<About | null> {
    const result = await this.service.about(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => About)
  async deleteAbout(
    @graphql.Args() args: DeleteAboutArgs
  ): Promise<About | null> {
    try {
      return await this.service.deleteAbout(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
