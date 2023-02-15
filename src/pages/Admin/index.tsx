import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";
import { grey, lightGreen } from "@mui/material/colors";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

import AdminSideBar from "./SideBar";
import AdminTopBar from "./TopBar";

export interface IAdminPageProps {}

export default function AdminPage(props: IAdminPageProps) {
    useAuth({ role: "Admin" });
    return (
        <Stack direction="row">
            <Box
                display={{ xs: "none", md: "block" }}
                width="20rem"
                bgcolor={lightGreen[50]}
                overflow="auto"
                sx={{ transition: "all 0.3s ease-in-out" }}
            >
                <AdminSideBar />
            </Box>
            <Box flex={1}>
                <AdminTopBar />
                <Box
                    padding="1rem"
                    width={{ xs: "100vw", md: "auto" }}
                    overflow="auto"
                >
                    <Outlet />
                </Box>
            </Box>
        </Stack>
    );
}
