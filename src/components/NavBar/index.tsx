import { ArrowDropDown } from "@mui/icons-material";
import { Box, Container, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { NavLink } from "react-router-dom";
import logoImage from "../../assets/images/logo.png";
import MouseOverMenu from "../Menu/MouseOverMenu";
import PopupMenu from "../Menu/PopupMenu";
import Cart from "./Cart";
import MobileNav from "./MobileNav";
import styles from "./styles.module.scss";

export interface INavbarProps {}

export default function Navbar(props: INavbarProps) {
    return (
        <Container
            maxWidth="lg"
            sx={{
                backgroundColor: "white",
                margin: "1rem auto",
                position: "sticky",
                top: 0,
                zIndex: 3,
            }}
        >
            <Stack
                direction="row"
                spacing={4}
                alignItems="center"
                padding=".4rem 0"
            >
                <Box flex="0 0 25%" display="flex" alignItems="center">
                    <img src={logoImage} alt="web-logo" />
                </Box>
                <Stack direction="row" flex={1}>
                    <Stack direction="row" className={styles.navs} flex={1}>
                        <NavLink
                            to={"/"}
                            className={({ isActive }) =>
                                isActive ? styles.active : ""
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to={"/shop"}
                            className={({ isActive }) =>
                                isActive ? styles.active : ""
                            }
                        >
                            shop
                        </NavLink>
                        <NavLink
                            to={"/blogs"}
                            className={({ isActive }) =>
                                isActive ? styles.active : ""
                            }
                        >
                            Blog
                        </NavLink>
                        <NavLink
                            to={"/contact"}
                            className={({ isActive }) =>
                                isActive ? styles.active : ""
                            }
                        >
                            Contact
                        </NavLink>
                    </Stack>
                    <Stack
                        className={styles.options}
                        direction="row"
                        alignItems="center"
                    >
                        <Cart />
                    </Stack>
                </Stack>
                <MobileNav />
            </Stack>
        </Container>
    );
}
