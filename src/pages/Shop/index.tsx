import { Container, Grid, Stack } from "@mui/material";
import BreadCrumb from "../../components/BreadCrumb";
import { useProducts } from "../../hooks/products";
import { useShopStore } from "../../stores/shopStore";
import ColorPicker from "./ColorPicker";
import Department from "./Department";
import PriceSlideBar from "./PriceSlideBar";
import ShopProductList from "./ProductList";
import ProductSize from "./Size";

export interface IShopPageProps {}

export default function ShopPage(props: IShopPageProps) {
    const { getProductsQuery } = useProducts();
    const { data, isError, isLoading } = getProductsQuery();
    return (
        <>
            <BreadCrumb />
            <Container maxWidth="lg">
                <Grid container columnSpacing={4}>
                    <Grid item xs={12} sm={4} md={3}>
                        <Stack spacing={4}>
                            <Department />
                            <PriceSlideBar />
                            <ColorPicker />
                            <ProductSize />
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={8} md={9}>
                        <ShopProductList products={data?.products} />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
