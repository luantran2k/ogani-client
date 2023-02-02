import { Menu } from "@mui/icons-material";
import { Box, Button, Drawer, List, Stack } from "@mui/material";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import SearchBarPhone from "../../SearchBar/Phone";
import TopBarEmail from "../../TopBar/Email";
import TopBarInfo from "../../TopBar/Infos";
import Language from "../../TopBar/Language";
import Login from "../../TopBar/Login";
import Socials from "../../TopBar/Socials";
import Cart from "../Cart";
import styles from "./styles.module.scss";

export interface IMobileNavProps {}

export default function MobileNav(props: IMobileNavProps) {
    const [open, setOpen] = useState(false);
    return (
        <Box
            sx={(theme) => ({
                [theme.breakpoints.up("md")]: {
                    display: "none",
                },
            })}
        >
            <Button onClick={() => setOpen(!open)}>
                <Menu />
            </Button>
            <Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
                <Stack sx={{ padding: "3rem 2rem 2rem 2rem" }} spacing={3}>
                    <Link to="/" onClick={() => setOpen(false)}>
                        <img
                            src={logo}
                            alt="logo-img"
                            style={{ width: "60%" }}
                        />
                    </Link>
                    <Cart />
                    <Stack direction="row" spacing={2}>
                        <Language />
                        <Login />
                    </Stack>
                    <List
                        className={styles.navs}
                        onClick={() => {
                            setOpen(false);
                        }}
                    >
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? styles.active : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="shop"
                                className={({ isActive }) =>
                                    isActive ? styles.active : ""
                                }
                            >
                                Shop
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="blogs"
                                className={({ isActive }) =>
                                    isActive ? styles.active : ""
                                }
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="contact"
                                className={({ isActive }) =>
                                    isActive ? styles.active : ""
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                    </List>
                    <Socials />
                    <Stack className={styles.emailAndInfo} spacing={1}>
                        <TopBarEmail />
                        <TopBarInfo />
                    </Stack>
                    <SearchBarPhone visible={true} />
                </Stack>
            </Drawer>
        </Box>
    );
}