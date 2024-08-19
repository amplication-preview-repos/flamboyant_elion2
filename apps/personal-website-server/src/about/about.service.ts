import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AboutServiceBase } from "./base/about.service.base";

@Injectable()
export class AboutService extends AboutServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
