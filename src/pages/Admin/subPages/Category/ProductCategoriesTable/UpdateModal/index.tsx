import { Button, Stack, TextField, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRef, useState } from "react";
import { updateProductCategory } from "../../../../../../apis/productCategories";
import AppModal, { AppModalRef } from "../../../../../../components/Modal";
import { ProductCategory } from "../../../../../../types/Product/Category";

export interface IUpdateProductCategoryModalProps {
    productCategory: ProductCategory;
}
export default function UpdateProductCategoryModal(
    props: IUpdateProductCategoryModalProps
) {
    const nameRef = useRef<HTMLInputElement>(null);
    const appModalRef = useRef<AppModalRef>(null);
    const [error, setError] = useState("");
    const { productCategory } = props;
    const { id, name } = productCategory;
    const queryClient = useQueryClient();

    const updateProductCategoryMutation = useMutation({
        mutationFn: updateProductCategory,
        onSuccess: () => {
            appModalRef.current?.setOpen(false);
            queryClient.invalidateQueries(["productCategories"]);
        },
        onError: (error: AxiosError<ProductCategory>) => {
            setError(error.message);
        },
    });
    const { data, isError, isLoading } = updateProductCategoryMutation;

    return (
        <AppModal
            trigger={
                <Typography
                    sx={{
                        color: blue[700],
                        cursor: "pointer",
                    }}
                >
                    Update
                </Typography>
            }
            sx={{ color: blue[700] }}
            ref={appModalRef}
        >
            <Stack alignItems="center" spacing={2}>
                <TextField
                    fullWidth
                    defaultValue={name}
                    inputRef={nameRef}
                    helperText={error}
                    error={Boolean(error)}
                />
                <Button
                    variant="contained"
                    onClick={(e) => {
                        if (nameRef.current) {
                            updateProductCategoryMutation.mutate({
                                id,
                                name: nameRef.current.value,
                            });
                        }
                    }}
                    disabled={isLoading}
                >
                    Save
                </Button>
            </Stack>
        </AppModal>
    );
}
