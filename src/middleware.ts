import { NextRequestWithAuth, withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(function middleware(request: NextRequestWithAuth) {
  const isAdminRoute = request.nextUrl.pathname.startsWith("/admin/")
  if (isAdminRoute) {
    if (!request.nextauth.token?.role) return NextResponse.rewrite(new URL("/login", request.url));
  }
},{
  callbacks:{
    authorized:({token})=>!!token
  }
})

export const config = {
  matcher: ["/admin/:path*"]
}