import { Add, Remove } from "@mui/icons-material";
import {
    Box,
    Button,
    Checkbox,
    Stack,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getLastPrice, useCartStore } from "../../../stores/cartStore";
import CardProductItem from "./CartProductItem";

export interface ICartDetailProps {}

export default function CartDetail(props: ICartDetailProps) {
    const { products, totalPrice, removeProduct, selectAll, unSelectAll } =
        useCartStore();
    const theme = useTheme();
    const matchSm = useMediaQuery(theme.breakpoints.down("sm"));
    const navigate = useNavigate();

    const isSelectedAll = products.every(
        (product) => product.selected === true
    );

    return (
        <Box padding="1rem">
            <Stack
                maxHeight="60vh"
                minWidth={matchSm ? 0 : "26rem"}
                overflow={products.length === 0 ? "hidden" : "auto"}
                spacing={1}
            >
                {products.length === 0 ? (
                    <Typography
                        minHeight="2rem"
                        textAlign="center"
                        fontSize="1.2rem"
                        fontWeight="500"
                    >
                        Empty
                    </Typography>
                ) : (
                    products.map((product) => {
                        return (
                            <CardProductItem
                                key={product.id}
                                product={product}
                            />
                        );
                    })
                )}
            </Stack>
            <Stack
                direction={{ xs: "column", sm: "row" }}
                justifyContent="space-between"
                marginTop={2}
                spacing={2}
                alignItems="center"
            >
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                >
                    {products.length > 0 && (
                        <Checkbox
                            checked={isSelectedAll}
                            onClick={() => {
                                if (isSelectedAll) {
                                    unSelectAll();
                                } else {
                                    selectAll();
                                }
                            }}
                        />
                    )}
                    <Typography>
                        <span style={{ fontWeight: "bold" }}>
                            Total price:{" "}
                        </span>
                        {totalPrice()}
                    </Typography>
                </Stack>
                <Stack direction="row">
                    <Button
                        size="small"
                        variant="outlined"
                        onClick={() => removeProduct()}
                    >
                        Remove
                    </Button>
                    <Button
                        size="small"
                        variant="contained"
                        sx={{ marginLeft: ".4rem" }}
                        onClick={() => navigate("/checkout")}
                    >
                        Checkout
                    </Button>
                </Stack>
            </Stack>
        </Box>
    );
}
