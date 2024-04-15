import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

export default NextAuth(authConfig).auth;

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  // to avaoid edge function error always check project setting to nextjs
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
