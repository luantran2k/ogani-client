import { Button, Grid, Stack, TextField, Typography } from "@mui/material";

export interface IMessageFormProps {}

export default function MessageForm(props: IMessageFormProps) {
    return (
        <form>
            <Typography
                variant="h4"
                fontWeight="bold"
                textAlign="center"
                marginBottom={6}
            >
                Leave Message
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <TextField fullWidth label="Name" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField fullWidth label="Email" />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Your message"
                        multiline
                        minRows={4}
                    />
                </Grid>
                <Grid item xs={12} display="flex" justifyContent="center">
                    <Button type="submit" variant="contained" size="large">
                        Send message
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
}
