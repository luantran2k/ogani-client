import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Delete } from "@mui/icons-material";
import { Box, Button, TextField, Typography, Grid, Stack } from "@mui/material";
import { useRef, useState, Ref, useImperativeHandle } from "react";
import {
    ProductVariant,
    productVariantSchema,
} from "../../../../../../schemas/product";
import { v4 as uuidv4 } from "uuid";
import { ZodError } from "zod";
import { assginValueForPropertyOfObject } from "../../../../../../utils/utils";

export type CreateProductVariant = ProductVariant & {
    id: string;
    errors?: {
        [x: string]: string[] | undefined;
        [x: number]: string[] | undefined;
        [x: symbol]: string[] | undefined;
    };
};

const getEmptyVariant = (): CreateProductVariant => {
    return {
        id: uuidv4(),
        price: 0,
        quantity: 0,
        variant: "",
        salePercent: 0,
    };
};

export interface VariantRef {
    variants: CreateProductVariant[];
    vaildateVariant: () => void;
}
export interface IProductVariantListProps {
    variantsRef: Ref<VariantRef>;
}

export default function ProductVariantList(props: IProductVariantListProps) {
    const { variantsRef } = props;
    const [variantList] = useAutoAnimate();
    const [variants, setVariants] = useState<CreateProductVariant[]>([
        getEmptyVariant(),
    ]);

    useImperativeHandle(variantsRef, () => ({
        variants,
        vaildateVariant,
    }));

    const vaildateVariant = () => {
        setVariants((variants) => {
            const vaildateVariant = variants.map((variant) => {
                try {
                    const validVariant = productVariantSchema.parse(variant);
                    return { ...variant, errors: undefined };
                } catch (e) {
                    if (e instanceof ZodError<CreateProductVariant>) {
                        return {
                            ...variant,
                            errors: e.formErrors.fieldErrors,
                        };
                    }
                    throw e;
                }
            });
            return vaildateVariant;
        });
    };
    const onBlurUpdateFieldVariant = (
        e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>,
        id: string,
        field: keyof Omit<CreateProductVariant, "errors" | "id">,
        type: "number" | "string" = "string"
    ) => {
        setVariants((variants) => {
            const newVariants = [...variants];
            const variant = newVariants.find((v) => v.id === id);
            let value: string | number = e.target.value;
            if (variant) {
                value = type === "number" ? Number(value) : value;
                assginValueForPropertyOfObject(variant, field, value);
            }
            return newVariants;
        });
        vaildateVariant();
    };

    const handleRemoveVariant = (variantId: string) => {
        setVariants((variants) =>
            variants.filter((variant) => variant.id !== variantId)
        );
    };

    return (
        <Box ref={variantList} margin="0">
            {variants?.map((variant, index) => (
                <Grid container spacing={2} key={index} marginLeft={-2}>
                    <Grid item xs={12} display="flex">
                        <Typography variant="h6">
                            Variant {index + 1}
                        </Typography>
                        <Button
                            color="error"
                            onClick={() => handleRemoveVariant(variant.id)}
                        >
                            <Delete />
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            defaultValue={variant.price}
                            type="number"
                            label="Price"
                            error={Boolean(variant.errors?.price)}
                            helperText={variant.errors?.price?.[0]}
                            onBlur={(e) => {
                                onBlurUpdateFieldVariant(
                                    e,
                                    variant.id,
                                    "price",
                                    "number"
                                );
                            }}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            type="number"
                            defaultValue={variant.salePercent}
                            label="Sale percent"
                            error={Boolean(variant.errors?.salePercent)}
                            helperText={variant.errors?.salePercent?.[0]}
                            onBlur={(e) => {
                                onBlurUpdateFieldVariant(
                                    e,
                                    variant.id,
                                    "salePercent",
                                    "number"
                                );
                            }}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            type="number"
                            defaultValue={variant.quantity}
                            label="Quantity"
                            error={Boolean(variant.errors?.quantity)}
                            helperText={variant.errors?.quantity?.[0]}
                            onBlur={(e) => {
                                onBlurUpdateFieldVariant(
                                    e,
                                    variant.id,
                                    "quantity",
                                    "number"
                                );
                            }}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label="Variant"
                            defaultValue={variant.variant}
                            error={Boolean(variant.errors?.variant)}
                            helperText={variant.errors?.variant?.[0]}
                            onBlur={(e) => {
                                onBlurUpdateFieldVariant(
                                    e,
                                    variant.id,
                                    "variant"
                                );
                            }}
                            fullWidth
                        >
                            {/* {JSON.stringify(sizeEnum)} */}
                        </TextField>
                    </Grid>
                </Grid>
            ))}
            <Stack direction="row" justifyContent="center" marginTop={2}>
                <Button
                    variant="outlined"
                    onClick={() =>
                        setVariants((variants) => [
                            ...variants,
                            getEmptyVariant(),
                        ])
                    }
                >
                    Create new variant
                </Button>
                {/* <Button
                    color="error"
                    variant="contained"
                    onClick={vaildateVariant}
                >
                    Check
                </Button> */}
            </Stack>
        </Box>
    );
}
