"use server";

import { signIn, signOut } from "@/auth";
import { db } from "@/db";
import { AuthError } from "next-auth";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";
// const router = useRouter();
const getUserByEmail = async (email: string) => {
    try {
        const user = await db.user.findUnique({
            where: {
                email,
            },
        });
        return user;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const login = async (provider: string) => {
    const res = await signIn(provider, { redirectTo: "/" });
    // const existingUser = await getUserByEmail(res?.email);
    // console.log(existingUser);
    revalidatePath("/")
};

export const logout = async () => {
    await signOut({ redirectTo: "/" });
    window.location.reload();
};

export const loginWithCreds = async (formData: FormData) => {
    const rawFormData = {
        email: formData.get("email"),
        password: formData.get("password"),
        role: "ADMIN",
        redirectTo: "/",
    };

    const existingUser = await getUserByEmail(formData.get("email") as string);
    console.log(existingUser);

    try {
        await signIn("credentials", rawFormData);
    } catch (error: any) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return { error: "Invalid credentials!" };
                default:
                    return { error: "Something went wrong!" };
            }
        }

        throw error;
    }
    revalidatePath("/");
};
