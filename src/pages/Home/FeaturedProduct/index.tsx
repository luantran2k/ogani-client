import { Box, Typography } from "@mui/material";
import { lightGreen } from "@mui/material/colors";
import { SetStateAction, useState } from "react";
import FeatureOptions from "./FeatureOptions";
import ProductList, { ProductCategoryType } from "./ProductList";

export interface IFeaturedProductProps {}

export default function FeaturedProduct(props: IFeaturedProductProps) {
    const [active, setActive] = useState<ProductCategoryType>("all");
    return (
        <>
            <Typography
                variant="h2"
                fontSize="2rem"
                fontWeight="bold"
                textAlign="center"
                sx={{
                    ":after": {
                        content: '""',
                        display: "block",
                        margin: ".6rem auto 2rem",
                        width: "4rem",
                        borderBottom: `.25rem solid ${lightGreen[600]}`,
                    },
                }}
            >
                Featured Product
            </Typography>
            <FeatureOptions active={active} setActive={setActive} />
            <ProductList active={active} />
        </>
    );
}
