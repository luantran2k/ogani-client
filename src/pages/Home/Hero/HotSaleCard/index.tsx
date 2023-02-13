import { Box, Stack, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import Price from "../../../../components/Typography/Price";
import { Product } from "../../../../types/Product";

export interface IHotSaleCardProps {
    product: Product;
}

export default function HotSaleCard(props: IHotSaleCardProps) {
    const { product } = props;
    const { id, name, price, salePercent, image } = product;
    return (
        <Stack direction="row" spacing={1}>
            <Box
                width="6rem"
                height="6rem"
                overflow="hidden"
                borderRadius="1rem"
            >
                <img
                    src={image}
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
                    {salePercent && (
                        <Typography>
                            Sale:{" "}
                            <span
                                style={{ color: red[700], fontWeight: "bold" }}
                            >
                                {salePercent}%
                            </span>
                        </Typography>
                    )}
                    <Price
                        fontSize="1rem"
                        price={price}
                        salePercent={salePercent}
                    />
                </Stack>
            </Stack>
        </Stack>
    );
}
