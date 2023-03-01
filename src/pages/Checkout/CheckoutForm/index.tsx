import { Box, Stack, TextField } from "@mui/material";

export interface ICheckoutFormProps {}

export default function CheckoutForm(props: ICheckoutFormProps) {
    return (
        <form>
            <Stack spacing={2}>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                    <TextField label="First Name" fullWidth required />
                    <TextField label="Last Name" fullWidth required />
                </Stack>
                <TextField label="Address" required />
                <TextField label="Phone" required />
                <TextField label="Email" required />
                <TextField label="Order notes" multiline minRows={3} />
            </Stack>
        </form>
    );
}
