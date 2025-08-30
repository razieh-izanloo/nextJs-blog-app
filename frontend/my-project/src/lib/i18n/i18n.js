export const defaultLocale = "fa";

export const allowedLocales = [defaultLocale, "en"];

const i18nConfig = {
  locales: allowedLocales,
  defaultLocale,
  prefixDefault: false,
};

export { i18nConfig };
