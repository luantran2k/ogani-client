import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import ProductCard from "../../../../components/Card/ProductCard";
import { Product } from "../../../../types/Product";
import { ProductCategoryType } from "../../../../types/Product/Category";

export const products: Product[] = [
    {
        id: 1,
        image: "/images/featured/feature-1.jpg",
        name: "Pork",
        price: 100,
        categories: ["fresh-meat"],
    },
    {
        id: 2,
        image: "/images/featured/feature-2.jpg",
        name: "Banana",
        price: 200,
        categories: ["oranges"],
        salePercent: 20,
    },
    {
        id: 3,
        image: "/images/featured/feature-3.jpg",
        name: "Guava",
        price: 300,
        categories: ["oranges"],
    },
    {
        id: 4,
        image: "/images/featured/feature-4.jpg",
        name: "Watermelon",
        price: 400,
        categories: ["oranges"],
    },
    {
        id: 5,
        image: "/images/featured/feature-5.jpg",
        name: "Grape",
        price: 500,
        categories: ["oranges"],
    },
    {
        id: 6,
        image: "/images/featured/feature-6.jpg",
        name: "Hamburger",
        price: 500,
        categories: ["fastfood"],
    },
    {
        id: 7,
        image: "/images/featured/feature-7.jpg",
        name: "Mango",
        price: 500,
        categories: ["oranges"],
    },
    {
        id: 8,
        image: "/images/featured/feature-8.jpg",
        name: "Apple",
        price: 500,
        categories: ["oranges"],
    },
];

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
