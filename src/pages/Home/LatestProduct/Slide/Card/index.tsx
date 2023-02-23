import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";
import Price from "../../../../../components/Typography/Price";
import { Product, ProductCardType } from "../../../../../schemas/product";

export interface ILatestProductCardProps {
    product: ProductCardType;
}

export default function LatestProductCard(props: ILatestProductCardProps) {
    const { product } = props;
    const { id, name, images, variants } = product;
    return (
        <Stack direction="row" spacing={2}>
            <Box
                borderRadius=".4rem"
                height="6rem"
                width="6rem"
                overflow="hidden"
            >
                <Link to={"/products/" + id}>
                    <img
                        src={images[0]}
                        alt=""
                        style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "cover",
                        }}
                    />
                </Link>
            </Box>
            <Stack>
                <Link to={"/products/" + id}>
                    <Typography fontSize="1.1rem">{name}</Typography>
                </Link>
                <Price variants={variants} />
            </Stack>
        </Stack>
    );
}
