import { useNotificationStore } from "./../stores/notificationStore";
import axios from "axios";

const { pushNotification } = useNotificationStore.getState();

export const request = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 10 * 1000,
});

request.interceptors.response.use(
    async (config) => {
        return config;
    },
    (error) => {
        pushNotification({
            message: error.response?.data.message || "Unknown Error",
            severity: "error",
        });
    }
);
