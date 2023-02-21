import { Box, Stack } from "@mui/material";
import { SwiperSlide } from "swiper/react";
import CategoryCard from "../../../components/Card/CategoryCard";
import Slide from "../../../components/Slide";
import { ProductCategory } from "../../../schemas/productCategory";

export const items: { url: string; title: string }[] = Array(5)
    .fill(undefined)
    .map((value, index) => ({
        title: "Fresh Fruits",
        url: `/images/categories/cat-${index + 1}.jpg`,
    }));

export interface ICategorySlideProps {
    categories: ProductCategory[];
}
export default function CategorySlide(props: ICategorySlideProps) {
    const { categories } = props;
    return (
        <section id="categories" style={{ margin: "4rem 0" }}>
            <Slide>
                {categories.map((category, index) => (
                    <SwiperSlide key={category.id}>
                        <CategoryCard
                            image={category.image}
                            title={category.name}
                        />
                    </SwiperSlide>
                ))}
            </Slide>
        </section>
    );
}
