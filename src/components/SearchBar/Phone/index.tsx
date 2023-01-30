import { Phone } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { lightGreen, grey } from "@mui/material/colors";

export interface ISearchBarPhoneProps {
    visible?: boolean;
}

export default function SearchBarPhone(props: ISearchBarPhoneProps) {
    const { visible } = props;
    return (
        <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            display={{ xs: visible ? "flex" : "none", sm: "flex" }}
        >
            <Phone
                sx={{
                    color: lightGreen[600],
                    backgroundColor: grey[200],
                    height: "2.8rem",
                    width: "2.8rem",
                    padding: ".6rem",
                    borderRadius: "50%",
                }}
            />
            <Stack>
                <Typography fontWeight="bold">+65 11.188.888</Typography>
                <Typography fontSize=".8rem" fontWeight={300}>
                    support 24/7 time
                </Typography>
            </Stack>
        </Stack>
    );
}
