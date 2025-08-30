import { i18nRouter } from "next-i18n-router";
import { i18nConfig } from "./lib/i18n/i18n";
import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const i18nRouterValue = i18nRouter(request, i18nConfig);
  const locale = i18nRouterValue.headers.get("x-next-i18n-router-locale");

  if (pathname === "/")
    return NextResponse.redirect(new URL(`${locale}/home`, request.url));

  return i18nRouterValue;
}

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
