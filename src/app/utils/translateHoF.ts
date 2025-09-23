import { t } from "i18next";

export function translateHoF(preFixPath: string) {
  return (path: string) => t(`${preFixPath}.${path}` as any).toString();
}
