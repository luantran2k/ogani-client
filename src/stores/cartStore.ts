import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { ProductCart } from "../types/Product";

interface CartStore {
    products: ProductCart[];
    totalPrice: () => number;
    addProduct: (product: ProductCart) => void;
    removeProduct: () => void;
    increaseQuantity: (id: number) => void;
    decreaseQuantity: (id: number) => void;
    toggleSelectProduct: (id: number) => void;
    selectAll: () => void;
    unSelectAll: () => void;
}
interface PriceArgument {
    price: number;
    salePercent?: number;
}
const findProduct = (
    products: ProductCart[],
    id: number
): ProductCart | undefined => {
    return products.find((product) => product.id === id);
};

export const getLastPrice = ({ price, salePercent }: PriceArgument) => {
    return salePercent ? price - (price * salePercent) / 100 : price;
};

export const getSalePercent = ({ price, salePercent }: PriceArgument) => {
    return salePercent ? salePercent : undefined;
};

export const useCartStore = create<CartStore>()(
    devtools(
        persist(
            (set, get) => ({
                products: [],
                totalPrice() {
                    return get().products.reduce((total, product) => {
                        const { selected, quantity, price, salePercent } =
                            product;
                        const lastPrice = getLastPrice({
                            price,
                            salePercent,
                        });
                        if (selected) {
                            return (total += lastPrice * quantity);
                        }
                        return total;
                    }, 0);
                },
                addProduct(product) {
                    set(
                        (state) => {
                            const productFinded = findProduct(
                                state.products,
                                product.id
                            );
                            if (productFinded) {
                                productFinded.quantity += 1;
                                return {
                                    products: state.products,
                                };
                            }
                            return { products: [...state.products, product] };
                        },
                        false,
                        "addProduct"
                    );
                },
                increaseQuantity(id) {
                    set((state) => {
                        const product = findProduct(state.products, id);
                        if (product) {
                            product.quantity += 1;
                        }
                        return {
                            products: state.products,
                        };
                    }, false);
                },
                decreaseQuantity(id) {
                    set((state) => {
                        const product = findProduct(state.products, id);
                        if (product) {
                            if (product.quantity === 1) {
                                state.products = state.products.filter(
                                    (product) => product.id !== id
                                );
                            } else {
                                product.quantity -= 1;
                            }
                        }
                        return {
                            products: state.products,
                        };
                    }, false);
                },
                removeProduct() {
                    set((state) => {
                        return {
                            products: state.products.filter(
                                (product) => !product.selected
                            ),
                        };
                    }, false);
                },
                toggleSelectProduct(id) {
                    set((state) => {
                        const product = findProduct(state.products, id);
                        if (product) {
                            product.selected = !product.selected;
                        }
                        return {
                            products: state.products,
                        };
                    });
                },
                selectAll() {
                    set((state) => ({
                        products: state.products.map((product) => ({
                            ...product,
                            selected: true,
                        })),
                    }));
                },
                unSelectAll() {
                    set((state) => ({
                        products: state.products.map((product) => ({
                            ...product,
                            selected: false,
                        })),
                    }));
                },
            }),
            { name: "cartStore" }
        )
    )
);
