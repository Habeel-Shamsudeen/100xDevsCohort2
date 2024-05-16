import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { signIn } from "next-auth/react";
export const NEXT_AUTH = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email", placeholder: "email" },
        password: {
          label: "password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials: any) {
        const email = credentials.email;
        const password = credentials.password;
        console.log(credentials);
        // const user = await prisma.user.findfirst({})
        //  if(!user){
        //   return null;
        //  }
        return {
          id: "1",
          email,
          password,
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    session: ({ session, token, user }: any) => {
      if (session && session.user) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
  pages:{
    signIn:'/signin'
  }
};
