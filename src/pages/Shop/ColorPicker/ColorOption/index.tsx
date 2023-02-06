import { Box, Stack, Typography } from "@mui/material";
import { grey, lightGreen } from "@mui/material/colors";

export interface IColorOptionProps {
    value: string;
    label: string;
    color: string;
    onClick?: Function;
    checked?: boolean;
}

export default function ColorOption(props: IColorOptionProps) {
    const { value, color, label, checked = false, onClick } = props;
    return (
        <Stack
            onClick={() => (onClick ? onClick() : undefined)}
            direction="row"
            spacing={1}
            alignItems="center"
            borderRadius=".4rem"
            padding=".4rem"
            justifyContent="center"
            flexWrap="wrap"
            bgcolor={checked ? grey[200] : "transparent"}
            sx={{
                transition: "all .3s ease",
                cursor: "pointer",
                userSelect: "none",
                ":hover": {
                    backgroundColor: grey[100],
                },
            }}
        >
            <Box
                height="1rem"
                width="1rem"
                borderRadius="50%"
                flexShrink="0"
                bgcolor={value}
                border={color == "white" ? "2px solid grey" : "none"}
            ></Box>
            <Typography>{label}</Typography>
        </Stack>
    );
}
