import { Grid, Pagination, useMediaQuery } from "@mui/material";
import ProductCard from "../../../components/Card/ProductCard";
import ProductCardSkeleton from "../../../components/Card/ProductCard/ProductCardSkelenton";
import { useProducts } from "../../../hooks/products";
import { ProductCardType } from "../../../schemas/product";
import { useShopStore } from "../../../stores/shopStore";
import { getEmptyArray } from "../../../utils/utils";
import ShopProductListOptions from "./Options";

export interface IShopProductListProps {}

export default function ShopProductList(props: IShopProductListProps) {
    const { filter, updateFilter } = useShopStore();
    const matchCustomSm = useMediaQuery("(min-width: 22.5rem)");
    const { getProductsQuery } = useProducts();
    const { data, isError, isLoading } = getProductsQuery(filter);
    const emptyArray = getEmptyArray(9);
    return (
        <>
            <ShopProductListOptions
                numberOfItems={data?.products.length || 0}
            />
            <Grid
                container
                spacing={4}
                marginBottom="2rem"
                marginTop={isLoading ? "-4rem" : 0}
            >
                {data?.products
                    ? data.products.map((product) => (
                          <Grid
                              item
                              xs={matchCustomSm ? 6 : 12}
                              sm={6}
                              md={4}
                              key={product.id}
                          >
                              <ProductCard product={product} />
                          </Grid>
                      ))
                    : emptyArray.map((x, i) => (
                          <Grid item xs={matchCustomSm ? 6 : 12} md={4} key={i}>
                              <ProductCardSkeleton />
                          </Grid>
                      ))}
            </Grid>
            <Pagination
                count={
                    data?.total
                        ? Math.ceil(data?.total / (filter.quantity || 12))
                        : 1
                }
                onChange={(e, page) => {
                    updateFilter("page", page - 1);
                }}
                shape="rounded"
            />
        </>
    );
}
