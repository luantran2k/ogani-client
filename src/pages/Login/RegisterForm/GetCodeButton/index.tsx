import { Box, Button, Typography } from "@mui/material";
import { AxiosError } from "axios";
import { SetStateAction, useState } from "react";
import { useNotificationStore } from "../../../../stores/notificationStore";
import { AppResponse } from "../../../../types/Response";
import { request } from "../../../../utils/request";
import CountdownButton from "./Countdown";

export interface IGetCodeButtonProps {
    email: string;
    isValidEmail: boolean;
}

export default function GetCodeButton(props: IGetCodeButtonProps) {
    const { isValidEmail, email } = props;
    const [isDisabled, setDisabled] = useState(false);
    const { pushNotification } = useNotificationStore();

    const handleSendVerificationEmail = async () => {
        setDisabled(true);
        try {
            const { data } = await request.get<AppResponse>(
                "auth/verify-code",
                {
                    params: {
                        email,
                    },
                }
            );
            pushNotification({
                message: "Send verification code sucessfully",
                severity: "success",
            });
        } catch {
            setDisabled(false);
        }
    };

    return (
        <Box position="relative">
            {isDisabled && (
                <CountdownButton setDisabled={setDisabled} duration={60} />
            )}
            <Button
                variant="outlined"
                onClick={handleSendVerificationEmail}
                disabled={!isValidEmail || isDisabled}
            >
                Get Code
            </Button>
        </Box>
    );
}
