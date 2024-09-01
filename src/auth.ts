
import NextAuth from "next-auth";
import Google from "next-auth/providers/google"
import Facebook from "next-auth/providers/facebook"
import Spotify from "next-auth/providers/spotify"
import Dribbble from "next-auth/providers/dribbble"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "@/lib/prisma"

export const {
    handlers: { GET, POST },
    signIn,
    signOut,
    auth,
} = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: { strategy: "jwt" },
    providers: [
        Google,
        Facebook,
        Spotify,
        Dribbble
    ],
    secret: process.env.NEXT_PUBLIC_SECRET
});
