import { Grid } from "@mui/material";
import { useProducts } from "../../../hooks/products";
import { Product } from "../../../schemas/product";

import LatestProductSlide from "./Slide";

export interface ILatestProductProps {}
export default function LatestProduct(props: ILatestProductProps) {
    const {
        getLastestProductQuery,
        getBestSellerProductsQuery,
        getTopRateProductsQuery,
    } = useProducts();
    const { data: latestProducts } = getLastestProductQuery();
    const { data: bestSellerProducts } = getBestSellerProductsQuery();
    const { data: topRateProducts } = getTopRateProductsQuery();
    return (
        <section id="latestProduct">
            <Grid container spacing={2} marginBottom="6rem">
                <Grid item xs={12} sm={6} md={4}>
                    <LatestProductSlide
                        products={latestProducts?.products}
                        title={"Latest"}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <LatestProductSlide
                        products={bestSellerProducts?.products}
                        title={"Best Seller"}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <LatestProductSlide
                        products={topRateProducts?.products}
                        title={"Top Rate"}
                    />
                </Grid>
            </Grid>
        </section>
    );
}
