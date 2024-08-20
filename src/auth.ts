import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Facebook from "next-auth/providers/facebook";
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
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        Facebook({
            clientId: process.env.AUTH_FACEBOOK_ID,
            clientSecret: process.env.AUTH_FACEBOOK_SECRET,
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
});
