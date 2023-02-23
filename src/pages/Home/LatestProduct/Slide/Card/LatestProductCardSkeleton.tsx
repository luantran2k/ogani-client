import { Stack, Box, Typography, Skeleton } from "@mui/material";
import { Link } from "react-router-dom";
import Price from "../../../../../components/Typography/Price";

export interface ILatestProductCardSkeletonProps {}

export default function LatestProductCardSkeleton(
    props: ILatestProductCardSkeletonProps
) {
    return (
        <Stack direction="row" spacing={2} width="100%" alignItems="center">
            <Box
                borderRadius=".4rem"
                height="6rem"
                width="6rem"
                overflow="hidden"
            >
                <Skeleton height="100%" width="100%"></Skeleton>
            </Box>
            <Stack>
                <Skeleton height="2rem%" width="10rem"></Skeleton>
                <Skeleton height="2rem%" width="4rem"></Skeleton>
            </Stack>
        </Stack>
    );
}
