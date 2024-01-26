import { NextRequest, NextResponse } from 'next/server';
import { isAuthenticated } from './utils/auth';
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
  }

  return NextResponse.rewrite(request.nextUrl);
}
