import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { grey, lightGreen } from "@mui/material/colors";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import ElasticLoading from "../../../components/Loading/ElasticLoading";
import Slide from "../../../components/Slide";
import Socials from "../../../components/TopBar/Socials";
import { useProducts } from "../../../hooks/products";
import { getLastPrice, useCartStore } from "../../../stores/cartStore";
import AddToCart from "./AddToCart";

export interface IProductDetailPageProps {}

export default function ProductDetailPage(props: IProductDetailPageProps) {
    const [variantIndex, setVariantIndex] = useState(0);
    const { id } = useParams();
    const { getProductQuery } = useProducts();
    const { data, isLoading, isError } = getProductQuery(Number(id));
    const price = data?.productVariants[variantIndex].price;
    const lastPrice = getLastPrice({
        price: price || 0,
        salePercent: data?.productVariants[variantIndex].salePercent,
    });

    const [imageDisplay, setImageDisplay] = useState("");
    useEffect(() => {
        setImageDisplay(data?.product.images[0] || "");
    }, [data]);
    if (isLoading) {
        return (
            <Container maxWidth="lg">
                <ElasticLoading />
            </Container>
        );
    }
    if (isError) {
        return (
            <Container maxWidth="lg">
                <Typography color="error">Error</Typography>
            </Container>
        );
    }

    return (
        <Container maxWidth="lg">
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Box height="28rem" overflow="hidden" borderRadius="1rem">
                        <img
                            src={imageDisplay}
                            alt={data?.product.name}
                            className="image-cover"
                        />
                    </Box>

                    <Slide navigation={false} sx={{ margin: "1rem 0" }}>
                        {data?.product.images.map((image, index) => (
                            <SwiperSlide key={image} style={{ width: "25%" }}>
                                <Box
                                    height={{
                                        xs: "6rem",
                                    }}
                                    sx={{
                                        cursor: "pointer",
                                        borderRadius: ".4rem",
                                        overflow: "hidden",
                                    }}
                                    onClick={() => setImageDisplay(image)}
                                >
                                    <img
                                        src={image}
                                        alt={data?.product.name}
                                        className="image-cover"
                                    />
                                </Box>
                            </SwiperSlide>
                        ))}
                    </Slide>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" fontWeight="bold">
                        {data?.product.name}
                    </Typography>
                    <Typography>Review</Typography>
                    <Typography
                        fontSize="1.3rem"
                        margin="1rem 0"
                        color="error"
                        sx={{
                            span: {
                                display:
                                    price !== lastPrice ? "inline" : "none",
                                color: grey[400],
                            },
                            ".disablePrice": {
                                textDecoration: "line-through",
                            },
                        }}
                    >
                        <span className="disablePrice">
                            ${data.productVariants[variantIndex].price}
                        </span>
                        <span> - </span>${lastPrice}
                    </Typography>
                    <Stack
                        direction="row"
                        marginBottom="1rem"
                        spacing={2}
                        alignItems="center"
                    >
                        <Typography>Variants: </Typography>
                        {data?.productVariants.map((variant, index) => {
                            return (
                                <Typography
                                    key={index}
                                    sx={{
                                        cursor: "pointer",
                                        bgcolor:
                                            index === variantIndex
                                                ? lightGreen[100]
                                                : grey[100],
                                        padding: ".4rem 1rem",
                                        borderRadius: ".4rem",
                                    }}
                                    onClick={() => setVariantIndex(index)}
                                >
                                    {variant.variant}
                                </Typography>
                            );
                        })}
                    </Stack>
                    <Typography marginBottom="1rem">
                        {data?.product.description}
                    </Typography>
                    <AddToCart
                        productInfo={data.product}
                        productVariants={data.productVariants}
                        variantSelectedIndex={variantIndex}
                    />
                    <Stack direction="row" spacing={2} margin="2rem 0">
                        <Typography>Share on</Typography>
                        <Socials />
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    );
}
