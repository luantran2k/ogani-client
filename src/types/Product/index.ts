import { ProductCategoryType } from "./Category";

export interface Product {
    id: number;
    images: string[];
    name: string;
    price: number;
    salePercent?: number;
    categories: ProductCategoryType[];
}

export type ProductCart = Omit<Product, "categories"> & {
    quantity: number;
    selected: boolean;
};
