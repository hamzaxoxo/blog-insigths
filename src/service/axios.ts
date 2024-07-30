import axios from "axios";
import { NextRequest } from "next/server";

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_DOMAIN,
    timeout: 5000,
});

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                // Get a new token
                const res = await axios.post(
                    `${process.env.NEXT_PUBLIC_DOMAIN}/auth/token/refresh`
                );
                // get token for next response 
                const token = NextRequest.cookies.get('token')?.value;
                console.log(token, 'token');
                // get from next cookies
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

instance.interceptors.request.use(async function (config) {
    const token = await localStorage.getItem("token");
    config.headers.Authorization = token;
    return config;
});

export default instance;