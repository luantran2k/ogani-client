import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import ScrollToTopButton from "../../components/Button/ScrollToTop";
import Navbar from "../../components/NavBar";
import SearchBar from "../../components/SearchBar";
import TopBar from "../../components/TopBar";

export interface IRootLayoutProps {}

export default function RootLayout(props: IRootLayoutProps) {
    return (
        <Box>
            <TopBar />
            <Navbar />
            <SearchBar />
            <ScrollToTopButton />
            <Outlet />
        </Box>
    );
}
