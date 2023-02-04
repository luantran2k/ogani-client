import { Box } from "@mui/material";
import { lightGreen } from "@mui/material/colors";
import { MouseEventHandler, ReactElement } from "react";

export interface IRoundIconProps {
    icon: ReactElement;
    onClick?: MouseEventHandler<HTMLDivElement>;
    rotate?: boolean;
}

export default function RoundIcon(props: IRoundIconProps) {
    const { icon: Icon, onClick = () => {}, rotate } = props;
    return (
        <Box
            onClick={onClick}
            sx={{
                cursor: "pointer",
                backgroundColor: "white",
                height: "2.4rem",
                width: "2.4rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                transition: "all .3s ease",
                ".productCardIcon": {
                    height: "1.2rem",
                    width: "1.2rem",
                    transition: "all .3s ease",
                },
                ":hover": {
                    backgroundColor: lightGreen[600],
                    ".productCardIcon": {
                        color: "white",
                        rotate: rotate ? "360deg" : "0",
                    },
                },
                ":active": {
                    backgroundColor: lightGreen[900],
                },
            }}
        >
            <Icon.type {...Icon.props} className="productCardIcon" />
        </Box>
    );
}
