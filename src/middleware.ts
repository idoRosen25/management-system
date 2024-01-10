import { NextRequest, NextResponse } from 'next/server';
import { isAuthenticated } from './utils/auth';
import { Routes } from './consts';

export function middleware(request: NextRequest) {
  if (!isAuthenticated()) {
    return NextResponse.redirect(new URL(Routes.AUTH, request.url));
  }

  if (!request.url.split('/').at(-1)) {
    return NextResponse.redirect(new URL(Routes.DASHBOARD, request.url));
  }
  return NextResponse.rewrite(request.nextUrl);
}
