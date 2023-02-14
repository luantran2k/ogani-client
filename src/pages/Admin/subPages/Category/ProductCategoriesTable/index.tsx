import {
    Button,
    Checkbox,
    colors,
    MenuItem,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography,
} from "@mui/material";
import { blue, red } from "@mui/material/colors";
import Paper from "@mui/material/Paper";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getProductCategories } from "../../../../../apis/productCategories";
import AppModal from "../../../../../components/Modal";
import ConfirmModal from "../../../../../components/Modal/ConfirmModal";
import DeleteProductCategoryModal from "./DeleteModal";
import UpdateProductCategoryModal from "./UpdateModal";
export interface IProductCategoriesTableProps {}

export default function ProductCategoriesTable(
    props: IProductCategoriesTableProps
) {
    const [page, setPage] = useState(0);
    const [selected, setSelected] = useState<number[]>([]);
    const productCategoriesQuery = useQuery({
        queryKey: ["productCategories"],
        queryFn: getProductCategories,
        staleTime: 1000 * 60 * 10,
    });
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
        setSelected(data?.map((item) => item.id) || []);
    };
    const deselectAll = () => {
        setSelected([]);
    };

    const { data, error, isLoading } = productCategoriesQuery;
    if (isLoading) {
        return <Typography>Loading...</Typography>;
    }
    if (error) {
        return <Typography>Error</Typography>;
    }
    return (
        <Stack spacing={4}>
            <Typography variant="h4">Product Categories</Typography>
            <Stack direction="row">
                <TextField placeholder="Search" />
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
                                        selected.length === data?.length &&
                                        selected.length > 0
                                    }
                                />
                            </TableCell>
                            <TableCell width="2rem"></TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.map(({ id, name }, index) => (
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
                                        productCategory={{ id, name }}
                                    />
                                </TableCell>
                                <TableCell width="1rem">
                                    <DeleteProductCategoryModal
                                        productCategory={{ id, name }}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Stack>
    );
}
