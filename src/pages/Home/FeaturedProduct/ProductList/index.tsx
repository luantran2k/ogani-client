import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import ProductCard from "../../../../components/Card/ProductCard";
import ProductCardSkeleton from "../../../../components/Card/ProductCard/ProductCardSkelenton";
import { ProductCardType } from "../../../../schemas/product";
import { getEmptyArray } from "../../../../utils/utils";

export interface IProductListProps {
  active?: number;
  featuredProduct?: ProductCardType[];
}

export default function ProductList(props: IProductListProps) {
  const { active, featuredProduct } = props;
  const matchSx = useMediaQuery("(min-width: 25rem)");
  const parent = useAutoAnimate({});
  const emptyArray = getEmptyArray(8);
  const filterProduct = featuredProduct?.filter(
    (product) =>
      active === undefined ||
      product.categories.some((category) => category.id === active)
  );
  if (filterProduct?.length == 0) {
    return (
      <Box minHeight="24rem">
        <Typography textAlign="center" fontSize="2rem">
          Empty
        </Typography>
      </Box>
    );
  }
  return (
    <Grid
      container
      rowSpacing={6}
      columnSpacing={4}
      ref={parent as React.RefObject<HTMLDivElement>}
    >
      {filterProduct
        ? filterProduct.map((product) => (
            <Grid item key={product.id} xs={matchSx ? 6 : 12} sm={4} md={3}>
              <ProductCard product={product} />
            </Grid>
          ))
        : emptyArray.map((x, index) => (
            <Grid item key={index} xs={matchSx ? 6 : 12} sm={4} md={3}>
              <ProductCardSkeleton />
            </Grid>
          ))}
    </Grid>
  );
}
