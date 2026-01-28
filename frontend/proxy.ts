import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  AUTH_CONFIG,
  AUTH_ROUTES,
  PROTECTED_ROUTES,
  ROUTES,
} from "@/constants";

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get(AUTH_CONFIG.ACCESS_TOKEN_KEY)?.value;

  // Check if current path is protected
  const isProtectedRoute = PROTECTED_ROUTES.some(
    (route) => pathname.startsWith(route) || pathname === route,
  );

  // Check if current path is auth route (login, register)
  const isAuthRoute = AUTH_ROUTES.some(
    (route) => pathname.startsWith(route) || pathname === route,
  );

  // Redirect to login if accessing protected route without token
  if (isProtectedRoute && !token) {
    const loginUrl = new URL(ROUTES.LOGIN, request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Redirect to home if accessing auth routes while logged in
  if (isAuthRoute && token) {
    return NextResponse.redirect(new URL(ROUTES.HOME, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*|_next).*)",
  ],
};
