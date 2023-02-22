import { Box, Stack, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import Price from "../../../../components/Typography/Price";
import { Product, ProductCardType } from "../../../../schemas/product";
import { getMinMax } from "../../../../utils/utils";

export interface IHotSaleCardProps {
    product: ProductCardType;
}

export default function HotSaleCard(props: IHotSaleCardProps) {
    const { product } = props;
    const { id, name, variants, images } = product;
    const { min, max } = getMinMax(variants.map((v) => v.price || 0));
    const maxSalePercent = Math.max(...variants.map((v) => v.salePercent || 0));
    const navigate = useNavigate();
    return (
        <Stack
            direction="row"
            spacing={1}
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/products/" + id)}
        >
            <Box
                width="6rem"
                height="6rem"
                overflow="hidden"
                borderRadius="1rem"
            >
                <img
                    src={images[0]}
                    alt=""
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />
            </Box>
            <Stack>
                <Stack>
                    <Typography fontWeight={600}>{name}</Typography>
                    {maxSalePercent && (
                        <Typography>
                            Sale:{" "}
                            <span
                                style={{ color: red[700], fontWeight: "bold" }}
                            >
                                {maxSalePercent}%
                            </span>
                        </Typography>
                    )}
                    <Price variants={variants} />
                </Stack>
            </Stack>
        </Stack>
    );
}
