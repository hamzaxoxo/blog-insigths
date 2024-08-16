import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "./store";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import toast from "react-hot-toast";
import axios from "axios";

interface User {
    email: string;
    password: string;
    router: Params;
    isLoggedIn: Boolean;
}

interface LoginState {
    loggedInUser: User | null;
    loginLoader: boolean;
}

const initialState: LoginState = {
    loggedInUser: null,
    loginLoader: false,
};

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        loginSuccess(state, action: PayloadAction<User>) {
            state.loggedInUser = action.payload;
        },
        loginLoaderFn(state, action: PayloadAction<boolean>) {
            state.loginLoader = action.payload;
        },
    },
});

export const { loginSuccess, loginLoaderFn } = loginSlice.actions;

export default loginSlice.reducer;

export const login = (userData: User) => async (dispatch: AppDispatch) => {
    try {
        dispatch(loginLoaderFn(true));
        axios.post("/api/auth/user/login", userData)
            .then((res: any) => {
                const { router } = userData;
                const loggedInUser: User = { ...userData, isLoggedIn: true };
                toast.success(res?.data?.message);
                dispatch(loginSuccess(loggedInUser));
                router.push("/");
                dispatch(loginLoaderFn(false));
            })
            .catch((error: any) => {
                toast.error(error.response?.data?.error);
                dispatch(loginLoaderFn(false));
                console.error("Error:", error);
            });
    } catch (error) {
        console.error("Error logging in:", error);
        return { error };
    }
};
