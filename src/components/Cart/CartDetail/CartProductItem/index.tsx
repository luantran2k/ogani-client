import { Add, Remove } from "@mui/icons-material";
import {
    Stack,
    Checkbox,
    Box,
    Typography,
    SxProps,
    Theme,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import { lightGreen } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { ProductCart } from "../../../../schemas/product";
import { getLastPrice, useCartStore } from "../../../../stores/cartStore";

export interface ICardProductItemProps {
    product: ProductCart;
}
const ButtonStyle: SxProps<Theme> = {
    cursor: "pointer",
    borderRadius: "50%",
    color: lightGreen[600],
    transition: "all .3s ease",
    ":hover": {
        backgroundColor: lightGreen[100],
    },
    ":active": {
        color: "white",
        backgroundColor: lightGreen[600],
    },
};

export default function CardProductItem(props: ICardProductItemProps) {
    const { product } = props;
    const theme = useTheme();
    const matchSm = useMediaQuery(theme.breakpoints.down("sm"));
    const { increaseQuantity, decreaseQuantity, toggleSelectProduct } =
        useCartStore();
    const {
        id,
        name,
        image,
        price,
        salePercent,
        selected,
        quantity,
        variant,
        variantId,
    } = product;

    const lastPrice = getLastPrice({
        price,
        salePercent,
    });
    return (
        <Stack
            spacing={2}
            direction={{ xs: "column", sm: "row" }}
            paddingRight={matchSm ? "1rem" : 0}
        >
            {!matchSm && (
                <Checkbox
                    checked={selected}
                    onClick={() => toggleSelectProduct(id, variantId)}
                />
            )}
            <Stack direction="row" spacing={2}>
                <Box width="4rem" borderRadius=".6rem" overflow="hidden">
                    <Link to={"/products/" + id}>
                        <img
                            src={image}
                            alt=""
                            style={{
                                display: "block",
                                width: "100%",
                                objectFit: "cover",
                            }}
                        />
                    </Link>
                </Box>
                <Stack justifyContent="space-around">
                    <Link to={"/products/" + id}>
                        <Typography
                            fontWeight="bold"
                            whiteSpace="nowrap"
                            overflow="hidden"
                            textOverflow="ellipsis"
                            maxWidth="16rem"
                        >
                            {name}
                        </Typography>
                    </Link>
                    <Typography fontSize="0.8rem">
                        Variant: {variant}
                    </Typography>
                    <Stack direction="row" spacing={2}>
                        <Typography fontSize=".8rem">
                            Price: {lastPrice}
                        </Typography>
                        <Typography fontSize=".8rem">
                            Quantity: {quantity}
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
            <Stack
                justifyContent="space-around"
                alignItems="center"
                direction={{ xs: "row", sm: "column" }}
                marginLeft={matchSm ? 0 : "auto !important"}
                paddingRight={matchSm ? 0 : "1rem"}
            >
                {matchSm && (
                    <Checkbox
                        checked={selected}
                        onClick={() => toggleSelectProduct(id, variantId)}
                    />
                )}
                <Add
                    sx={ButtonStyle}
                    onClick={() => increaseQuantity(id, variantId)}
                />
                <Remove
                    sx={ButtonStyle}
                    onClick={() => decreaseQuantity(id, variantId)}
                />
            </Stack>
        </Stack>
    );
}
