import { Mail } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";

export interface ITopBarEmailProps {}

export default function TopBarEmail(props: ITopBarEmailProps) {
    return (
        <Stack direction="row" alignItems="center" spacing={1}>
            <Mail sx={{ fontSize: "1rem" }} />
            <a href="mailto:tranluan2kyl@gmail.com">
                <Typography>tranluan2kyl@gmail.com</Typography>
            </a>
        </Stack>
    );
}
