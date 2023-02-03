import { Favorite, ShoppingCart } from "@mui/icons-material";
import { Box, Stack, SxProps, Theme, Typography } from "@mui/material";
import { useCartStore } from "../../../stores/cartStore";
import { Product } from "../../../types/Product";
import ProductCardIcon from "./Icon";

export interface IProductCardProps {
    product: Product;
    sx?: SxProps<Theme>;
}

export default function ProductCard(props: IProductCardProps) {
    const { product, sx } = props;
    const { id, image, name, price } = product;
    const { addProduct } = useCartStore();
    const priceFormat = price.toFixed(2);
    return (
        <Box
            sx={{
                transition: "all 1s ease",
            }}
        >
            <Box
                overflow="hidden"
                display="flex"
                position="relative"
                justifyContent="center"
                borderRadius="1rem"
                sx={{
                    ...sx,
                    ".productCardIcons": {
                        bottom: "-100%",
                        transition: "all .4s ease",
                    },
                    ":hover": {
                        ".productCardIcons": {
                            bottom: "1.4rem",
                        },
                    },
                }}
            >
                <img
                    src={image}
                    alt=""
                    style={{
                        display: "block",
                        objectFit: "cover",
                    }}
                />
                <Stack
                    className="productCardIcons"
                    position="absolute"
                    direction="row"
                    spacing={2}
                >
                    <ProductCardIcon
                        icon={<ShoppingCart />}
                        onClick={() =>
                            addProduct({
                                id,
                                name,
                                image,
                                price,
                                quantity: 1,
                                selected: false,
                            })
                        }
                    />
                    <ProductCardIcon icon={<Favorite />} onClick={() => {}} />
                </Stack>
            </Box>
            <Stack alignItems="center" spacing={1} marginTop={2}>
                <Typography fontSize="1.1rem">{name}</Typography>
                <Typography fontSize="1.1rem" fontWeight="bold">
                    ${priceFormat}
                </Typography>
            </Stack>
        </Box>
    );
}
