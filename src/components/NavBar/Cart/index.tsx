import { ShoppingCart, ShoppingCartOutlined } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import { lightGreen } from "@mui/material/colors";
import styles from "./styles.module.scss";

export interface ICartProps {}

export default function Cart(props: ICartProps) {
    return (
        <Stack direction="row" spacing={2} alignItems="center">
            <Box sx={{ position: "relative" }}>
                <ShoppingCart
                    sx={{ cursor: "pointer", fontSize: "1.8rem" }}
                ></ShoppingCart>
                <Typography
                    sx={{
                        cursor: "pointer",
                        userSelect: "none",
                        position: "absolute",
                        top: "-30%",
                        right: "-30%",
                        color: "white",
                        backgroundColor: lightGreen[600],
                        height: "1.4rem",
                        width: "1.4rem",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    3
                </Typography>
            </Box>
            <Typography fontSize=".8rem">
                Item: <span className={styles.price}>$150.000</span>
            </Typography>
        </Stack>
    );
}
