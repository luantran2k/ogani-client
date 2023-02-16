import { Typography } from "@mui/material";
import { lightGreen } from "@mui/material/colors";
import { useState } from "react";
import SectionTitle from "../../../components/Typography/SectionTitle";
import FeatureOptions from "./FeatureOptions";
import ProductList from "./ProductList";

export interface IFeaturedProductProps {}

export default function FeaturedProduct(props: IFeaturedProductProps) {
    const [active, setActive] = useState<string>("all");
    return (
        <section id="featuredProduct">
            <SectionTitle title="Featured Product" />
            <FeatureOptions active={active} setActive={setActive} />
            <ProductList active={active} />
        </section>
    );
}
