import { Favorite, ShoppingCart } from "@mui/icons-material";
import { Box, Stack, SxProps, Theme, Typography } from "@mui/material";
import ProductCardIcon from "./Icon";

export interface IProductCardProps {
    url: string;
    name: string;
    price: number;
    description?: string;
    sx?: SxProps<Theme>;
}

export default function ProductCard(props: IProductCardProps) {
    const { url, name, price, sx } = props;
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
                    src={url}
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
                    <ProductCardIcon icon={<ShoppingCart />} />
                    <ProductCardIcon icon={<Favorite />} />
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
