import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { User } from "../../../models";

const authOption: NextAuthOptions = {
  session: { strategy: "jwt" },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (!profile?.email) {
        throw new Error("No email found");
      }
      const [entry, created] = await User.findOrCreate({
        where: { email: profile.email },
      });
      if (created) {
        console.log("User created:", profile.email);
        return true;
      }
      console.log("User already exists:", profile.email);
      return true;
    },
  },
};

export default NextAuth(authOption);
