import { Box, Stack, Typography } from "@mui/material";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import RoundArrowButton from "../../../../components/Button/RoundArrowButton";
import Slide, { SildeRef } from "../../../../components/Slide";
import { Product, ProductCardType } from "../../../../schemas/product";
import { chunkArray } from "../../../../utils/utils";
import LatestProductCard from "./Card";

export interface ILatestProductSlideProps {
    title: string;
    products?: ProductCardType[];
}

export default function LatestProductSlide(props: ILatestProductSlideProps) {
    const { title } = props;
    const { products = [] } = props;
    const groupedProducts = chunkArray(products, 3);
    const slideRef = useRef<SildeRef>(null);
    return (
        <Box>
            <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                marginBottom={6}
            >
                <Typography
                    fontWeight="bold"
                    fontSize="1.5rem"
                    marginRight="auto"
                >
                    {title}
                </Typography>
                <RoundArrowButton
                    onClick={() => slideRef.current?.slidePrev()}
                />
                <RoundArrowButton
                    onClick={() => slideRef.current?.slideNext()}
                    sx={{ rotate: "180deg" }}
                />
            </Stack>
            <Slide slidesPerView={1} ref={slideRef} navigation={false}>
                {groupedProducts.map((groupedProduct, index) => (
                    <SwiperSlide key={index}>
                        <Stack spacing={2}>
                            {groupedProduct.map((product) => (
                                <LatestProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                        </Stack>
                    </SwiperSlide>
                ))}
            </Slide>
        </Box>
    );
}
