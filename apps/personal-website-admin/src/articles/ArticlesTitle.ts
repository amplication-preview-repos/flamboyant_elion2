import { Articles as TArticles } from "../api/articles/Articles";

export const ARTICLES_TITLE_FIELD = "id";

export const ArticlesTitle = (record: TArticles): string => {
  return record.id?.toString() || String(record.id);
};
