import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useState } from "react";
import {
    deleteProductCategories,
    getProductCategories,
} from "../apis/productCategories";
import { useNotificationStore } from "../stores/notificationStore";
import BaseFilter from "../types/base/BaseFilter";

export const useProductCategories = () => {
    const querryClient = useQueryClient();
    const { pushNotification } = useNotificationStore();
    const [filter, setFilter] = useState<BaseFilter>({
        page: 0,
        quantity: 10,
        search: "",
    });
    const productCategoriesQuery = useQuery({
        queryKey: ["productCategories", filter],
        queryFn: () => getProductCategories(filter),
        keepPreviousData: true,
        staleTime: 1000 * 60 * 10,
    });

    const deleteProductCategoriesMutation = useMutation({
        mutationFn: deleteProductCategories,
        onSuccess: () => {
            querryClient.invalidateQueries(["productCategories"]);
        },
        onError: (error: AxiosError) => {
            pushNotification({ message: error.message, severity: "error" });
        },
    });
    return {
        filter,
        setFilter,
        productCategoriesQuery,
        deleteProductCategoriesMutation,
    };
};
