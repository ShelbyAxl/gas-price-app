import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/libs/prisma";
import bcrypt from "bcrypt";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@mail.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "•••••••••••",
        },
      },

      async authorize(credentials, req) {
        const userFound = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!userFound) throw new Error("Invalid Credentials");

        const matchPassword = await bcrypt.compare(
          credentials.password,
          userFound.password
        );
        if (!matchPassword) throw new Error("Wrong password");

        return userFound;
      },
    }),
  ],

  pages: {
    signIn: "/auth/login",
  },

  callbacks: {
    jwt({ account, token, user, profile, session }){
      if(user) token.user = user;
      return token
    },
    session({ session, token }){
      session.user = token.user;
      return session;
    }
  },

  secret: "40219da3e8aa469e4b0ec9381cf767cf"
};

const handler = NextAuth(authOptions);

export { handler as POST, handler as GET };
