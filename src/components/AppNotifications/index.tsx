import { Cancel } from "@mui/icons-material";
import { Alert, Box, Button } from "@mui/material";
import { useNotificationStore } from "../../stores/notificationStore";
import styles from "./styles.module.scss";
export interface IAppALertProps {}

export default function AppNotifications(props: IAppALertProps) {
    const { notifications, removeNotification } = useNotificationStore();
    return (
        <Box className={styles.notifications}>
            {notifications.map(({ severity, message, id }) => (
                <Alert
                    action={
                        <Button
                            color="inherit"
                            sx={{ height: "100%", alignSelf: "stretch" }}
                            onClick={() => removeNotification(id)}
                        >
                            <Cancel />
                        </Button>
                    }
                    className={styles.alert}
                    key={id}
                    severity={severity}
                    sx={{ alignItems: "center" }}
                >
                    {message}
                </Alert>
            ))}
        </Box>
    );
}
