import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import ProductCard from "../../../../components/Card/ProductCard";
import { products } from "../../../../mock/product";
import { Product } from "../../../../types/Product";
import { ProductCategoryType } from "../../../../types/Product/Category";

export interface IProductListProps {
    active: ProductCategoryType;
}

export default function ProductList(props: IProductListProps) {
    const { active } = props;
    const matchSx = useMediaQuery("(min-width: 25rem)");
    const filterProduct = products.filter(
        (product) =>
            active === "all" ||
            product.categories.some((category) => category === active)
    );
    if (filterProduct.length == 0) {
        return (
            <Box minHeight="24rem">
                <Typography textAlign="center" fontSize="2rem">
                    Not Found
                </Typography>
            </Box>
        );
    }
    return (
        <Grid container rowSpacing={6} columnSpacing={4}>
            {filterProduct.map((product) => (
                <Grid item key={product.id} xs={matchSx ? 6 : 12} sm={4} md={3}>
                    <ProductCard product={product} />
                </Grid>
            ))}
        </Grid>
    );
}
