import { Grid, Pagination } from "@mui/material";
import ProductCard from "../../../components/Card/ProductCard";
import { products } from "../../../mock/product";
import ProductList from "../../Home/FeaturedProduct/ProductList";
import ShopProductListOptions from "./Options";

export interface IShopProductListProps {}

export default function ShopProductList(props: IShopProductListProps) {
    return (
        <>
            <ShopProductListOptions numberOfItems={products.length} />
            <Grid container spacing={4} marginBottom="2rem">
                {products.map((product) => (
                    <Grid item xs={6} md={4} key={product.id}>
                        <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
            <Pagination count={10} shape="rounded" />
        </>
    );
}
