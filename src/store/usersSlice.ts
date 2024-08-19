import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUserDetails } from "./userThunks";

interface UserState {
    user: any | null;
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