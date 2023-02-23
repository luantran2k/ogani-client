import { Box, Stack, Typography } from "@mui/material";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import RoundArrowButton from "../../../../components/Button/RoundArrowButton";
import Slide, { SildeRef } from "../../../../components/Slide";
import { Product, ProductCardType } from "../../../../schemas/product";
import { chunkArray, getEmptyArray } from "../../../../utils/utils";
import LatestProductCard from "./Card";
import LatestProductCardSkeleton from "./Card/LatestProductCardSkeleton";

export interface ILatestProductSlideProps {
    title: string;
    products?: ProductCardType[];
}

export default function LatestProductSlide(props: ILatestProductSlideProps) {
    const { title } = props;
    const slideRef = useRef<SildeRef>(null);
    const { products } = props;
    const emptyArray = getEmptyArray(3);
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
                {products
                    ? chunkArray(products, 3).map((groupedProduct, index) => (
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
                      ))
                    : emptyArray.map((x, i) => (
                          <SwiperSlide key={i}>
                              <Stack spacing={2}>
                                  <LatestProductCardSkeleton />
                                  <LatestProductCardSkeleton />
                                  <LatestProductCardSkeleton />
                              </Stack>
                          </SwiperSlide>
                      ))}
            </Slide>
        </Box>
    );
}
