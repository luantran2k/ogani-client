import { MoreVert } from "@mui/icons-material";
import { Button, MenuItem, Popover, PopoverOrigin } from "@mui/material";
import { cloneElement, ReactElement, ReactNode, useState } from "react";

export interface IPopupMenuProps {
    children: ReactNode[] | ReactNode;
    trigger?: ReactElement;
    anchorOrigin?: PopoverOrigin;
    transformOrigin?: PopoverOrigin;
}

export default function PopupMenu(props: IPopupMenuProps) {
    const {
        children,
        trigger,
        transformOrigin = {
            vertical: "top",
            horizontal: "right",
        },
        anchorOrigin = {
            vertical: "bottom",
            horizontal: "right",
        },
    } = props;

    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const handleOpen = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        setAnchorEl(e.currentTarget);
        setOpen(true);
    };
    const triggerElement = trigger ? (
        cloneElement(trigger, {
            onClick: handleOpen,
        })
    ) : (
        <Button onClick={handleOpen}>
            <MoreVert />
        </Button>
    );
    return (
        <>
            {triggerElement}
            <Popover
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={anchorOrigin}
                transformOrigin={transformOrigin}
                onClose={() => setOpen(false)}
            >
                {children}
            </Popover>
        </>
    );
}
