// lib/axios.js
import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    timeout: 5000,
});

instance.interceptors.request.use(async function (config) {
    const token = getCookie("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                // Get a new token
                const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/refresh-token`);
                document.cookie = `token=${res.data.token}; path=/;`;
                instance.defaults.headers["Authorization"] = `Bearer ${res.data.token}`;

                return instance(originalRequest);
            } catch (err) {
                console.error("Error refreshing token", err);
                throw err;
            }
        }

        return Promise.reject(error);
    }
);

function getCookie(name: string) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
        const cookieValue = parts.pop();
        if (cookieValue !== undefined) {
            return cookieValue.split(';').shift() || null;
        }
    }
    return null;
}

export default instance;
