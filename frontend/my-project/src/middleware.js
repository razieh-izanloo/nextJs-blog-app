import { i18nRouter } from "next-i18n-router";
import { i18nConfig } from "./lib/i18n/i18n";

export function middleware(request) {
  return i18nRouter(request, i18nConfig);
}

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
