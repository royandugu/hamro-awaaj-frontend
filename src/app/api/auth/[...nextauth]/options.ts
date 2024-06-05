import { NextAuthOptions } from "next-auth";
import { universalJSONPost } from "../../../../../components/system/api/apiCallers";

import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const clientId = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
const nextAuthSecret=process.env.NEXTAUTH_SECRET;

if (!clientId || !clientSecret || !nextAuthSecret) {
  throw new Error("CLIENT_ID or CLIENT_SECRET or NEXT AUTH SECRET must be defined in the environment");
}
export const options: NextAuthOptions = {
    providers: [
      GoogleProvider({
        clientId: clientId,
        clientSecret: clientSecret
      }),
      CredentialsProvider({
        name: 'Credentials',
        credentials: {
          email: { label: "email", type: "text", placeholder: "jsmith" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
          const response:any = await universalJSONPost({email:credentials?.email, password:credentials?.password},"/admin/login");
          const jsonVersion=await response.json();
          if(jsonVersion?.loginStatus){
            return JSON.parse(JSON.stringify(jsonVersion.bodyData));
          }
          else return null;
        }
      })
      
    ],
    pages:{
      signIn:'/login'
    },
    secret:nextAuthSecret,
    callbacks:{
      async jwt({token,user}:{token:any, user:any}){
        if(user) token.role=user.role;
        return token;
      },
      async session({session, token}:{session:any,token:any}){
        if(session?.user) session.user.role=token.role
        return session;
      }
    }
  };