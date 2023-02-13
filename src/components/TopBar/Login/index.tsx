import { Person } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../stores/authStore";
import UserControl from "./UserControl";

export interface ILoginProps {}

export default function Login(props: ILoginProps) {
    const { info } = useAuthStore();
    const navigate = useNavigate();
    if (info) {
        return <UserControl />;
    }
    return (
        <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/login")}
        >
            <Person sx={{ fontSize: "1.2rem" }} />
            <Typography>Login</Typography>
        </Stack>
    );
}
