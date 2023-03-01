import { Button, Container, Grid, Stack } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb";
import { useShopStore } from "../../stores/shopStore";
import Department from "./Department";
import PriceSlideBar from "./PriceSlideBar";
import ShopProductList from "./ProductList";
import ProductSearch from "./ProductSearch";
import SaleOffSlide from "./SaleOffSlide";

export interface IShopPageProps {}

export default function ShopPage(props: IShopPageProps) {
    const queryClient = useQueryClient();
    const [searchParams, setSearchParams] = useSearchParams();
    const { updateFilter } = useShopStore();
    const search = searchParams.get("search");
    const categoryId = searchParams.get("categoryId");

    useEffect(() => {
        if (search) {
            updateFilter("search", search);
        }
        if (categoryId) {
            updateFilter("categoryId", Number(categoryId));
        }
    }, [search, categoryId]);
    return (
        <>
            <BreadCrumb path={"Shop"} />
            <Container maxWidth="lg">
                <Grid
                    container
                    columnSpacing={4}
                    height="100%"
                    position="relative"
                >
                    <Grid item xs={12} sm={4} md={3}>
                        <Stack
                            spacing={4}
                            marginBottom="2rem"
                            sx={{
                                position: "sticky",
                                top: "6rem",
                            }}
                        >
                            <ProductSearch />
                            <Department />
                            <PriceSlideBar />
                            <Button
                                variant="contained"
                                onClick={() => {
                                    queryClient.invalidateQueries(["products"]);
                                }}
                            >
                                Apply
                            </Button>
                            {/* <ColorPicker />
                            <ProductSize /> */}
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={8} md={9}>
                        <SaleOffSlide />
                        <ShopProductList />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
