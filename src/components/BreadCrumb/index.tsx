import { Box, Stack, Typography } from "@mui/material";
import breadCrumbImg from "../../assets/images/breadcrumb.jpg";
export interface IBreadCrumbProps {
    path: string;
}
export default function BreadCrumb(props: IBreadCrumbProps) {
    const { path } = props;
    return (
        <Box
            margin="2rem 0 4rem 0"
            sx={{ backgroundImage: `url(${breadCrumbImg})` }}
        >
            <Stack padding={"2rem 0"} alignItems="center">
                <Typography color="white" fontSize="2.8rem" fontWeight="bold">
                    Organi Shop
                </Typography>
                <Typography color="white">Home - {path} </Typography>
            </Stack>
        </Box>
    );
}
