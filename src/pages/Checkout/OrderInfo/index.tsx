import { Box, Button, Stack, Typography } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import { products } from "../../../mock/product";
import { useCartStore } from "../../../stores/cartStore";

export interface IOrderInfoProps {}

export default function OrderInfo(props: IOrderInfoProps) {
    const { products, totalPrice } = useCartStore();
    const selectedProduct = products.filter(
        (product) => product.selected === true
    );
    return (
        <Stack
            bgcolor={grey[200]}
            padding={4}
            spacing={1}
            borderRadius={".4rem"}
        >
            <Typography variant="h3" fontSize="1.6rem" fontWeight="bold">
                Your Order
            </Typography>
            <Box borderBottom={`1px solid ${grey[500]}`} margin="1rem 0"></Box>
            <Stack direction="row" justifyContent="space-between">
                <Typography fontWeight="bold">Products</Typography>
                <Typography fontWeight="bold">Total</Typography>
            </Stack>
            {selectedProduct.map((product) => (
                <Stack
                    key={product.id + product.variant}
                    direction="row"
                    justifyContent={"space-between"}
                >
                    <Typography>{product.name}</Typography>
                    <Typography fontWeight="bold" color={grey[600]}>
                        ${product.price * product.quantity}
                    </Typography>
                </Stack>
            ))}
            <Stack direction="row" justifyContent="space-between">
                <Typography fontWeight="bold">Total</Typography>
                <Typography fontWeight="bold" color={red[500]}>
                    ${totalPrice()}
                </Typography>
            </Stack>
            <Button variant="contained">Place order</Button>
        </Stack>
    );
}
