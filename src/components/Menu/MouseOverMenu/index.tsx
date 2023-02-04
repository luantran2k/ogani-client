import { MoreVert } from "@mui/icons-material";
import { Box, SxProps, Theme } from "@mui/material";
import { ReactElement, ReactNode, useState } from "react";
import { BOX_SHADOW } from "../../../const/style";

export interface IPopupMenuProps {
    trigger?: ReactElement;
    sx?: SxProps<Theme>;
    className?: string;
    children: ReactNode[] | ReactNode;
}

export default function MouseOverMenu(props: IPopupMenuProps) {
    const { trigger: Trigger, children, className, sx } = props;
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const triggerElement = Trigger ? (
        <Trigger.type {...Trigger.props} {...{ onMouseEnter: handleOpen }} />
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
