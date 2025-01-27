import { NextResponse } from 'next/server';

interface Request {
  cookies: {
    get: (name: string) => string | undefined;
  };
  url: URL;
}

export function middleware(request: Request) {
  const token = request.cookies.get('token');


  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!login).*)'],
};
