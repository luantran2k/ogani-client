import { Box, Typography } from "@mui/material";
import { useAuthStore } from "../../../../stores/authStore";
import PopupMenu from "../../../Menu/PopupMenu";

export interface IUserControlProps {}

export default function UserControl(props: IUserControlProps) {
    const { info, logOut } = useAuthStore();
    return (
        <PopupMenu trigger={<p>Logout</p>}>
            <Typography onClick={() => logOut()}>Logout</Typography>
        </PopupMenu>
    );
}
