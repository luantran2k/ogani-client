import { Box, Modal, SxProps, Theme, Typography } from "@mui/material";
import {
    Dispatch,
    forwardRef,
    ReactElement,
    ReactNode,
    useImperativeHandle,
    useState,
} from "react";

export interface IAppModalProps {
    trigger: ReactElement;
    children: ReactNode[] | ReactNode;
    sx?: SxProps<Theme>;
    defaultStyles?: boolean;
}

export interface AppModalRef {
    setOpen: Dispatch<React.SetStateAction<boolean>>;
}

const AppModal = forwardRef<AppModalRef, IAppModalProps>(function (props, ref) {
    const [open, setOpen] = useState(false);
    const { trigger: Trigger, children, sx = {}, defaultStyles = true } = props;
    useImperativeHandle(ref, () => ({
        setOpen,
    }));

    const styles: SxProps<Theme> = {
        bgcolor: "white",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: "1rem",
        borderRadius: ".4rem",
    };
    const boxStyle: SxProps<Theme> = {
        ...(defaultStyles ? styles : {}),
        ...sx,
    };
    return (
        <>
            <Trigger.type
                {...Trigger?.props}
                {...{ onClick: () => setOpen(true) }}
            />
            <Modal open={open} onClose={() => setOpen(false)}>
                <Box sx={boxStyle}>{children}</Box>
            </Modal>
        </>
    );
});

export default AppModal;
