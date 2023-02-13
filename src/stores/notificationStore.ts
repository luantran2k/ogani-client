import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

export interface NotificationPayload {
    message: string;
    severity?: "error" | "info" | "success" | "warning";
    time?: number;
}
export interface Notification extends NotificationPayload {
    id: string;
}

interface NotificationStore {
    notifications: Notification[];
    pushNotification: (notification: NotificationPayload) => void;
    removeNotification: (id: string) => void;
}

export const useNotificationStore = create<NotificationStore>()((set, get) => ({
    notifications: [],
    async pushNotification(notification: NotificationPayload) {
        const id = uuidv4();
        set((state) => {
            return {
                notifications: [
                    ...state.notifications,
                    { ...notification, id },
                ],
            };
        });

        await new Promise((resolve) => {
            const timer = notification.time || 5;
            return setTimeout(() => {
                resolve("resolved");
            }, timer * 1000);
        });

        get().removeNotification(id);
    },
    removeNotification(id: string) {
        set((state) => {
            return {
                notifications: state.notifications.filter(
                    (notification) => notification.id !== id
                ),
            };
        });
    },
}));
