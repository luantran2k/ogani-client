import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { Product } from "../../../../../types/Product";

export interface ILatestProductCardProps {
    product: Product;
}

export default function LatestProductCard(props: ILatestProductCardProps) {
    const { product } = props;
    const { id, name, image, price } = product;
    return (
        <Stack direction="row" spacing={2}>
            <Box borderRadius="1rem" overflow="hidden">
                <img
                    src={image}
                    alt=""
                    style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                    }}
                />
            </Box>
            <Stack>
                <Typography fontSize="1.1rem">{name}</Typography>
                <Typography fontSize="1.1rem" fontWeight="bold">
                    ${price}
                </Typography>
            </Stack>
        </Stack>
    );
}
