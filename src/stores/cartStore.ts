import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { ProductCart } from "../schemas/product";

interface CartStore {
    products: ProductCart[];
    totalPrice: () => number;
    addProduct: (product: ProductCart) => void;
    removeProduct: () => void;
    increaseQuantity: (id: number, variantId: number) => void;
    decreaseQuantity: (id: number, variantId: number) => void;
    toggleSelectProduct: (id: number, variantId: number) => void;
    selectAll: () => void;
    unSelectAll: () => void;
}
interface PriceArgument {
    price: number;
    salePercent?: number;
}
const findProduct = (
    products: ProductCart[],
    id: number,
    variantId: number
): ProductCart | undefined => {
    return products.find(
        (product) => product.id === id && product.variantId === variantId
    );
};

export const getLastPrice = ({ price, salePercent }: PriceArgument) => {
    return salePercent ? price - (price * salePercent) / 100 : price;
};

export const getSalePercent = (salePercent?: number) => {
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
                                product.id,
                                product.variantId
                            );
                            if (productFinded) {
                                productFinded.quantity += product.quantity;
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
                increaseQuantity(id, variant) {
                    set((state) => {
                        const product = findProduct(
                            state.products,
                            id,
                            variant
                        );
                        if (product) {
                            product.quantity += 1;
                        }
                        return {
                            products: state.products,
                        };
                    }, false);
                },
                decreaseQuantity(id, variant) {
                    set((state) => {
                        const product = findProduct(
                            state.products,
                            id,
                            variant
                        );
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
                toggleSelectProduct(id, variant) {
                    set((state) => {
                        const product = findProduct(
                            state.products,
                            id,
                            variant
                        );
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
        ),
        { name: "cartStore" }
    )
);
