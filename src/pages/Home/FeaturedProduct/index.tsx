import { Typography } from "@mui/material";
import { lightGreen } from "@mui/material/colors";
import { useState } from "react";
import SectionTitle from "../../../components/Typography/SectionTitle";
import { ProductCardType } from "../../../schemas/product";
import { ProductCategory } from "../../../schemas/productCategory";
import FeatureOptions from "./FeatureOptions";
import ProductList from "./ProductList";

export interface IFeaturedProductProps {
    featuredProduct: ProductCardType[];
    categories: ProductCategory[];
}

export default function FeaturedProduct(props: IFeaturedProductProps) {
    const { featuredProduct, categories } = props;
    const [active, setActive] = useState<number | undefined>(3);
    return (
        <section id="featuredProduct">
            <SectionTitle title="Featured Product" />
            <FeatureOptions
                active={active}
                setActive={setActive}
                categories={categories}
            />
            <ProductList active={active} featuredProduct={featuredProduct} />
        </section>
    );
}
