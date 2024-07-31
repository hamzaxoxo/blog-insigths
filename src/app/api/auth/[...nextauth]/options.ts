
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs"
import UserModel from "@/models/User";
import { NextAuthConfig } from "next-auth";


export const authOptions: NextAuthConfig = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                username: { label: "Email", type: "email", placeholder: "Enter your Email" },
                password: { label: "Password", type: "password", placeholder: "Enter your Password" }
            },
        })
    ]
}