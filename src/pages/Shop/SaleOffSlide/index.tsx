import { Box, useMediaQuery, useTheme } from "@mui/material";
import { grey, lightGreen } from "@mui/material/colors";
import { SwiperSlide } from "swiper/react";
import ProductCard from "../../../components/Card/ProductCard";
import ProductCardSkeleton from "../../../components/Card/ProductCard/ProductCardSkelenton";
import Slide from "../../../components/Slide";
import SectionTitle from "../../../components/Typography/SectionTitle";
import { useProducts } from "../../../hooks/products";
import { getEmptyArray } from "../../../utils/utils";

export interface ISaleOffSlideProps {}

export default function SaleOffSlide(props: ISaleOffSlideProps) {
    const { getHotSaleProductsQuery } = useProducts();
    const { data, isError, isLoading } = getHotSaleProductsQuery();
    const theme = useTheme();
    const matchMd = useMediaQuery(theme.breakpoints.up("md"));
    const matchCustomSm = useMediaQuery("(min-width: 22.5rem)");
    const emptyArray = getEmptyArray(4);
    return (
        <Box>
            <SectionTitle
                title="Sale Off"
                sx={{
                    display: "inline-block",
                    position: "relative",
                    marginBottom: "1rem",
                    ":after": {
                        content: "''",
                        position: "absolute",
                        left: 0,
                        bottom: "-.4rem",
                        height: ".2rem",
                        width: "100%",
                        bgcolor: lightGreen[500],
                    },
                }}
            />
            <Slide
                slidesPerView={matchMd ? 3 : matchCustomSm ? 2 : 1}
                pagination={true}
                sx={{
                    margin: "2rem 0",
                    ".swiper": {
                        paddingBottom: "4rem",
                    },
                }}
                navigation={false}
            >
                {data
                    ? data.map((product) => (
                          <SwiperSlide key={product.id}>
                              <ProductCard product={product} />
                          </SwiperSlide>
                      ))
                    : emptyArray.map((x, i) => (
                          <SwiperSlide key={i}>
                              <ProductCardSkeleton />
                          </SwiperSlide>
                      ))}
            </Slide>
            <Box borderTop={`2px solid ${grey[200]}`} marginBottom="2rem"></Box>
        </Box>
    );
}
