import { useState } from "react";
import SectionTitle from "../../../components/Typography/SectionTitle";
import { useProductCategories } from "../../../hooks/productCategories";
import { useProducts } from "../../../hooks/products";
import { removeDublicateObject } from "../../../utils/utils";
import FeatureOptions from "./FeatureOptions";
import ProductList from "./ProductList";

export interface IFeaturedProductProps {}

export default function FeaturedProduct(props: IFeaturedProductProps) {
    // const { featuredProduct, categories } = props;
    const { getFeaturedProductsQuery } = useProducts();
    const { productCategoriesQuery } = useProductCategories();
    const {
        data: featuredProduct,
        isLoading: isProductsLoading,
        isError: isProductsError,
    } = getFeaturedProductsQuery();
    const categories = removeDublicateObject(
        featuredProduct?.flatMap((product) => product.categories),
        "id"
    );

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
