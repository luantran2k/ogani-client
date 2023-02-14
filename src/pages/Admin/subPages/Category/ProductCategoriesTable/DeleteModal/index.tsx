import { Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProductCategory } from "../../../../../../apis/productCategories";
import ConfirmModal from "../../../../../../components/Modal/ConfirmModal";
import { ProductCategory } from "../../../../../../types/Product/Category";

export interface IDeleteProductCategoryModalProps {
    productCategory: ProductCategory;
}

export default function DeleteProductCategoryModal(
    props: IDeleteProductCategoryModalProps
) {
    const { productCategory } = props;
    const querryClient = useQueryClient();
    const deleteProductCategoryMutation = useMutation({
        mutationFn: deleteProductCategory,
        onSuccess: () => {
            querryClient.invalidateQueries(["productCategories"]);
        },
    });
    return (
        <ConfirmModal
            trigger={
                <Typography
                    sx={{
                        color: red[700],
                        cursor: "pointer",
                    }}
                >
                    Remove
                </Typography>
            }
            question={`Are you sure you want to remove ${productCategory.name}?`}
            onConfirm={() => {
                deleteProductCategoryMutation.mutate(productCategory.id);
            }}
        />
    );
}
