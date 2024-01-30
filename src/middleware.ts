import { NextRequest, NextResponse } from 'next/server';
import { getLoggedInUser, isAuthenticated } from './utils/auth';
import { Routes } from './consts';

export const config = {
  matcher: ['/', '/api/:path*', '/dashboard/:path*'],
};

export function middleware(request: NextRequest) {
  if (!isAuthenticated()) {
    if (request.url.includes(Routes.AUTH) || request.url.includes('/invite')) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL(Routes.AUTH, request.url));
  } else if (!request.url.split('/').at(-1)) {
    return NextResponse.redirect(new URL(Routes.DASHBOARD, request.url));
  } else {
    const user = getLoggedInUser();
    if (request.url.includes('/invite') && user?.teamId && user.id) {
      return NextResponse.rewrite(`${request.nextUrl.origin}${Routes.AUTH}`);
    }
  }

  return NextResponse.rewrite(request.nextUrl);
}
