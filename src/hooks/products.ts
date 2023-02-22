import {
    useMutation,
    useQueries,
    useQuery,
    useQueryClient,
} from "@tanstack/react-query";
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
import BaseFilter from "../types/base/BaseFilter";

export const useProducts = () => {
    const queryClient = useQueryClient();
    const getProductsQuery = (
        filter: BaseFilter = {
            page: 0,
            quantity: 10,
        }
    ) =>
        useQuery({
            queryKey: ["products"],
            queryFn: () =>
                getProducts({
                    page: filter.page,
                    quantity: filter.quantity,
                }),
            keepPreviousData: true,
            staleTime: 1000 * 60 * 10,
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
