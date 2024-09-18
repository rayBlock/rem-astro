export type SupportedLocale =
  | "en"
  | "fr"
  | "es"
  | "de"
  | "it"
  | "ja"
  | "zh"
  | "th"
  | "hi"
  | "ko";

const DEFAULT_LOCALE: SupportedLocale = "en";

function extractLocaleFromPathname(pathname: string): SupportedLocale {
  const match = pathname.match(/^\/([^/]+)/);

  if (match) {
    return isSupportedLocale(match[1]) ? match[1] : DEFAULT_LOCALE;
  }
  return DEFAULT_LOCALE;
}

function getLang(pathname: string): SupportedLocale {
  return extractLocaleFromPathname(pathname);
}

function isSupportedLocale(locale: string): locale is SupportedLocale {
  return ["en", "fr", "es", "de", "it", "ja", "zh", "th"].includes(locale);
}

export { getLang, DEFAULT_LOCALE };
