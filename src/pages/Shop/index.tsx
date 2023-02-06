import { Container, Grid, Stack, Typography } from "@mui/material";
import BreadCrumb from "../../components/BreadCrumb";
import MenuTitle from "../../components/Typography/MenuTitle";
import ColorPicker from "./ColorPicker";
import Department from "./Department";
import PriceSlideBar from "./PriceSlideBar";
import ProductSize from "./Size";

export interface IShopPageProps {}

export default function ShopPage(props: IShopPageProps) {
    return (
        <>
            <BreadCrumb />
            <Container maxWidth="lg">
                <Grid container columnSpacing={4}>
                    <Grid item xs={3}>
                        <Stack spacing={4}>
                            <Department />
                            <PriceSlideBar />
                            <ColorPicker />
                            <ProductSize />
                        </Stack>
                    </Grid>
                    <Grid item xs={9}>
                        <Typography fontWeight="bold" fontSize="1.4rem">
                            Product
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
