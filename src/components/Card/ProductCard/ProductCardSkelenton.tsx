import { Box, Skeleton } from "@mui/material";

export interface IProductCardSkeletonProps {}

export default function ProductCardSkeleton(props: IProductCardSkeletonProps) {
    return (
        <Box>
            <Skeleton sx={{ height: "13.75rem" }}></Skeleton>
            <Skeleton></Skeleton>
            <Skeleton></Skeleton>
        </Box>
    );
}
