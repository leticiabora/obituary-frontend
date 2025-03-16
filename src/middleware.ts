import 'server-only';

import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { decrypt } from './app/lib/session';

const loginRoutes = ['/auth/login', '/auth/signup']
const publicRoutes = [...loginRoutes, '/', '/memorial', '/about'];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isPublicRoute = publicRoutes.includes(path) || /^\/memorial\/[^/]+$/.test(path);
  const isLoginRoute = loginRoutes.includes(path);

  try {
    const cookie = (await cookies()).get('token')?.value;

    if (!cookie) {
      if (!isPublicRoute) {
        return NextResponse.redirect(new URL('/auth/login', req.nextUrl));
      }
      return NextResponse.next();
    }
  
    const session = await decrypt(cookie);
  
    if (!session?.id && !isPublicRoute) {
      return NextResponse.redirect(new URL('/auth/login', req.nextUrl));
    }
  
    if (session?.id && isLoginRoute) {
      return NextResponse.redirect(new URL('/', req.nextUrl));
    }
  
    return NextResponse.next();
  } catch (error) {
    return error;
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
