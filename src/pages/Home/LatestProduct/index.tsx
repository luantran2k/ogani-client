import { Box, Container, Grid, Stack } from "@mui/material";
import { Product } from "../../../types/Product";
import LatestProductSlide from "./Slide";

export interface ILatestProductProps {}
// {
//     id: 1,
//     categories: ["all"],
//     image: "/image/Latest-product/lq-1.jpg",
//     name: "Product 1",
//     price: 100,
// },
const products: Product[] = new Array(10).fill(undefined).map((p, i) => {
    const productNumber = Math.floor(Math.random() * 3 + 1);
    return {
        id: i,
        categories: ["all"],
        image: `/images/latest-product/lp-${productNumber}.jpg`,
        name: `Product ${productNumber}`,
        price: i * 100,
    };
});
export default function LatestProduct(props: ILatestProductProps) {
    return (
        <Grid container spacing={2}>
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
    );
}
