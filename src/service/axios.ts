// lib/axios.js
import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    timeout: 5000,
});

instance.interceptors.request.use(async function (config) {
    const token = await localStorage.getItem("token");
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
                localStorage.setItem("token", `Bearer ${res.data.token}`);
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

export default instance;
