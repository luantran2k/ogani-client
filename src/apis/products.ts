import { create } from "zustand";
import BaseFilter from "../types/base/BaseFilter";
import { request } from "../utils/request";
import { Product, ProductPayload } from "../schemas/product";

export const getProducts = async (filter: BaseFilter) => {
    const { data } = await request.get<{ products: Product[]; total: number }>(
        "/products",
        {
            params: filter,
        }
    );
    return data;
};

export const createProduct = async (product: ProductPayload) => {
    const { data } = await request.post<Product[]>("/products", product);
    return data;
};
