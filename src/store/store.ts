
import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../store/authSlice';
import usersSlice from '../store/usersSlice';
import loginSlice from '../store/loginSlice';

const store = configureStore({
    reducer: {
        auth: authSlice,
        users: usersSlice,
        login: loginSlice,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
