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
            <Box>
                <img src={image} alt="" />
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
