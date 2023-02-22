import { Favorite, ShoppingCart } from "@mui/icons-material";
import { Box, Button, Stack, SxProps, Theme, Typography } from "@mui/material";
import { grey, lightGreen, red } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { Product, ProductCardType } from "../../../schemas/product";
import {
    getLastPrice,
    getSalePercent,
    useCartStore,
} from "../../../stores/cartStore";
import { getMinMax } from "../../../utils/utils";
import RoundIcon from "../../Icon";
import Price from "../../Typography/Price";

export interface IProductCardProps {
    product: ProductCardType;
    sx?: SxProps<Theme>;
}

export default function ProductCard(props: IProductCardProps) {
    const { product, sx } = props;
    const { addProduct } = useCartStore();
    const { id, images, name, variants } = product;

    //Get max sale percent
    const salePercent: number = variants.reduce(
        (salePercent, currentVariant) => {
            if (!currentVariant.salePercent) {
                return salePercent;
            }
            return salePercent < currentVariant.salePercent
                ? currentVariant.salePercent
                : salePercent;
        },
        0
    );
    const salePercentDisplay = getSalePercent(salePercent);
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
                <Typography
                    position="absolute"
                    top="1rem"
                    left="1rem"
                    height="2.8rem"
                    width="2.8rem"
                    display={salePercentDisplay ? "flex" : "none"}
                    alignItems="center"
                    justifyContent="center"
                    fontSize=".8rem"
                    color="white"
                    borderRadius="50%"
                    bgcolor={red[500]}
                >
                    -{salePercentDisplay}%
                </Typography>
                <img
                    src={images[0]}
                    alt=""
                    style={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />
                <Stack
                    className="productCardIcons"
                    position="absolute"
                    direction="row"
                    spacing={2}
                >
                    <RoundIcon
                        icon={<ShoppingCart />}
                        rotate={true}
                        onClick={() =>
                            addProduct({
                                id: product.id,
                                image: images[0],
                                name: product.name,
                                price: 100,
                                salePercent: 20,
                                quantity: 1,
                                variant: "",
                                selected: false,
                            })
                        }
                    />
                    <RoundIcon
                        icon={<Favorite />}
                        onClick={() => {}}
                        rotate={true}
                    />
                </Stack>
            </Box>
            <Stack alignItems="center" spacing={1} marginTop={2}>
                <Link to={"/products/" + id} style={{ textDecoration: "none" }}>
                    <Typography
                        fontSize="1.1rem"
                        sx={{
                            color: grey[900],

                            cursor: "pointer",
                            ":hover": {
                                color: lightGreen[800],
                            },
                        }}
                    >
                        {name}
                    </Typography>
                </Link>
                <Price variants={variants} />
            </Stack>
        </Box>
    );
}
