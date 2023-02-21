import {
    Button,
    Checkbox,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    TableSortLabel,
    TextField,
    Typography,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useDeferredValue, useState } from "react";
import {
    deleteProductCategories,
    getProductCategories,
} from "../../../../../apis/productCategories";
import ConfirmModal from "../../../../../components/Modal/ConfirmModal";
import { useProductCategories } from "../../../../../hooks/productCategories";
import { useNotificationStore } from "../../../../../stores/notificationStore";
import BaseFilter from "../../../../../types/base/BaseFilter";
import AddProductCategoryModal from "./AddModal";
import DeleteProductCategoryModal from "./DeleteModal";
import UpdateProductCategoryModal from "./UpdateModal";
export interface IProductCategoriesTableProps {}

export default function ProductCategoriesTable(
    props: IProductCategoriesTableProps
) {
    const {
        filter,
        setFilter,
        productCategoriesQuery,
        deleteProductCategoriesMutation,
    } = useProductCategories();
    const { page, quantity, search } = filter;
    const [selected, setSelected] = useState<number[]>([]);
    const { data, error, isLoading } = productCategoriesQuery();

    const handleChangeCheckBox = (id: number, selected: boolean) => {
        if (selected) {
            setSelected((selected) => [...selected, id]);
        } else {
            setSelected((selected) =>
                selected.filter((idSelected) => idSelected !== id)
            );
        }
    };

    const selectAll = () => {
        setSelected(data?.productCategories.map((item) => item.id) || []);
    };
    const deselectAll = () => {
        setSelected([]);
    };

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number
    ) => {
        setFilter((filter) => ({ ...filter, page: newPage }));
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFilter((filter) => ({
            ...filter,
            page: 0,
            quantity: parseInt(event.target.value, 10),
        }));
    };

    if (isLoading) {
        return <Typography>Loading...</Typography>;
    }
    if (error) {
        return <Typography>Error</Typography>;
    }
    return (
        <Stack spacing={4}>
            <Typography variant="h4">Product Categories</Typography>
            <Stack
                direction={{ xs: "column", sm: "row" }}
                justifyContent="space-between"
                spacing={4}
            >
                <TextField
                    placeholder="Search"
                    value={search}
                    onChange={(e) =>
                        setFilter((filter) => ({
                            ...filter,
                            search: e.target.value,
                        }))
                    }
                />
                <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
                    <ConfirmModal
                        trigger={
                            <Button
                                variant="outlined"
                                color="error"
                                disabled={selected.length === 0}
                            >
                                Remove
                            </Button>
                        }
                        question={`Are you sure you want to remove ${selected.length} items?`}
                        onConfirm={() => {
                            deleteProductCategoriesMutation.mutate({
                                ids: selected,
                            });
                        }}
                    />
                    <AddProductCategoryModal />
                </Stack>
            </Stack>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead
                        sx={{
                            th: {
                                fontWeight: "bold",
                            },
                        }}
                    >
                        <TableRow>
                            <TableCell width="2rem">
                                <Checkbox
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            selectAll();
                                        } else {
                                            deselectAll();
                                        }
                                    }}
                                    checked={
                                        selected.length ===
                                            data?.productCategories.length &&
                                        selected.length > 0
                                    }
                                />
                            </TableCell>
                            <TableCell width="2rem"></TableCell>

                            <TableCell>
                                <TableSortLabel>Name</TableSortLabel>
                            </TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.productCategories.map(({ id, name }, index) => (
                            <TableRow key={id}>
                                <TableCell width="fit-content">
                                    <Checkbox
                                        value={id}
                                        checked={selected.includes(id)}
                                        onChange={(e) => {
                                            handleChangeCheckBox(
                                                id,
                                                e.target.checked
                                            );
                                        }}
                                    />
                                </TableCell>
                                <TableCell>{index + page * 10 + 1}</TableCell>
                                <TableCell>{name}</TableCell>
                                <TableCell width="1rem">
                                    <UpdateProductCategoryModal
                                        productCategory={{
                                            id,
                                            name,
                                            image: "",
                                        }}
                                    />
                                </TableCell>
                                <TableCell width="1rem">
                                    <DeleteProductCategoryModal
                                        productCategory={{
                                            id,
                                            name,
                                            image: "",
                                        }}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <TablePagination
                    component="div"
                    count={data?.total || 0}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={quantity}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </TableContainer>
        </Stack>
    );
}
