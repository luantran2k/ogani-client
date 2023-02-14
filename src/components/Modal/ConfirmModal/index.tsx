import { Button, Stack, SxProps, Theme, Typography } from "@mui/material";
import { ReactElement, useRef, useState } from "react";
import AppModal, { AppModalRef } from "..";

export interface IConfirmModalProps {
    trigger: ReactElement;
    onConfirm: Function;
    question: string;
    questionStyle?: SxProps<Theme>;
}

export default function ConfirmModal(props: IConfirmModalProps) {
    const { trigger, onConfirm, question, questionStyle } = props;
    const [isConfirm, setConfirm] = useState(false);
    const appModalRef = useRef<AppModalRef>(null);
    return (
        <AppModal trigger={trigger} ref={appModalRef}>
            <Typography fontSize="1.1rem" sx={questionStyle}>
                {question}
            </Typography>
            <Stack direction="row" justifyContent="center" spacing={2} mt={2}>
                <Button
                    variant="contained"
                    onClick={() => {
                        onConfirm();
                        appModalRef.current?.setOpen(false);
                    }}
                >
                    Yes
                </Button>
                <Button
                    variant="outlined"
                    onClick={() => {
                        appModalRef.current?.setOpen(false);
                    }}
                >
                    No
                </Button>
            </Stack>
        </AppModal>
    );
}
