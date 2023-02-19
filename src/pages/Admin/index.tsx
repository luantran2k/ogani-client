import { Menu } from "@mui/icons-material";
import { Box, Stack } from "@mui/material";
import { lightGreen } from "@mui/material/colors";
import { SetStateAction, useState } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

import AdminSideBar from "./SideBar";
import AdminTopBar from "./TopBar";

export interface IAdminPageProps {}

export default function AdminPage(props: IAdminPageProps) {
    useAuth({ role: "Admin" });
    const [isSideBarOpen, setSidebarOpen] = useState(true);
    return (
        <Stack direction="row">
            <Box
                display={{ xs: "none", md: "block" }}
                flex={isSideBarOpen ? "0 0 20rem" : "0 0 0"}
                bgcolor={lightGreen[50]}
                sx={{ transition: "all 0.3s ease-in-out", overflowX: "hidden" }}
            >
                <AdminSideBar />
            </Box>
            <Box flex={1} className="hideScrollbar">
                <AdminTopBar
                    setSidebarOpen={setSidebarOpen}
                    isSideBarOpen={isSideBarOpen}
                />
                <Box
                    padding="1rem"
                    width={{
                        xs: "100vw",
                        md: isSideBarOpen ? "calc(100vw - 20rem)" : "100vw",
                        transition: "all 0.3s ease-in-out",
                    }}
                    height="calc(100vh - 4rem)"
                    overflow="auto"
                >
                    <Outlet />
                </Box>
            </Box>
        </Stack>
    );
}
