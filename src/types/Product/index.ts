import { ProductCategoryType } from "./Category";

export interface Product {
    id: number;
    image: string;
    name: string;
    price: number;
    categories: ProductCategoryType[];
}

export type ProductCart = Omit<Product, "categories"> & {
    quantity: number;
    selected: boolean;
};
