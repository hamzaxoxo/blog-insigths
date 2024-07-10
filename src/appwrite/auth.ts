
import conf from "@/config/config";
import { Client, Account, ID, Models } from "appwrite";

interface UserCredentials {
    email: string;
    password: string;
}

interface CreateAccountParams extends UserCredentials {
    name: string;
}

export class AuthService {
    private client: Client;
    private account: Account;

    constructor() {
        this.client = new Client();
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }: CreateAccountParams): Promise<Models.Session | Models.Account> {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({ email, password }: UserCredentials): Promise<Models.Session> {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(): Promise<Models.User<Models.Preferences> | null> {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout(): Promise<void> {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService;
