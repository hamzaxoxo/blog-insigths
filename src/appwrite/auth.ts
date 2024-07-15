import conf from "@/conf/config";
import { Client, Account, ID, Models, OAuthProvider } from "appwrite";
import toast from "react-hot-toast";

interface UserCredentials {
    email: string;
    password: string;
    url?: string;
}

// Define the type for creating a new account
interface CreateAccount extends UserCredentials {
    name: string;
}

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }: CreateAccount): Promise<Models.Session | void> {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                await this.account.createEmailPasswordSession(email, password);
                const res = await this.account.createVerification(`${process.env.NEXT_PUBLIC_URL}/verify-email`);
            }
        } catch (error) {
            throw error;
        }
    }

    async login({ email, password }: UserCredentials): Promise<Models.Session> {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async passRecovery({ email }: { email: string }): Promise<void> {
        try {
            await this.account.createRecovery(email, `${process.env.NEXT_PUBLIC_URL}/auth/new-password`);
            toast.success("Password reset link sent to your email");
        } catch (error: any) {
            if (error?.code === 404) {
                toast.error("Email does not exist");
            } else {
                throw error;
            }
        }
    }
    async googleLogin(): Promise<void> {
        try {
            this.account.createOAuth2Session(
                OAuthProvider.Google,
                `${process.env.NEXT_PUBLIC_URL}`,
                `${process.env.NEXT_PUBLIC_URL}`,
            );
        } catch (error) {
            throw error;
        }
    }
    async updateUser(name: string): Promise<Models.User<{}>> {
        try {
            return await this.account.updateName(name);
        } catch (error) {
            console.error('Error updating user name:', error);
            throw error;
        }
    }
    async updatePassword(userId: string, secret: string, password: string): Promise<void> {
        try {
            await this.account.updateRecovery(userId, secret, password);
            toast.success("Password updated successfully");
        } catch (error) {
            console.error('Error updating user password:', error);
            throw error;
        }
    }
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }


    async verifyEmail(userId: string, secret: string): Promise<void> {
        try {
            await this.account.updateVerification(userId, secret);
            toast.success("Email verified successfully");
        } catch (error) {
            console.log("Appwrite service :: verifyEmail :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService


