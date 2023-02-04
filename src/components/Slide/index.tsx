// Import Swiper React components
import { Swiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Box, useMediaQuery, useTheme } from "@mui/material";
import React, { ReactNode, useImperativeHandle, useRef } from "react";
import { Autoplay, Swiper as SwiperType } from "swiper";
import RoundArrowButton from "../Button/RoundArrowButton";

export interface ISlideProps {
    children?: ReactNode[] | ReactNode;
    previousElement?: JSX.Element | null;
    nextElement?: JSX.Element | null;
    slidesPerView?: number;
    flex?: string;
    navigation?: boolean;
}

export interface SildeRef {
    slideNext: (
        speed?: number | undefined,
        runCallbacks?: boolean | undefined
    ) => void;
    slidePrev: (
        speed?: number | undefined,
        runCallbacks?: boolean | undefined
    ) => void;
}

export default React.forwardRef<SildeRef, ISlideProps>(function Slide(
    props,
    ref
) {
    const swiperRef = useRef<SwiperType>();
    useImperativeHandle(ref, () => ({
        slideNext: () => swiperRef.current?.slideNext(),
        slidePrev: () => swiperRef.current?.slidePrev(),
    }));
    const theme = useTheme();
    const matchMd = useMediaQuery(theme.breakpoints.up("md"));
    const matchSm = useMediaQuery(theme.breakpoints.up("sm"));
    const matchSx = useMediaQuery("(min-width: 25rem)");
    const {
        navigation = true,
        children,
        slidesPerView = matchMd ? 4 : matchSm ? 3 : matchSx ? 2 : 1,
    } = props;

    const handleNextSlide = () => swiperRef.current?.slideNext();
    const handlePreviousSlide = () => swiperRef.current?.slidePrev();
    const slidePreviousElement = navigation && (
        <RoundArrowButton
            onClick={handleNextSlide}
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
    );

    const slideNextElement = navigation && (
        <RoundArrowButton
            onClick={handlePreviousSlide}
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
    );

    return (
        <Box position="relative">
            <Swiper
                speed={1000}
                slidesPerView={slidesPerView}
                loop={true}
                spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                modules={[Autoplay]}
            >
                {children}
            </Swiper>
            {slidePreviousElement}
            {slideNextElement}
        </Box>
    );
});
