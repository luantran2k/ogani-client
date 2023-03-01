import { Add, Delete, Remove } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { ProductInfo, ProductVariant } from "../../../../schemas/product";
import { useCartStore } from "../../../../stores/cartStore";

export interface IAddToCartProps {
    productInfo: ProductInfo;
    productVariants: ProductVariant[];
    variantSelectedIndex: number;
}

export default function AddToCart(props: IAddToCartProps) {
    const { productInfo, productVariants, variantSelectedIndex } = props;
    const [numberOfItems, setNumberOfItems] = useState(1);
    const { addProduct } = useCartStore();
    const handleAddToCart = () => {
        const variant = productVariants[variantSelectedIndex];
        addProduct({
            id: productInfo.id,
            image: productInfo.images[0],
            name: productInfo.name,
            price: variant.price,
            quantity: numberOfItems,
            variant: variant.variant,
            selected: false,
            salePercent: variant.salePercent,
            variantId: variant.id as number,
        });
    };
    return (
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Stack direction="row" alignItems="center" spacing={2}>
                <Button
                    variant="outlined"
                    onClick={() => setNumberOfItems((count) => count - 1)}
                    disabled={numberOfItems === 1}
                >
                    <Remove />
                </Button>
                <Typography fontSize="1.2rem">{numberOfItems}</Typography>
                <Button
                    variant="outlined"
                    onClick={() => setNumberOfItems((count) => count + 1)}
                >
                    <Add />
                </Button>
            </Stack>
            <Button variant="contained" onClick={handleAddToCart}>
                Add to Card
            </Button>
        </Stack>
    );
}
