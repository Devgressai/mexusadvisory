import { NextRequest, NextResponse } from "next/server";
import { AUTH_COOKIE, hashPassword } from "@/lib/site-auth";

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const password = String(form.get("password") ?? "");
  const rawFrom = String(form.get("from") ?? "/");
  const from = rawFrom.startsWith("/") && !rawFrom.startsWith("//") ? rawFrom : "/";

  const expected = process.env.SITE_PASSWORD;

  if (!expected || password !== expected) {
    const retry = req.nextUrl.clone();
    retry.pathname = "/unlock";
    retry.search = "";
    retry.searchParams.set("error", "1");
    if (from !== "/") retry.searchParams.set("from", from);
    return NextResponse.redirect(retry, { status: 303 });
  }

  const dest = req.nextUrl.clone();
  dest.pathname = from;
  dest.search = "";

  const res = NextResponse.redirect(dest, { status: 303 });
  res.cookies.set(AUTH_COOKIE, await hashPassword(expected), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
  return res;
}
