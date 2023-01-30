import {
    Facebook,
    LinkedIn,
    Mail,
    Pinterest,
    Twitter,
} from "@mui/icons-material";
import { Box, Container, Stack, Typography } from "@mui/material";
import TopBarEmail from "./Email";
import TopBarInfo from "./Infos";

import Language from "./Language";
import Login from "./Login";
import Socials from "./Socials";
import styles from "./styles.module.scss";

export interface ITopBarProps {}

export default function TopBar(props: ITopBarProps) {
    return (
        <Box className={styles.topBar}>
            <Container maxWidth="lg" className={styles.container}>
                <Box className={styles.leftGroup}>
                    <TopBarEmail />
                    <TopBarInfo />
                </Box>
                <Box className={styles.rightGroup}>
                    <Socials />
                    <Language />
                    <Login />
                </Box>
            </Container>
        </Box>
    );
}
