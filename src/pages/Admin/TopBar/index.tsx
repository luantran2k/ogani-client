import { Menu } from "@mui/icons-material";
import {
    AppBar,
    Drawer,
    MenuItem,
    Stack,
    TextField,
    Toolbar,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import { lightGreen } from "@mui/material/colors";
import { useState } from "react";
import UserControl from "../../../components/TopBar/Login/UserControl";
import AdminSideBar from "../SideBar";

export interface IAdminTopBarProps {}

export default function AdminTopBar(props: IAdminTopBarProps) {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    return (
        <AppBar
            color="transparent"
            position="relative"
            sx={{ height: "4rem", width: "100%", right: 0, overflow: "hidden" }}
        >
            <Toolbar>
                <Stack direction="row" flex={1}>
                    <MenuItem
                        onClick={() => {
                            setIsSideBarOpen(true);
                        }}
                        sx={{ display: { xs: "block", md: "none" } }}
                    >
                        <Menu />
                    </MenuItem>
                    <Drawer
                        open={isSideBarOpen}
                        onClose={() => setIsSideBarOpen(false)}
                    >
                        <AdminSideBar />
                    </Drawer>
                </Stack>
                <UserControl />
            </Toolbar>
        </AppBar>
    );
}
