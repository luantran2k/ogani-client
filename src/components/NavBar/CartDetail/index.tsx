import { Add, Remove } from "@mui/icons-material";
import {
    Box,
    Button,
    Checkbox,
    Stack,
    SxProps,
    Theme,
    Typography,
} from "@mui/material";
import { lightGreen } from "@mui/material/colors";
import { useCartStore } from "../../../stores/cartStore";

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

    const isSelectedAll = products.every(
        (product) => product.selected === true
    );
    return (
        <Box padding="1rem">
            <Stack
                maxHeight="60vh"
                minWidth="28rem"
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
                                <Stack direction="row" key={id} spacing={2}>
                                    <Checkbox
                                        checked={selected}
                                        onClick={() => toggleSelectProduct(id)}
                                    />
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
                                    <Stack
                                        justifyContent="space-around"
                                        marginLeft="auto !important"
                                    >
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
            <Stack direction="row" marginTop={2} alignItems="center">
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
                <Typography marginRight="2rem">
                    <span style={{ fontWeight: "bold" }}>Total price: </span>
                    {totalPrice()}
                </Typography>
                <Button
                    size="small"
                    variant="outlined"
                    onClick={() => removeProduct()}
                    sx={{ marginLeft: "auto" }}
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
        </Box>
    );
}
