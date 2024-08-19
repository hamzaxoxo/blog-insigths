
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import authSlice from '../store/authSlice';
import loginSlice from '../store/loginSlice';
import usersSlice from '../store/usersSlice';

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