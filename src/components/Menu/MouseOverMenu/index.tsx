import { MoreVert } from "@mui/icons-material";
import { Box, SxProps, Theme } from "@mui/material";
import { grey } from "@mui/material/colors";
import { cloneElement, ReactNode, useState } from "react";
import { BOX_SHADOW } from "../../../const/style";
import styles from "./styles.module.scss";

export interface IPopupMenuProps {
    trigger?: JSX.Element;
    sx?: SxProps<Theme>;
    className?: string;
    children: ReactNode[] | ReactNode;
}

export default function MouseOverMenu(props: IPopupMenuProps) {
    const { trigger, children, className, sx } = props;
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const triggerElement = trigger ? (
        cloneElement(trigger, {
            onMouseEnter: handleOpen,
            // onMouseLeave: () => setOpen(false),
        })
    ) : (
        <MoreVert sx={{ cursor: "pointer" }} onMouseEnter={handleOpen} />
    );

    return (
        <Box
            className={className || ""}
            onMouseLeave={handleClose}
            sx={{ position: "relative" }}
        >
            {triggerElement}
            <Box
                sx={{
                    visibility: open ? "visible" : "hidden",
                    opacity: open ? "1" : "0",
                    transform: open ? "translateY(0)" : "translateY(1rem)",
                    position: "absolute",
                    boxShadow: BOX_SHADOW,
                    borderRadius: ".25rem",
                    zIndex: 9999,
                    transition: "all .3s ease",
                    ...sx,
                }}
            >
                {children}
            </Box>
        </Box>
    );
}
