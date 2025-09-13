// import { i18nRouter } from "next-i18n-router";
// import { i18nConfig } from "./lib/i18n/i18n";
import { NextResponse } from "next/server";
import { middlewareAuth } from "@/utils/middlewareAuth";

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // Auth---------------------------------------------------------------
  if (pathname.startsWith("/signin") || pathname.startsWith("/signup")) {
    const user = await middlewareAuth(request);
    console.log("signin", user);
    if (user) return NextResponse.redirect(new URL("/home", request.nextUrl));
  }

  if (pathname.startsWith("/profile")) {
    console.log("profile");
    const user = await middlewareAuth(request);
    if (!user) {
      return NextResponse.redirect(new URL("/signin", request.nextUrl));
    }
  }

  if (pathname === "/")
    return NextResponse.redirect(new URL("/home", request.nextUrl));

  // i18n------------------------------------------------------------
  // const i18nRouterValue = i18nRouter(request, i18nConfig);
  // const locale = i18nRouterValue.headers.get("x-next-i18n-router-locale");
  // const response = NextResponse.next();

  // for use locale in client-component
  // const cookieLocale = request.cookies.get("NEXT_LOCALE");
  // if (cookieLocale !== locale) response.cookies.set("NEXT_LOCALE", locale);
  // return i18nRouterValue;
  // -----------------------------------------------------------------------
}

export const config = {
  matcher: ["/", "/profile/:path*", "/signin", "/signup"],
};
