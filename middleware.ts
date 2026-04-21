import { NextRequest, NextResponse } from "next/server";
import { AUTH_COOKIE, hashPassword } from "@/lib/site-auth";

const LOCALES = ["en", "es"] as const;
const DEFAULT_LOCALE = "en";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/brand") ||
    pathname.startsWith("/unlock") ||
    pathname.includes(".")
  ) {
    return;
  }

  const sitePassword = process.env.SITE_PASSWORD;
  if (sitePassword) {
    const cookie = req.cookies.get(AUTH_COOKIE)?.value;
    const expected = await hashPassword(sitePassword);
    if (cookie !== expected) {
      const url = req.nextUrl.clone();
      url.pathname = "/unlock";
      url.search = "";
      if (pathname !== "/") url.searchParams.set("from", pathname);
      return NextResponse.redirect(url);
    }
  }

  const hasLocale = LOCALES.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );
  if (hasLocale) return;

  const url = req.nextUrl.clone();
  url.pathname = `/${DEFAULT_LOCALE}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
