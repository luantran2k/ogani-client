import { ArrowBackIosNew } from "@mui/icons-material";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useRef } from "react";
import { SwiperSlide } from "swiper/react";
import RoundArrowButton from "../../../../components/Button/RoundArrowButton";
import CategoryCard from "../../../../components/Card/CategoryCard";
import Slide, { SildeRef } from "../../../../components/Slide";
import { Product } from "../../../../types/Product";
import { items } from "../../Category";
import { Swiper as SwiperType } from "swiper";
import LatestProductCard from "./Card";

const chunkArray = <T,>(array: T[], size: number): T[][] => {
    const length = array.length;
    const res: T[][] = [];
    let index: number = size;
    for (let i = 0; i < length; i += size) {
        res.push(array.slice(i, index));
        index += size;
    }
    return res;
};
export interface ILatestProductSlideProps {
    products: Product[];
}

export default function LatestProductSlide(props: ILatestProductSlideProps) {
    const title = "Latest product";
    const { products } = props;
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
                        {groupedProduct.map((product) => (
                            <LatestProductCard
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </SwiperSlide>
                ))}
            </Slide>
        </Box>
    );
}