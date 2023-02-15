import { Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProductCategories } from "../../../apis/productCategories";
import ConfirmModal from "../ConfirmModal";

export interface IDeleteSelectedModalProps {
    ids: number[];
    onConfirm: Function;
}

export default function DeleteSelectedModal(props: IDeleteSelectedModalProps) {
    const { ids, onConfirm } = props;
    const querryClient = useQueryClient();
    const deleteProductCategoriesMutation = useMutation({
        mutationFn: deleteProductCategories,
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
            question={`Are you sure you want to remove ${ids.length} items?`}
            onConfirm={() => {
                deleteProductCategoriesMutation.mutate({ ids });
            }}
        />
    );
}
