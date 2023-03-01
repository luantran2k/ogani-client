import { Box, Container, Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import BreadCrumb from "../../components/BreadCrumb";
import { useCartStore } from "../../stores/cartStore";
import CheckoutForm from "./CheckoutForm";
import OrderInfo from "./OrderInfo";

export interface ICheckoutPageProps {}

export default function CheckoutPage(props: ICheckoutPageProps) {
    const { products, selectAll, unSelectAll } = useCartStore();
    return (
        <>
            <BreadCrumb path={"Checkout"} />
            <Container maxWidth="lg">
                <Typography variant="h2" fontSize="2rem" fontWeight="600">
                    Billing Details
                </Typography>
                <Box
                    borderBottom={`2px solid ${grey[400]}`}
                    margin="1rem 0 2rem 0"
                />
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                        <CheckoutForm />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <OrderInfo />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
