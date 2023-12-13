import GoogleProvider from "next-auth/providers/google";
import NextAuth, { AuthOptions } from "next-auth";
import prisma from "@/prisma/client";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

export const nextAuthOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt",
  },
};

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST };
