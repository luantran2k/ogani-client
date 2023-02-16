import { z } from "zod";
import { productCategorySchema } from "./productCategory";
const productSchema = z.object({
    id: z.number(),
    images: z.array(z.string()),
    name: z.string(),
    price: z.number(),
    salePercent: z.number().optional(),
    categories: z.array(productCategorySchema),
});

export type Product = z.infer<typeof productSchema>;

export type ProductPayload = Omit<Product, "id">;

export type ProductCart = Omit<Product, "categories"> & {
    quantity: number;
    selected: boolean;
};

export default productSchema;
