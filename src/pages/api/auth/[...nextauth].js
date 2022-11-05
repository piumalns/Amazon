import NextAuth from "next-auth"
import Provider from "next-auth/providers"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    Provider.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)