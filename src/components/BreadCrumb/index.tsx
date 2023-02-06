import { Box, Stack, Typography } from "@mui/material";
import breadCrumbImg from "../../assets/images/breadcrumb.jpg";
export interface IBreadCrumbProps {
    string?: string;
}
export default function BreadCrumb(props: IBreadCrumbProps) {
    return (
        <Box
            margin="2rem 0 4rem 0"
            sx={{ backgroundImage: `url(${breadCrumbImg})` }}
        >
            <Stack padding={"2rem 0"} alignItems="center">
                <Typography color="white" fontSize="2.8rem" fontWeight="bold">
                    Organi Shop
                </Typography>
                <Typography color="white">Home - Shop </Typography>
            </Stack>
        </Box>
    );
}
