import { Container } from "@mui/material";

import Banner from "./Banner";
import HomeBlog from "./Blog";
import CategorySlide from "./Category";
import FeaturedProduct from "./FeaturedProduct";
import HeroSection from "./Hero";
import LatestProduct from "./LatestProduct";

export interface IHomePageProps {}

export default function HomePage(props: IHomePageProps) {
    return (
        <Container maxWidth="lg">
            <HeroSection />
            <CategorySlide />
            <FeaturedProduct />
            <Banner />
            <LatestProduct />
            <HomeBlog />
        </Container>
    );
}
