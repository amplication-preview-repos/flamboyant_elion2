import { SortOrder } from "../../util/SortOrder";

export type ArticlesOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
