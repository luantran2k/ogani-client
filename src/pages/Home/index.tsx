import { Container } from "@mui/material";
import CategorySlide from "./Category";
import FeaturedProduct from "./FeaturedProduct";

import HeroSection from "./Hero";

export interface IHomePageProps {}

export default function HomePage(props: IHomePageProps) {
    return (
        <Container maxWidth="lg">
            <HeroSection />
            <CategorySlide />
            <FeaturedProduct />
            {/* <Banner />
            <LatestProduct /> */}
            {/* <HomeBlog /> */}
        </Container>
    );
}
