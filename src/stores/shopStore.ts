import { create } from "zustand";
import BaseFilter from "../types/base/BaseFilter";
import { SortType } from "../types/Product";

export type ProductFilter = Partial<
    BaseFilter & {
        sort: SortType;
        categoryId: number;
        minPrice: number;
        maxPrice: Number;
        total: boolean;
    }
>;

export interface ShopStore {
    filter: ProductFilter;
    updateFilter: <T extends keyof ProductFilter>(
        key: T,
        value: ProductFilter[T]
    ) => void;
}

export const useShopStore = create<ShopStore>()((set, get) => ({
    filter: {},
    updateFilter(key, value) {
        set((state) => {
            const newFilter = state.filter;
            newFilter[key] = value;
            return { ...state, filter: newFilter };
        });
    },
}));
