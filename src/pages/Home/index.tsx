import { Container, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getHomePageProducts } from "../../apis/products";
import ElasticLoading from "../../components/Loading/ElasticLoading";

import Banner from "./Banner";
import HomeBlog from "./Blog";
import CategorySlide from "./Category";
import FeaturedProduct from "./FeaturedProduct";
import HeroSection from "./Hero";
import LatestProduct from "./LatestProduct";

export interface IHomePageProps {}

export default function HomePage(props: IHomePageProps) {
    const productHomePageQuery = useQuery({
        queryKey: ["productHomePage"],
        queryFn: getHomePageProducts,
        keepPreviousData: true,
        staleTime: 1000 * 60 * 10,
    });
    const { data, isLoading, isError } = productHomePageQuery;
    if (isLoading) {
        return (
            <Container maxWidth="lg">
                <ElasticLoading />
            </Container>
        );
    }
    if (isError) {
        return (
            <Container maxWidth="lg">
                <Typography color="error">Error</Typography>
            </Container>
        );
    }

    const { categories, featuredProduct } = data;
    return (
        <Container maxWidth="lg">
            <HeroSection />
            <CategorySlide categories={categories} />
            <FeaturedProduct
                featuredProduct={featuredProduct}
                categories={categories}
            />
            <Banner />
            <LatestProduct />
            {/* <HomeBlog /> */}
        </Container>
    );
}
