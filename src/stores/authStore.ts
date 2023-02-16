import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UserInfo } from "../schemas/user";

export interface AuthStore {
    info?: UserInfo;
    accessToken?: string;
    refreshToken?: string;
    setUser: (authInfo: AuthStoreState) => void;
    logOut: () => void;
}

const initalState: AuthStoreState = {
    accessToken: undefined,
    info: undefined,
    refreshToken: undefined,
};

export type AuthStoreState = Pick<
    AuthStore,
    "info" | "accessToken" | "refreshToken"
>;

export const useAuthStore = create<AuthStore>()(
    persist(
        (set, get) => ({
            setUser(authInfo: AuthStoreState) {
                set(authInfo);
            },
            logOut() {
                set(initalState);
            },
        }),
        {
            name: "auth",
        }
    )
);
