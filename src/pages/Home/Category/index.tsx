import { Box, Skeleton, Stack } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { SwiperSlide } from "swiper/react";
import CategoryCard from "../../../components/Card/CategoryCard";
import Slide from "../../../components/Slide";
import { useProductCategories } from "../../../hooks/productCategories";
import { ProductCategory } from "../../../schemas/productCategory";
import { getEmptyArray } from "../../../utils/utils";

export interface ICategorySlideProps {}
export default function CategorySlide(props: ICategorySlideProps) {
    const { productCategoriesQuery } = useProductCategories();

    const { data, isLoading, isError } = productCategoriesQuery();
    const emptyArray = getEmptyArray(4);

    return (
        <section id="categories" style={{ margin: "4rem 0" }}>
            <Slide>
                {isLoading
                    ? emptyArray.map((x, i) => (
                          <SwiperSlide key={i}>
                              <Skeleton
                                  sx={{
                                      flex: "0 0 25%",
                                      height: "16rem",
                                  }}
                              ></Skeleton>
                          </SwiperSlide>
                      ))
                    : data?.productCategories.map((category, index) => (
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
