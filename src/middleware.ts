import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const refreshToken = request.cookies.get("refreshToken")?.value;
  if (
    !refreshToken &&
    request.nextUrl.pathname !== "/auth/login" &&
    request.nextUrl.pathname !== "/auth/register"
  ) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  } 
  if (
    refreshToken &&
    (request.nextUrl.pathname === "/auth/login" ||
      request.nextUrl.pathname === "/auth/register")
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/auth/login", "/auth/register"],
};
