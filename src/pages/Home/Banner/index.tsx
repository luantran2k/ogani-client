import { Box, Stack } from "@mui/material";
import banner1 from "../../../assets/images/banner/banner-1.jpg";
import banner2 from "../../../assets/images/banner/banner-2.jpg";

export interface IBannerProps {}

export default function Banner(props: IBannerProps) {
    return (
        <Stack
            margin="6rem 0"
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            sx={{
                img: {
                    display: "block",
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    objectPosition: "center center",
                },
            }}
        >
            <Box className="homeBanner" overflow="hidden" borderRadius="1rem">
                <img src={banner1} alt="banner-1" />
            </Box>
            <Box className="homeBanner" overflow="hidden" borderRadius="1rem">
                <img src={banner2} alt="banner-2" />
            </Box>
        </Stack>
    );
}
