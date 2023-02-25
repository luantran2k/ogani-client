import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { ProductFilter } from "../types/Product";

export interface ShopStore {
    filter: ProductFilter;
    updateFilter: <T extends keyof ProductFilter>(
        key: T,
        value: ProductFilter[T]
    ) => void;
}

export const useShopStore = create<ShopStore>()(
    devtools((set, get) => ({
        filter: {
            minPrice: 40,
            maxPrice: 120,
            sort: "latest",
            quantity: 12,
            usePrice: false,
            page: 0,
        },
        updateFilter(key, value) {
            set((state) => {
                const newFilter = state.filter;
                if (key !== "page") {
                    newFilter.page = 0;
                }
                newFilter[key] = value;
                return { ...state, filter: newFilter };
            });
        },
    }))
);
