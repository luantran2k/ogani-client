import { Box, ListItem, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

export interface ISizeOptionProps {
    label: string;
    value: string;
    checked?: boolean;
    onClick?: Function;
}

export default function SizeOption(props: ISizeOptionProps) {
    const { label, value, checked = true, onClick } = props;
    return (
        <Typography
            onClick={() => {
                onClick ? onClick() : undefined;
            }}
            padding=".4rem 1rem"
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderRadius=".4rem"
            bgcolor={checked ? grey[200] : "transparent"}
            sx={{
                cursor: "pointer",
                transition: "all .3s ease",
                "&:hover": {
                    bgcolor: grey[200],
                },
            }}
        >
            {label}
        </Typography>
    );
}
