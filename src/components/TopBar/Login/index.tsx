import { Person } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";

export interface ILoginProps {}

export default function Login(props: ILoginProps) {
    return (
        <Stack direction="row" alignItems="center" spacing={1}>
            <Person sx={{ fontSize: "1.2rem" }} />
            <Typography>Login</Typography>
        </Stack>
    );
}
