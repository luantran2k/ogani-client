import {
    Product,
    ProductCardType,
    ProductCreate,
    ProductInfo,
    ProductsCardApiResponse,
    ProductVariant,
} from "../schemas/product";
import { ProductFilter } from "../types/Product";
import { request } from "../utils/request";
import { ProductDetail } from "./../schemas/product";

export const getProducts = async (filter: ProductFilter) => {
    const { data } = await request.get<{
        products: ProductDetail[];
        total: number;
    }>("/products", {
        params: filter,
    });
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

export const getHotSaleProducts = async () => {
    const { data } = await request.get<ProductsCardApiResponse>(
        "/products/hot-sale"
    );
    return data;
};

export const getFeaturedProducts = async () => {
    const { data } = await request.get<ProductsCardApiResponse>(
        "products/featured"
    );
    return data;
};
export const getLastestProduct = async () => {
    const { data } = await request.get<ProductsCardApiResponse>(
        "products/latest"
    );
    return data;
};
export const getBestSellerProducts = async () => {
    const { data } = await request.get<ProductsCardApiResponse>(
        "products/best-sellers"
    );
    return data;
};
export const getTopRateProducts = async () => {
    const { data } = await request.get<ProductsCardApiResponse>(
        "products/top-rate"
    );
    return data;
};
