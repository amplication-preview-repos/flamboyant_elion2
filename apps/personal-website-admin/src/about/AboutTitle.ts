import { About as TAbout } from "../api/about/About";

export const ABOUT_TITLE_FIELD = "id";

export const AboutTitle = (record: TAbout): string => {
  return record.id?.toString() || String(record.id);
};
