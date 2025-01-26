import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const tokenCookie = req.cookies.get('token');

  // Get the current path
  const { pathname } = req.nextUrl;

  // If user is on the login page, don't redirect back to it
  // if (!tokenCookie && !pathname.startsWith('/auth')) {
  //   return NextResponse.redirect(new URL('/auth/login', req.url));
  // }

  // Allow the request to continue if authenticated or on an auth page
  return NextResponse.next();
}

// Matcher: Apply this middleware to all routes except those starting with /auth
export const config = {
  matcher: ['/:path*'],
};
