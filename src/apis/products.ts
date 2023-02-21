import {
    Product,
    ProductCardType,
    ProductCreate,
    ProductInfo,
    ProductVariant,
} from "../schemas/product";
import { ProductCategory } from "../schemas/productCategory";
import BaseFilter from "../types/base/BaseFilter";
import { request } from "../utils/request";

export const getProducts = async (filter: BaseFilter) => {
    const { data } = await request.get<{ products: Product[]; total: number }>(
        "/products",
        {
            params: filter,
        }
    );
    return data;
};

export const getProduct = async (id: number) => {
    const { data } = await request.get<{
        product: ProductInfo;
        productVariants: ProductVariant[];
        relatedProducts: Product[];
    }>(`/products/${id}`);
    return data;
};

export const createProduct = async (product: ProductCreate) => {
    // const { images, categories, ...productData } = product;
    const productData: { [index: string]: any } = product;
    const formData = new FormData();
    Object.keys(productData).forEach((key) => {
        if (Array.isArray(productData[key])) {
            if (key === "variants") {
                productData[key].forEach((value: string | Blob) => {
                    formData.append(key, JSON.stringify(value));
                });
            } else {
                productData[key].forEach((value: string | Blob) => {
                    formData.append(key, value);
                });
            }
        } else {
            formData.append(key, productData[key]);
        }
    });
    // categories.forEach((id) => {
    //     formData.append("categories", String(id));
    // });
    // images.forEach((file) => {
    //     formData.append("images", file);
    // });
    const { data } = await request.post<Product[]>("/products", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    return data;
};

export const getHomePageProducts = async () => {
    const { data } = await request.get<{
        featuredProduct: ProductCardType[];
        categories: ProductCategory[];
    }>("/products/home-page");
    return data;
};
