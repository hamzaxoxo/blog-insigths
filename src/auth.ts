import Dribbble from "next-auth/providers/dribbble"
import Spotify from "next-auth/providers/spotify";
import Apple from "next-auth/providers/Apple";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import Facebook from "next-auth/providers/facebook";
import Google from "next-auth/providers/google";
import { db } from "./db";
export const {
    handlers: { GET, POST },
    signIn,
    signOut,
    auth,
} = NextAuth({
    adapter: PrismaAdapter(db),
    session: { strategy: "jwt" },
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        Facebook({
            clientId: process.env.AUTH_FACEBOOK_ID!,
            clientSecret: process.env.AUTH_FACEBOOK_SECRET!,
        }),
        Apple({
            clientId: process.env.APPLE_CLIENT_ID!,
            clientSecret: process.env.APPLE_CLIENT_SECRET!,
        }),
        Dribbble({
            clientId: process.env.DRIBBBLE_CLIENT_ID!,
            clientSecret: process.env.AUTH_DRIBBBLE_SECRET!,
        }),
        Spotify({
            clientId: process.env.AUTH_SPOTIFY_ID,
            clientSecret: process.env.AUTH_SPOTIFY_SECRET,
        }),
        // Credentials({
        //     name: "Credentials",
        //     credentials: {
        //         email: {
        //             label: "Email",
        //             type: "email",
        //             placeholder: "email@example.com",
        //         },
        //         password: { label: "Password", type: "password" },
        //     },
        //     authorize: async (credentials) => {
        //         if (!credentials || !credentials.email || !credentials.password) {
        //             return null;
        //         }

        //         const email = credentials.email as string;


        //         let user: any = await db.user.findUnique({
        //             where: {
        //                 email,
        //             },
        //         });

        //         if (!user) {
        //             throw new Error("No user found.");
        //         }
        //         const isMatch = bcrypt.compareSync(
        //             credentials.password as string,
        //             user.hashedPassword
        //         );
        //         if (!isMatch) {
        //             throw new Error("Incorrect password.");
        //         }

        //         return user;
        //     },
        // }),
    ],
    secret: process.env.NEXT_PUBLIC_SECRET
});
