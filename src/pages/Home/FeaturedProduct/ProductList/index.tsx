import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import ProductCard from "../../../../components/Card/ProductCard";
import { products } from "../../../../mock/product";
import { ProductCardType } from "../../../../schemas/product";
import { ProductCategory } from "../../../../schemas/productCategory";

export interface IProductListProps {
    active?: number;
    featuredProduct: ProductCardType[];
}

export default function ProductList(props: IProductListProps) {
    const { active, featuredProduct } = props;
    const matchSx = useMediaQuery("(min-width: 25rem)");
    const [parent, enableAnimations] = useAutoAnimate();

    const filterProduct = featuredProduct.filter(
        (product) =>
            active === undefined ||
            product.categoryIds.some((id) => id === active)
    );

    if (filterProduct.length == 0) {
        return (
            <Box minHeight="24rem">
                <Typography textAlign="center" fontSize="2rem">
                    Empty
                </Typography>
            </Box>
        );
    }
    return (
        <Grid container rowSpacing={6} columnSpacing={4} ref={parent}>
            {filterProduct.map((product) => (
                <Grid item key={product.id} xs={matchSx ? 6 : 12} sm={4} md={3}>
                    <ProductCard product={product} />
                </Grid>
            ))}
        </Grid>
    );
}
