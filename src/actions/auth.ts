"use server";

import { signIn, signOut } from "@/auth";
import { db } from "@/db";
import { saltAndHashPassword } from "@/utils/helpers";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const getUserByEmail = async (email: string) => {
    try {
        const user = await db.user.findUnique({
            where: { email },
        });
        return { user };
    } catch (error) {
        console.error("Error fetching user:", error);
        return { error: "Error fetching user." };
    }
};

export const login = async (provider: string) => {
    try {
        await signIn(provider, { redirectTo: "/" });
        revalidatePath("/");
        return { success: true };
    } catch (error) {
        return { error: "Failed to log in with provider." };
    }
};

export const logout = async () => {
    try {
        await signOut({ redirectTo: "/" });
        redirect("/");
    } catch (error) {
        return { error: "Failed to log out." };
    }
};
