// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import styles from "./styles.module.scss";
// import required modules
import {
    ArrowBackIos,
    ArrowBackIosNew,
    ArrowForwardIos,
} from "@mui/icons-material";
import { Box, Button, useMediaQuery, useTheme } from "@mui/material";
import { useRef } from "react";
import { Autoplay, Swiper as SwiperType } from "swiper";
import CategoryCard from "../Card/CategoryCard";
import RoundArrowButton from "../Button/RoundArrowButton";
const items: { url: string; title: string }[] = Array(5)
    .fill(undefined)
    .map((value, index) => ({
        title: "Fresh Fruits",
        url: `/images/categories/cat-${index + 1}.jpg`,
    }));

export default function Slide() {
    const swiperRef = useRef<SwiperType>();
    const theme = useTheme();
    const matchMd = useMediaQuery(theme.breakpoints.up("md"));
    const matchSm = useMediaQuery(theme.breakpoints.up("sm"));
    const matchSx = useMediaQuery("(min-width: 25rem)");
    return (
        <Box position="relative">
            <Swiper
                slidesPerView={matchMd ? 4 : matchSm ? 3 : matchSx ? 2 : 1}
                spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false,
                }}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                {items.map((item, index) => (
                    <SwiperSlide key={item.url}>
                        <CategoryCard url={item.url} title={item.title} />
                    </SwiperSlide>
                ))}
                {items.map((item, index) => (
                    <SwiperSlide key={item.url + "" + index}>
                        <CategoryCard url={item.url} title={item.title} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <RoundArrowButton
                onClick={() => swiperRef.current?.slideNext()}
                sx={{
                    bgcolor: "white",
                    position: "absolute",
                    top: "50%",
                    right: 0,
                    zIndex: 1,
                    translate: "50% -50%",
                    rotate: "180deg",
                    display: matchSm ? "block" : "none",
                }}
            />
            <RoundArrowButton
                onClick={() => swiperRef.current?.slidePrev()}
                sx={{
                    bgcolor: "white",
                    position: "absolute",
                    top: "50%",
                    left: 0,
                    zIndex: 1,
                    translate: "-50% -50%",
                    display: matchSm ? "block" : "none",
                }}
            />
        </Box>
    );
}
