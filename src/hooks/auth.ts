import { useNotificationStore } from "./../stores/notificationStore";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";

interface IOptions {
    login?: boolean;
    role?: "User" | "Admin";
}

export const useAuth = (options: IOptions = {}) => {
    const { info } = useAuthStore();
    const { pushNotification } = useNotificationStore();
    const location = useLocation();
    const navigate = useNavigate();
    const { login = true, role } = options;
    useEffect(() => {
        if (login && !info) {
            navigate("/login", {
                state: {
                    from: location.pathname,
                },
            });
            return;
        }
        if (role && role !== info?.role) {
            pushNotification({
                severity: "warning",
                message: "You are not authorized to perform this action",
            });
            navigate("/", {
                state: {
                    from: location.pathname,
                },
            });
            return;
        }
    }, [info]);
};
