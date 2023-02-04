import { ShoppingCart } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import { lightGreen } from "@mui/material/colors";
import { useCartStore } from "../../stores/cartStore";
import PopupMenu from "../Menu/PopupMenu";
import CartDetail from "./CartDetail";

export interface ICartProps {}

export default function Cart(props: ICartProps) {
    const { products } = useCartStore();
    const numberItem = products.length;
    return (
        <Stack direction="row" spacing={2} alignItems="center">
            <PopupMenu
                trigger={
                    <Box sx={{ position: "relative" }}>
                        <ShoppingCart
                            sx={{ cursor: "pointer", fontSize: "1.8rem" }}
                        ></ShoppingCart>
                        <Typography
                            sx={{
                                cursor: "pointer",
                                userSelect: "none",
                                position: "absolute",
                                top: "-20%",
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
                            {numberItem}
                        </Typography>
                    </Box>
                }
            >
                <CartDetail />
            </PopupMenu>
        </Stack>
    );
}
