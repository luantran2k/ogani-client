import { Menu } from "@mui/icons-material";
import {
    AppBar,
    MenuItem,
    Stack,
    TextField,
    Toolbar,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import UserControl from "../../../components/TopBar/Login/UserControl";
import { useAdminPageSettings } from "../../../stores/adminPageSetting";

export interface IAdminTopBarProps {}

export default function AdminTopBar(props: IAdminTopBarProps) {
    const { isSideBarOpen, toggleSideBar } = useAdminPageSettings();
    return (
        <AppBar
            color="transparent"
            position="relative"
            sx={{ height: "4rem", width: "100%", right: 0, overflow: "hidden" }}
        >
            <Toolbar>
                <Stack direction="row" flex={1}>
                    <MenuItem onClick={() => toggleSideBar()}>
                        <Menu />
                    </MenuItem>
                </Stack>
                <UserControl />
            </Toolbar>
        </AppBar>
    );
}
