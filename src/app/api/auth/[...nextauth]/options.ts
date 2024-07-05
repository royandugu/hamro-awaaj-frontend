import { NextAuthOptions } from "next-auth";
import { universalJSONPost } from "../../../../../components/system/api/apiCallers";

import CredentialsProvider from "next-auth/providers/credentials";

const nextAuthSecret = process.env.NEXTAUTH_SECRET;

if (!nextAuthSecret) {
  throw new Error("NEXT AUTH SECRET must be defined in the environment");
}
export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const response: any = await universalJSONPost({ email: credentials?.email, password: credentials?.password }, "login");
        const jsonVersion = await response.json();
        
        if (jsonVersion?.response === "SUCCESS") {
          return JSON.parse(JSON.stringify(jsonVersion));
        }
        else return null;
      }
    })

  ],
  pages: {
    signIn: '/'
  },
  secret: nextAuthSecret,
  callbacks: {
    async jwt({ token, user }: { token: any, user: any }) {
      if (user && user.jwt && user.refreshToken && user.role) {
        token.accessToken = user?.jwt;
        token.refreshToken = user?.refreshToken;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }: { session: any, token: any }) {
      if (session?.user) {
        session.user.role = token.role
        session.accessToken=token.accessToken
        session.refreshToken=token.refreshToken
      }
      return session;
    }
  }
};