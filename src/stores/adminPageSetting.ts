import { create } from "zustand";

interface AdminPageSettings {
    isSideBarOpen: boolean;
    toggleSideBar: () => void;
}

export const useAdminPageSettings = create<AdminPageSettings>()((set, get) => ({
    isSideBarOpen: true,
    toggleSideBar() {
        set((state) => ({ isSideBarOpen: !state.isSideBarOpen }));
    },
}));
