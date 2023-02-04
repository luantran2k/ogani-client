import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import RoundArrowButton from "../../components/Button/RoundArrowButton";
import Footer from "../../components/Footer";
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
            <RoundArrowButton
                onClick={() => {
                    scrollTo({ top: 0, behavior: "smooth" });
                }}
                sx={{
                    zIndex: 2,
                    position: "fixed",
                    bottom: "3.2rem",
                    right: "3.2rem",
                    rotate: "90deg",
                }}
            />
            <main style={{ minHeight: "50vh" }}>
                <Outlet />
            </main>
            <Footer />
        </Box>
    );
}
