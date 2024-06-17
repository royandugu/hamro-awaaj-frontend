import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import { NextRequestWithAuth } from 'next-auth/middleware';

const protectedRoutes = ['/user', '/admin'];

export async function middleware(req:NextRequestWithAuth) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  if (protectedRoutes.some(route => pathname.startsWith(route))) {
    if (!token) {
      return NextResponse.redirect(new URL('/auth/signin', req.url));
    }
  }

  return NextResponse.next();
}
