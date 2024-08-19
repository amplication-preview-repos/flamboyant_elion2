import { Index as TIndex } from "../api/index/Index";

export const INDEX_TITLE_FIELD = "id";

export const IndexTitle = (record: TIndex): string => {
  return record.id?.toString() || String(record.id);
};
