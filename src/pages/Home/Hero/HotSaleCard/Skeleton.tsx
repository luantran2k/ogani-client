import { Box, Skeleton, Stack, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import Price from "../../../../components/Typography/Price";

export interface IHotSaleCardSekeletonProps {}

export default function HotSaleCardSekeleton(
    props: IHotSaleCardSekeletonProps
) {
    return (
        <Stack direction="row" spacing={1}>
            <Box
                width="6rem"
                height="6rem"
                overflow="hidden"
                borderRadius="1rem"
            >
                <Skeleton
                    sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />
            </Box>
            <Stack flex={1}>
                <Skeleton width="100%"></Skeleton>
                <Skeleton width="60%"></Skeleton>
                <Skeleton width="80%"></Skeleton>
            </Stack>
        </Stack>
    );
}
