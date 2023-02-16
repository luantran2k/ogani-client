import { Grid } from "@mui/material";
import { Product } from "../../../schemas/product";

import LatestProductSlide from "./Slide";

export interface ILatestProductProps {}
const products: Product[] = new Array(10).fill(undefined).map((p, i) => {
    const productNumber = Math.floor(Math.random() * 3 + 1);
    return {
        id: i,
        categories: [],
        images: [`/images/latest-product/lp-${productNumber}.jpg`],
        name: `Product ${productNumber}`,
        price: i * 100,
    };
});
export default function LatestProduct(props: ILatestProductProps) {
    return (
        <section id="latestProduct">
            <Grid container spacing={2} marginBottom="6rem">
                <Grid item xs={12} sm={6} md={4}>
                    <LatestProductSlide products={products} />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <LatestProductSlide products={products} />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <LatestProductSlide products={products} />
                </Grid>
            </Grid>
        </section>
    );
}
