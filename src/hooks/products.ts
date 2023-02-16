import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createProduct, getProducts } from "../apis/products";
import BaseFilter from "../types/base/BaseFilter";

const useProducts = () => {
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
    const createProductMutation = useMutation({
        mutationFn: createProduct,
        onSuccess: () => {
            queryClient.invalidateQueries(["products"]);
        },
    });

    return {
        getProductsQuery,
    };
};

export default useProducts;
