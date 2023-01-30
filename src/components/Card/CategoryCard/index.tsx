import { Box, Typography } from "@mui/material";
import * as React from "react";
import { BOX_SHADOW } from "../../../const/style";
export interface ICategoryCardProps {
    url: string;
    title: string;
    description?: string;
}

export default function CategoryCard(props: ICategoryCardProps) {
    const { url, title, description } = props;
    return (
        <Box
            position="relative"
            borderRadius="1rem"
            overflow="hidden"
            width="fit-content"
            sx={{ userSelect: "none", cursor: "pointer" }}
        >
            <img src={url} alt={description || ""} />
            <Typography
                variant="caption"
                position="absolute"
                bottom="1.4rem"
                left="1.4rem"
                right="1.4rem"
                bgcolor="white"
                padding=".4rem"
                fontWeight="bold"
                fontSize="1.1rem"
                textAlign="center"
                textTransform="uppercase"
                letterSpacing=".2rem"
                textOverflow="ellipsis"
                borderRadius=".4rem"
                boxShadow={BOX_SHADOW}
            >
                {title}
            </Typography>
        </Box>
    );
}
