/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Articles as PrismaArticles } from "@prisma/client";

export class ArticlesServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ArticlesCountArgs, "select">): Promise<number> {
    return this.prisma.articles.count(args);
  }

  async articlesItems(
    args: Prisma.ArticlesFindManyArgs
  ): Promise<PrismaArticles[]> {
    return this.prisma.articles.findMany(args);
  }
  async articles(
    args: Prisma.ArticlesFindUniqueArgs
  ): Promise<PrismaArticles | null> {
    return this.prisma.articles.findUnique(args);
  }
  async createArticles(
    args: Prisma.ArticlesCreateArgs
  ): Promise<PrismaArticles> {
    return this.prisma.articles.create(args);
  }
  async updateArticles(
    args: Prisma.ArticlesUpdateArgs
  ): Promise<PrismaArticles> {
    return this.prisma.articles.update(args);
  }
  async deleteArticles(
    args: Prisma.ArticlesDeleteArgs
  ): Promise<PrismaArticles> {
    return this.prisma.articles.delete(args);
  }
}