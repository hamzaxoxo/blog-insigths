import { AppDispatch } from '@/store/store';
import { setUser } from '@/store/usersSlice';
import axios from 'axios';

export const fetchUser = () => async (dispatch: AppDispatch) => {
    try {

        const response = await axios.get('/api/user');
        dispatch(setUser(response?.data?.data));
    } catch (error) {
        console.error('Failed to fetch user:', error);
    }
};
