// Import Swiper React components
import { Swiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { ReactNode, useRef } from "react";
import { Autoplay, Swiper as SwiperType } from "swiper";
import RoundArrowButton from "../Button/RoundArrowButton";

export interface ISlideProps {
    children?: ReactNode[] | ReactNode;
}

export default function Slide(props: ISlideProps) {
    const { children } = props;
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
                {children}
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
