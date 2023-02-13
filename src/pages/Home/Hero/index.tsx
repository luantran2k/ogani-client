import {
    Box,
    Button,
    Stack,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import { lightGreen, grey } from "@mui/material/colors";
import heroImage from "../../../assets/images/hero/banner.jpg";
import { products } from "../FeaturedProduct/ProductList";
import HotSaleCard from "./HotSaleCard";

export interface IHeroSectionProps {}

export default function HeroSection(props: IHeroSectionProps) {
    const theme = useTheme();
    const matchMd = useMediaQuery(theme.breakpoints.up("md"));
    const matchSm = useMediaQuery(theme.breakpoints.up("sm"));
    const productsList = products
        .filter((product) => product.salePercent)
        .sort((a, b) => {
            const leftCondition = a.salePercent || 0;
            const rightCondition = b.salePercent || 0;
            return rightCondition - leftCondition;
        });

    return (
        <section id="hero">
            <Stack direction="row" spacing={matchMd ? 4 : 0}>
                <Box flex={"0 0 25%"} display={matchMd ? "block" : "none"}>
                    <Typography fontWeight="bold" fontSize="1.4rem">
                        Hot sale
                    </Typography>
                    <Stack
                        spacing={1}
                        overflow="auto"
                        maxHeight="26rem"
                        className="hideScrollbar"
                    >
                        {productsList.length == 0 ? (
                            <Typography textAlign="center">Empty</Typography>
                        ) : (
                            productsList.map((product) => (
                                <HotSaleCard
                                    key={product.id}
                                    product={product}
                                />
                            ))
                        )}
                    </Stack>
                </Box>
                <Box
                    flex="1"
                    borderRadius="1rem"
                    overflow="hidden"
                    position="relative"
                >
                    <Stack
                        spacing={2}
                        maxWidth={matchSm ? "36%" : "100%"}
                        position="absolute"
                        top="50%"
                        left="8%"
                        sx={{ transform: "translateY(-50%)" }}
                    >
                        <Typography
                            textTransform="uppercase"
                            fontWeight="bold"
                            letterSpacing=".2rem"
                            color={lightGreen[800]}
                        >
                            Fruit Fresh
                        </Typography>
                        <Typography
                            fontWeight="bold"
                            fontSize="2.8rem"
                            lineHeight="1"
                            variant="h1"
                        >
                            Vegetable 100% Organic
                        </Typography>
                        <Typography
                            variant="caption"
                            fontSize="1rem"
                            color={grey[600]}
                        >
                            Free Pickup and Delivery Available
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{
                                alignSelf: "start",
                                marginTop: "2rem",
                                padding: ".4rem 2rem",
                                fontWeight: "bold",
                                letterSpacing: ".15rem",
                            }}
                        >
                            Shop now
                        </Button>
                    </Stack>
                    <img
                        src={heroImage}
                        alt="hero-image"
                        height="100%"
                        style={{
                            filter: matchMd ? "" : "brightness(0.95) blur(2px)",
                            position: "relative",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            zIndex: -1,
                        }}
                    />
                </Box>
            </Stack>
        </section>
    );
}
