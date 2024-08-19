/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { IndexService } from "../index.service";
import { IndexCreateInput } from "./IndexCreateInput";
import { Index } from "./Index";
import { IndexFindManyArgs } from "./IndexFindManyArgs";
import { IndexWhereUniqueInput } from "./IndexWhereUniqueInput";
import { IndexUpdateInput } from "./IndexUpdateInput";

export class IndexControllerBase {
  constructor(protected readonly service: IndexService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Index })
  async createIndex(@common.Body() data: IndexCreateInput): Promise<Index> {
    return await this.service.createIndex({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Index] })
  @ApiNestedQuery(IndexFindManyArgs)
  async indices(@common.Req() request: Request): Promise<Index[]> {
    const args = plainToClass(IndexFindManyArgs, request.query);
    return this.service.indices({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Index })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async index(
    @common.Param() params: IndexWhereUniqueInput
  ): Promise<Index | null> {
    const result = await this.service.index({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Index })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateIndex(
    @common.Param() params: IndexWhereUniqueInput,
    @common.Body() data: IndexUpdateInput
  ): Promise<Index | null> {
    try {
      return await this.service.updateIndex({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Index })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteIndex(
    @common.Param() params: IndexWhereUniqueInput
  ): Promise<Index | null> {
    try {
      return await this.service.deleteIndex({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}