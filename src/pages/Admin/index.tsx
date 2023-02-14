import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";
import { grey, lightGreen } from "@mui/material/colors";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useAdminPageSettings } from "../../stores/adminPageSetting";
import AdminSideBar from "./SideBar";
import AdminTopBar from "./TopBar";

export interface IAdminPageProps {}

export default function AdminPage(props: IAdminPageProps) {
    useAuth({ role: "Admin" });
    const { isSideBarOpen } = useAdminPageSettings();
    return (
        <Stack direction="row">
            <Box
                flex={isSideBarOpen ? "0 0 16rem" : "0"}
                bgcolor={lightGreen[50]}
                height="100vh"
                overflow="auto"
                sx={{ transition: "all 0.3s ease-in-out" }}
            >
                <AdminSideBar />
            </Box>
            <Box flex={1}>
                <AdminTopBar />
                <Box padding="1rem">
                    <Outlet />
                </Box>
            </Box>
        </Stack>
    );
}
