import { Box, MenuItem, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../../stores/authStore";
import PopupMenu from "../../../Menu/PopupMenu";

export interface IUserControlProps {}

export default function UserControl(props: IUserControlProps) {
    const { info, logOut } = useAuthStore();
    const navigate = useNavigate();
    return (
        <PopupMenu
            trigger={
                <Box
                    height="2rem"
                    width="2rem"
                    borderRadius="50%"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ cursor: "pointer" }}
                >
                    <img
                        src={
                            info?.avatar
                                ? info?.avatar
                                : "/image/user/profile.png"
                        }
                        style={{ height: "100%" }}
                    />
                </Box>
            }
        >
            <MenuItem onClick={() => navigate("/admin")}>Admin</MenuItem>
            <MenuItem onClick={() => logOut()}>Logout</MenuItem>
        </PopupMenu>
    );
}
