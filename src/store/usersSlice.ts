import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
    id: string;
    fullName: string;
    email: string;
    bio: string;
    profilePicture: string;
    createdAt: string;
    updatedAt: string;
    isVerified: boolean;
    photo: string;
}

interface UserState {
    user: User | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: UserState = {
    user: null,
    status: 'idle',
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<User>) {
            state.user = action.payload;
            state.status = 'succeeded';
        },
        clearUser(state) {
            state.user = null;
            state.status = 'idle';
            state.error = null;
        },
        setLoading(state) {
            state.status = 'loading';
        },
        setError(state, action: PayloadAction<string>) {
            state.status = 'failed';
            state.error = action.payload;
        },
    },
});

// 5. Export actions and reducer
export const { setUser, clearUser, setLoading, setError } = userSlice.actions;
export default userSlice.reducer;
