import { Box, Stack } from "@mui/material";
import { amber, teal } from "@mui/material/colors";
import bbanner1 from "../../../assets/images/banner/banner-1.jpg";
import bbanner2 from "../../../assets/images/banner/banner-2.jpg";
import banner1 from "../../../assets/images/banner/banner1.png";
import banner2 from "../../../assets/images/banner/banner2.png";
import BannerCard from "./BannerCard";

export interface IBannerProps {}

export default function Banner(props: IBannerProps) {
    return (
        <section id="banner">
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
                <BannerCard
                    image={banner1}
                    title={"Summer Fruit"}
                    description={"100% Pure Natural Fruit Juice"}
                    color={teal[50]}
                />
                <BannerCard
                    image={banner2}
                    title={"Dried & Drink Fruits"}
                    description={"With 25% Off All Teas"}
                    color={amber[50]}
                />
            </Stack>
        </section>
    );
}
