import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  // Check if the user is trying to access the admin dashboard
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const session = request.cookies.get('admin_session')?.value;

    // If there is no valid session cookie, redirect them back to the home page
    if (session !== 'true') {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }
}

// Only run middleware on the admin route
export const config = {
  matcher: '/admin/:path*',
};
