import { Typography, Stack, TextField, Button } from "@mui/material";
import { blue } from "@mui/material/colors";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRef, useState } from "react";
import { createProductCategory } from "../../../../../../apis/productCategories";
import AppModal, { AppModalRef } from "../../../../../../components/Modal";
import { ProductCategory } from "../../../../../../schemas/productCategory";

export interface IAddProductCategoryModalProps {}

export default function AddProductCategoryModal(
    props: IAddProductCategoryModalProps
) {
    const nameRef = useRef<HTMLInputElement>(null);
    const appModalRef = useRef<AppModalRef>(null);
    const queryClient = useQueryClient();
    const [error, setError] = useState("");
    const addProductCategoryMutation = useMutation({
        mutationFn: createProductCategory,
        onSuccess: () => {
            appModalRef.current?.setOpen(false);
            queryClient.invalidateQueries(["productCategories"]);
            setError("");
        },
        onError: (error: AxiosError<ProductCategory>) => {
            setError(error.message);
        },
    });
    const { data, isError, isLoading } = addProductCategoryMutation;

    return (
        <AppModal
            trigger={<Button variant="contained">Add</Button>}
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
                            addProductCategoryMutation.mutate({
                                name: nameRef.current.value,
                                image: "",
                            });
                        }
                    }}
                    disabled={isLoading}
                >
                    Add
                </Button>
            </Stack>
        </AppModal>
    );
}
