import BaseFilter from "../types/base/BaseFilter";
import {
    ProductCategory,
    ProductCategoryPayload,
} from "../types/Product/Category";
import { request } from "./../utils/request";
export const getProductCategories = async (options: BaseFilter) => {
    const response = await request.get<{
        productCategories: ProductCategory[];
        total: number;
    }>("product-categories", { params: options });
    const { data } = response;
    return data;
};

export const getProductCategory = async (id: number) => {
    const response = await request.get<ProductCategory>(
        `product-categories/${id}`
    );
    const { data } = response;
    return data;
};

export const createProductCategory = async (
    productCategory: ProductCategoryPayload
) => {
    const response = await request.post<ProductCategory>(
        "product-categories",
        productCategory
    );
    const { data } = response;
    return data;
};

export const updateProductCategory = async (
    productCategory: ProductCategory
) => {
    const response = await request.patch<ProductCategory>(
        `product-categories/${productCategory.id}`,
        productCategory
    );
    const { data } = response;
    return data;
};

export const deleteProductCategory = async (id: number) => {
    const response = await request.delete<ProductCategory>(
        `product-categories/${id}`
    );
    const { data } = response;
    return data;
};

export const deleteProductCategories = async ({ ids }: { ids: number[] }) => {
    const response = await request.delete<ProductCategory>(
        `product-categories`,
        {
            params: {
                ids,
            },
        }
    );
    const { data } = response;
    return data;
};
