import { AboutWhereInput } from "./AboutWhereInput";
import { AboutOrderByInput } from "./AboutOrderByInput";

export type AboutFindManyArgs = {
  where?: AboutWhereInput;
  orderBy?: Array<AboutOrderByInput>;
  skip?: number;
  take?: number;
};
