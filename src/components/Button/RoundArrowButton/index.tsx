import { ArrowBackIosNew } from "@mui/icons-material";
import { SxProps, Theme } from "@mui/material";
import { lightGreen } from "@mui/material/colors";
import React from "react";
import { MouseEventHandler } from "react";

export interface IRoundArrowButtonProps {
    onClick?: MouseEventHandler;
    sx?: SxProps<Theme>;
    disabled?: boolean;
}
// /RoundArrowButton
export default React.forwardRef<SVGSVGElement, IRoundArrowButtonProps>(
    function RoundArrowButton(props, ref) {
        const { onClick, sx, disabled = false } = props;
        return (
            <ArrowBackIosNew
                onClick={onClick}
                ref={ref}
                sx={{
                    pointerEvents: disabled ? "none" : "all",
                    filter: disabled ? "grayscale(100%)" : "none",
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
);
