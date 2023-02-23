import BaseFilter from "../base/BaseFilter";

export type SortType =
    | "sale"
    | "discount"
    | "latest"
    | "accending price"
    | "decending price";

export type ProductFilter = Partial<
    BaseFilter & {
        sort: SortType;
        categoryId: number;
        usePrice: boolean;
        minPrice: number;
        maxPrice: number;
        total: boolean;
    }
>;
