export type ProductCategoryType =
    | "all"
    | "fresh-meat"
    | "oranges"
    | "vegetables"
    | "fastfood";
export interface ProductCategory {
    id: number;
    name: string;
}

export type ProductCategoryPayload = Omit<ProductCategory, "id">;
