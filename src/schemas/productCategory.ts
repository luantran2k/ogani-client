import { z } from "zod";

export const productCategorySchema = z.object({
    id: z.number(),
    name: z.string(),
    image: z.string(),
});

export type ProductCategory = z.infer<typeof productCategorySchema>;

export type ProductCategoryPayload = Omit<ProductCategory, "id">;
