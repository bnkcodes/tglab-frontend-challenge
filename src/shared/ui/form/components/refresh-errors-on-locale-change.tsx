import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

export function RefreshErrorsOnLocaleChange() {
  const methods = useFormContext();
  const { i18n } = useTranslation();

  useEffect(() => {
    const flattenErrorPaths = (obj: any, prefix = ""): string[] => {
      if (!obj || typeof obj !== "object") return [];

      return Object.keys(obj).flatMap((key) => {
        const val = obj[key as keyof typeof obj];
        const path = prefix ? `${prefix}.${key}` : key;

        if (val && typeof val === "object") {
          if ("message" in val || "type" in val || "types" in val) return [path];
          return flattenErrorPaths(val, path);
        }

        return [];
      });
    };

    const names = flattenErrorPaths(methods.formState.errors);
    if (names.length) methods.trigger(names as any, { shouldFocus: false });
  }, [i18n.resolvedLanguage]);

  return null;
}
