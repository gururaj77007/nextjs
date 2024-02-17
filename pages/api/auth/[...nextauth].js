import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { signInWithEmailAndPassword } from "firebase/auth";

import { authconf } from "../../../src/app/firebase/firebase";
const authOptions = {
  // Configure one or more authentication providers
  pages: {
    signIn: "/signin",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials) {
        try {
          const userCredential = await signInWithEmailAndPassword(
            authconf,
            credentials.username || "",
            credentials.password || ""
          );
          if (userCredential.user) {
            return userCredential.user;
          }
          return null;
        } catch (error) {
          console.error(error.message);
        }
      },
    }),
  ],
};

export default NextAuth(authOptions);
