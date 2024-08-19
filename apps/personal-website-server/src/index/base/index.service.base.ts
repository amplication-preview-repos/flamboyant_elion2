/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Index as PrismaIndex } from "@prisma/client";

export class IndexServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.IndexCountArgs, "select">): Promise<number> {
    return this.prisma.index.count(args);
  }

  async indices(args: Prisma.IndexFindManyArgs): Promise<PrismaIndex[]> {
    return this.prisma.index.findMany(args);
  }
  async index(args: Prisma.IndexFindUniqueArgs): Promise<PrismaIndex | null> {
    return this.prisma.index.findUnique(args);
  }
  async createIndex(args: Prisma.IndexCreateArgs): Promise<PrismaIndex> {
    return this.prisma.index.create(args);
  }
  async updateIndex(args: Prisma.IndexUpdateArgs): Promise<PrismaIndex> {
    return this.prisma.index.update(args);
  }
  async deleteIndex(args: Prisma.IndexDeleteArgs): Promise<PrismaIndex> {
    return this.prisma.index.delete(args);
  }
}