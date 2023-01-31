import { SwiperSlide } from "swiper/react";
import CategoryCard from "../../../components/Card/CategoryCard";
import Slide from "../../../components/Slide";

const items: { url: string; title: string }[] = Array(5)
    .fill(undefined)
    .map((value, index) => ({
        title: "Fresh Fruits",
        url: `/images/categories/cat-${index + 1}.jpg`,
    }));

export interface ICategorySlideProps {}
export default function CategorySlide(props: ICategorySlideProps) {
    return (
        <Slide>
            {items.map((item, index) => (
                <SwiperSlide key={item.url}>
                    <CategoryCard url={item.url} title={item.title} />
                </SwiperSlide>
            ))}
            {items.map((item, index) => (
                <SwiperSlide key={item.url + "" + index}>
                    <CategoryCard url={item.url} title={item.title} />
                </SwiperSlide>
            ))}
        </Slide>
    );
}
