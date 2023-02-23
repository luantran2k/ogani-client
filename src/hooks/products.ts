import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
    createProduct,
    getBestSellerProducts,
    getFeaturedProducts,
    getHotSaleProducts,
    getLastestProduct,
    getProduct,
    getProducts,
    getTopRateProducts,
} from "../apis/products";
import { ProductFilter } from "../types/Product";

export const useProducts = () => {
    const queryClient = useQueryClient();
    const getProductsQuery = (
        filter: ProductFilter = {
            page: 0,
        }
    ) =>
        useQuery({
            queryKey: ["products", { ...filter }],
            queryFn: () => getProducts(filter),
            keepPreviousData: true,
            staleTime: 5 * 60 * 1000,
        });
    const getProductQuery = (id: number) =>
        useQuery({
            queryKey: ["products", id],
            queryFn: () => getProduct(id),
            keepPreviousData: true,
            staleTime: 1000 * 60 * 10,
        });
    const createProductMutation = useMutation({
        mutationFn: createProduct,
        onSuccess: () => {
            queryClient.invalidateQueries(["products"]);
        },
    });

    const getHotSaleProductsQuery = () =>
        useQuery({
            queryKey: ["hot-sale-products"],
            queryFn: getHotSaleProducts,
            staleTime: Infinity,
        });
    const getFeaturedProductsQuery = () =>
        useQuery({
            queryKey: ["featured-products"],
            queryFn: getFeaturedProducts,
            staleTime: Infinity,
        });
    const getLastestProductQuery = () =>
        useQuery({
            queryKey: ["latest-products"],
            queryFn: getLastestProduct,
            staleTime: Infinity,
        });
    const getBestSellerProductsQuery = () =>
        useQuery({
            queryKey: ["best-sellers-products"],
            queryFn: getBestSellerProducts,
            staleTime: Infinity,
        });
    const getTopRateProductsQuery = () =>
        useQuery({
            queryKey: ["top-rate-products"],
            queryFn: getTopRateProducts,
            staleTime: Infinity,
        });

    return {
        getProductsQuery,
        getProductQuery,
        createProductMutation,
        getHotSaleProductsQuery,
        getFeaturedProductsQuery,
        getLastestProductQuery,
        getBestSellerProductsQuery,
        getTopRateProductsQuery,
    };
};
