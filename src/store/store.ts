
import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../store/authSlice';
import usersSlice from '../store/usersSlice';
import loginSlice from '../store/loginSlice';
import { useDispatch, useSelector } from 'react-redux';

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


export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();