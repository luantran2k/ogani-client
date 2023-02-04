import { Add, Remove } from "@mui/icons-material";
import {
    Box,
    Button,
    Checkbox,
    Stack,
    SxProps,
    Theme,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import { lightGreen } from "@mui/material/colors";
import { useCartStore } from "../../../stores/cartStore";

export const hideYScrollbar = {};

export interface ICartDetailProps {}

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

export default function CartDetail(props: ICartDetailProps) {
    const {
        products,
        totalPrice,
        increaseQuantity,
        decreaseQuantity,
        removeProduct,
        toggleSelectProduct,
        selectAll,
        unSelectAll,
    } = useCartStore();
    const theme = useTheme();
    const matchSm = useMediaQuery(theme.breakpoints.down("sm"));

    const isSelectedAll = products.every(
        (product) => product.selected === true
    );
    return (
        <Box padding="1rem">
            <Stack
                maxHeight="60vh"
                minWidth={matchSm ? 0 : "26rem"}
                overflow={products.length === 0 ? "hidden" : "auto"}
                spacing={1}
            >
                {products.length === 0 ? (
                    <Typography
                        minHeight="2rem"
                        textAlign="center"
                        fontSize="1.2rem"
                        fontWeight="500"
                    >
                        Empty
                    </Typography>
                ) : (
                    products.map(
                        ({ id, image, name, price, quantity, selected }) => {
                            return (
                                <Stack
                                    key={id}
                                    spacing={2}
                                    direction={{ xs: "column", sm: "row" }}
                                    paddingRight={matchSm ? "1rem" : 0}
                                >
                                    {!matchSm && (
                                        <Checkbox
                                            checked={selected}
                                            onClick={() =>
                                                toggleSelectProduct(id)
                                            }
                                        />
                                    )}
                                    <Stack direction="row" spacing={2}>
                                        <Box
                                            width="4rem"
                                            borderRadius=".6rem"
                                            overflow="hidden"
                                        >
                                            <img
                                                src={image}
                                                alt=""
                                                style={{
                                                    display: "block",
                                                    width: "100%",
                                                    objectFit: "cover",
                                                }}
                                            />
                                        </Box>
                                        <Stack justifyContent="space-around">
                                            <Typography
                                                fontWeight="bold"
                                                whiteSpace="nowrap"
                                                overflow="hidden"
                                                textOverflow="ellipsis"
                                                maxWidth="16rem"
                                            >
                                                {name}
                                            </Typography>
                                            <Stack direction="row" spacing={2}>
                                                <Typography fontSize=".8rem">
                                                    Price: {price}
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
                                        marginLeft={
                                            matchSm ? 0 : "auto !important"
                                        }
                                        paddingRight={matchSm ? 0 : "1rem"}
                                    >
                                        {matchSm && (
                                            <Checkbox
                                                checked={selected}
                                                onClick={() =>
                                                    toggleSelectProduct(id)
                                                }
                                            />
                                        )}
                                        <Add
                                            sx={ButtonStyle}
                                            onClick={() => increaseQuantity(id)}
                                        />
                                        <Remove
                                            sx={ButtonStyle}
                                            onClick={() => decreaseQuantity(id)}
                                        />
                                    </Stack>
                                </Stack>
                            );
                        }
                    )
                )}
            </Stack>
            <Stack
                direction={{ xs: "column", sm: "row" }}
                justifyContent="space-between"
                marginTop={2}
                spacing={2}
                alignItems="center"
            >
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                >
                    {products.length > 0 && (
                        <Checkbox
                            checked={isSelectedAll}
                            onClick={() => {
                                if (isSelectedAll) {
                                    unSelectAll();
                                } else {
                                    selectAll();
                                }
                            }}
                        />
                    )}
                    <Typography>
                        <span style={{ fontWeight: "bold" }}>
                            Total price:{" "}
                        </span>
                        {totalPrice()}
                    </Typography>
                </Stack>
                <Stack direction="row">
                    <Button
                        size="small"
                        variant="outlined"
                        onClick={() => removeProduct()}
                    >
                        Remove
                    </Button>
                    <Button
                        size="small"
                        variant="contained"
                        sx={{ marginLeft: ".4rem" }}
                    >
                        Checkout
                    </Button>
                </Stack>
            </Stack>
        </Box>
    );
}
