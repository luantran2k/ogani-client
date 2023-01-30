import {
    Box,
    Button,
    Container,
    Stack,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import { lightGreen } from "@mui/material/colors";
import categoryImage1 from "../../assets/images/categories/cat-1.jpg";
import heroImage from "../../assets/images/hero/banner.jpg";
import CategoryCard from "../../components/Card/CategoryCard";

export interface IHomePageProps {}

export default function HomePage(props: IHomePageProps) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));
    const matchSm = useMediaQuery(theme.breakpoints.up("sm"));
    return (
        <Container maxWidth="lg">
            <section id="hero">
                <Stack direction="row" spacing={matches ? 4 : 0}>
                    <Box flex={matches ? "0 0 25%" : ""}></Box>
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
                            <Typography variant="caption">
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
                                filter: matches
                                    ? ""
                                    : "brightness(0.95) blur(2px)",
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
            <section id="categories">
                <CategoryCard url={categoryImage1} title="Fresh Fruit" />
            </section>
        </Container>
    );
}
