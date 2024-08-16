import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUserDetails } from "./userThunks";

export interface User {
    $id: string,
    fullName: string,
    email: string,
    bio: string,
    profilePicture: string,
    createdAt: string,
    updatedAt: string,
    isVerfied: boolean,
    photo: string,
}

interface UserState {
    user: User | null;
}

const initialState: UserState = {
    user: null,
};


const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserDetails.pending, (state: any) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUserDetails.fulfilled, (state: any, action) => {
                state.userInfo = action.payload;
                state.loading = false;
            })
            .addCase(fetchUserDetails.rejected, (state: any, action) => {
                state.error = action.payload;
                state.loading = false;
            });
    },
});
export default userSlice.reducer;