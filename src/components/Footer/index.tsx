import { Facebook, Instagram, Pinterest, Twitter } from "@mui/icons-material";
import {
    Box,
    Button,
    Grid,
    List,
    Stack,
    TextField,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import { blueGrey, grey, lightGreen } from "@mui/material/colors";
import { Container } from "@mui/system";
import logo from "../../assets/images/logo.png";
import Icon from "../Icon";
import payment from "../../assets/images/payment-item.png";

export interface IFooterProps {}

export default function Footer(props: IFooterProps) {
    const theme = useTheme();
    const matchSm = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <footer style={{ backgroundColor: blueGrey[50], marginTop: "4rem" }}>
            <Container maxWidth="lg">
                <Grid
                    container
                    columnSpacing={4}
                    rowSpacing={4}
                    marginRight="0"
                    marginBottom="2rem"
                >
                    <Grid item xs={12} sm={6} md={4} marginBottom="2rem">
                        <Box>
                            <img src={logo} alt="" />
                        </Box>
                        <List>
                            <li>Address: 60-49 Road 11378 New York</li>
                            <li>Phone: +65 11.188.888</li>
                            <li>Email: hello@colorlib.com</li>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography fontWeight="bold">Useful Links</Typography>
                        <Stack
                            direction="row"
                            spacing="4rem"
                            sx={{
                                li: {
                                    fontSize: ".9rem",
                                },
                            }}
                        >
                            <List>
                                <li>About Us</li>
                                <li>About Our Shop</li>
                                <li>Secure Shopping</li>
                                <li>Delivery infomation</li>
                                <li>Privacy Policy</li>
                                <li>Our Sitemap</li>
                            </List>
                            <List>
                                <li>Who We Are</li>
                                <li>Our Services</li>
                                <li>Projects</li>
                                <li>Contact</li>
                                <li>Innovation</li>
                                <li>Testimonials</li>
                            </List>
                        </Stack>
                    </Grid>
                    <Grid item sm={12} md={4} width="100%">
                        <Typography fontWeight="bold">Useful Links</Typography>
                        <Typography fontSize=".9rem">
                            Get E-mail updates about our latest shop and special
                            offers.
                        </Typography>
                        <Stack
                            direction={{ xs: "column", sm: "row" }}
                            spacing={{ xs: 2, sm: 0.5 }}
                            alignItems="center"
                            margin="2rem 0"
                        >
                            <TextField
                                placeholder="Enter your mail"
                                size="small"
                                fullWidth
                                InputProps={{
                                    sx: { border: "none" },
                                }}
                                sx={{
                                    borderRadius: ".4rem",
                                    backgroundColor: "white",
                                    "& fieldset": { border: "none" },
                                }}
                            />
                            <Button
                                variant="contained"
                                sx={{
                                    width: matchSm ? "100%" : "auto",
                                }}
                            >
                                Subcribe
                            </Button>
                        </Stack>
                        <Stack direction="row" spacing={2}>
                            <Icon icon={<Facebook />} />
                            <Icon icon={<Instagram />} />
                            <Icon icon={<Twitter />} />
                            <Icon icon={<Pinterest />} />
                        </Stack>
                    </Grid>
                </Grid>
                <Box borderBottom={`2px solid ${grey[300]}`}></Box>
                <Stack
                    padding="1rem 0 2rem 0"
                    direction={{ xs: "column", sm: "row" }}
                    justifyContent={{ xs: "center", sm: "space-between" }}
                    alignItems="center"
                    spacing="1rem"
                >
                    <Typography>Copyright ©2023 All rights reserved</Typography>
                    <Box>
                        <img src={payment} alt="" />
                    </Box>
                </Stack>
            </Container>
        </footer>
    );
}
