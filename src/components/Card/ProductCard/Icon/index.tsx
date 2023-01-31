import { Box } from "@mui/material";
import { lightGreen } from "@mui/material/colors";
import { cloneElement, ReactElement, ReactNode } from "react";

export interface IProductCardIconProps {
    icon: ReactElement;
}

export default function ProductCardIcon(props: IProductCardIconProps) {
    const { icon } = props;
    const iconClone = cloneElement(icon, { className: "productCardIcon" });
    return (
        <Box
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
                        rotate: "360deg",
                    },
                },
                ":active": {
                    backgroundColor: lightGreen[900],
                },
            }}
        >
            {iconClone}
        </Box>
    );
}
