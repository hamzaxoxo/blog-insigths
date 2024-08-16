import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUserDetails = createAsyncThunk(
    'user/fetchUserDetails',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch('/api/user');
            const data = await response.json();
            console.log("data", data)

            if (!response.ok) {
                throw new Error(data.error || 'Failed to fetch user details');
            }

            return data.data;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);
