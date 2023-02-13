import { Typography } from "@mui/material";
import { lightGreen } from "@mui/material/colors";
import { Dispatch, useEffect, useState } from "react";

export interface ICountdownButtonProps {
    duration: number;
    setDisabled: Dispatch<React.SetStateAction<boolean>>;
}

export default function CountdownButton(props: ICountdownButtonProps) {
    const { setDisabled, duration } = props;
    const [timer, setTimer] = useState(duration);
    useEffect(() => {
        const id = setInterval(() => {
            setTimer((timer) => timer - 1);
        }, 1000);
        return () => {
            clearInterval(id);
        };
    }, []);
    useEffect(() => {
        if (timer <= 0) {
            setDisabled(false);
            return;
        }
    }, [timer]);
    return (
        <Typography
            sx={{
                position: "absolute",
                bgcolor: "rgba(0,0, 0,0.1)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
                color: lightGreen[600],
                fontWeight: "bold",
                fontSize: "1.4rem",
            }}
        >
            {timer}
        </Typography>
    );
}
