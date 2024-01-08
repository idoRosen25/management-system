import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: ['/'],
};
export function middleware(request: NextRequest) {
  if (!request.url.split('/').at(-1)) {
    return NextResponse.redirect(new URL('/auth', request.url));
  }
  return NextResponse.redirect(request.nextUrl);
  // Call our authentication function to check the request
  // if (!isAuthenticated(request)) {
  //   // Respond with JSON indicating an error message
  //   return Response.json(
  //     { success: false, message: 'authentication failed' },
  //     { status: 401 },
  //   );
  // }
}
