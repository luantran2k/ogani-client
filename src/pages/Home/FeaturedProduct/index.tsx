import { Typography } from "@mui/material";
import { lightGreen } from "@mui/material/colors";
import { useState } from "react";
import SectionTitle from "../../../components/Typography/SectionTitle";
import { ProductCategoryType } from "../../../types/Product/Category";
import FeatureOptions from "./FeatureOptions";
import ProductList from "./ProductList";

export interface IFeaturedProductProps {}

export default function FeaturedProduct(props: IFeaturedProductProps) {
    const [active, setActive] = useState<ProductCategoryType>("all");
    return (
        <section id="featuredProduct">
            <SectionTitle title="Featured Product" />
            <FeatureOptions active={active} setActive={setActive} />
            <ProductList active={active} />
        </section>
    );
}
