import { ArrowBackIosNew } from "@mui/icons-material";
import { SxProps, Theme } from "@mui/material";
import { lightGreen } from "@mui/material/colors";
import { MouseEventHandler } from "react";

export interface IRoundArrowButtonProps {
    onClick?: MouseEventHandler;
    sx?: SxProps<Theme>;
}

export default function RoundArrowButton(props: IRoundArrowButtonProps) {
    const { onClick, sx } = props;
    return (
        <ArrowBackIosNew
            onClick={onClick}
            sx={{
                height: "2.4rem",
                width: "2.4rem",
                padding: ".4rem",
                color: lightGreen[600],
                borderRadius: "50%",
                cursor: "pointer",
                border: `2px solid ${lightGreen[600]}`,
                transition: "all .3s ease",
                ":hover": {
                    backgroundColor: lightGreen[600],
                    color: "white",
                },
                ":active": {
                    backgroundColor: lightGreen[700],
                },
                ...sx,
            }}
        />
    );
}
