import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../../../apis/products";
import ElasticLoading from "../../../../components/Loading/ElasticLoading";
import AppModal from "../../../../components/Modal";
import AppTable, { ITableHeader } from "../../../../components/Table";
import { useProducts } from "../../../../hooks/products";
import { useTable } from "../../../../hooks/table";
import { products } from "../../../../mock/product";
import { Product } from "../../../../schemas/product";

export interface IAdminProductPageProps {}
const tableHeads: ITableHeader<Product>[] = [
    { label: "Image", field: "images", isImages: true },
    {
        label: "Name",
        field: "name",
    },
    {
        label: "Price",
        field: "price",
    },
    {
        label: "Sale Percents",
        field: "salePercent",
    },
    {
        label: "Categories",
        field: "categories",
    },
];

export default function AdminProductPage(props: IAdminProductPageProps) {
    const navigate = useNavigate();
    const { tableOptions, setTableOptions, tableRef } = useTable();

    const { getProductsQuery } = useProducts();
    const { data, isError, isLoading } = getProductsQuery({
        page: tableOptions.page,
        quantity: tableOptions.rowsPerPage,
    });
    if (isLoading) {
        return (
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <ElasticLoading />
            </Box>
        );
    }

    if (isError) {
        return (
            <Box sx={{ display: "flex", justifyContent: "center" }}>Error!</Box>
        );
    }

    return (
        <Box>
            <Typography variant="h5">Product</Typography>
            <Stack direction="row" justifyContent="space-between" mb={2}>
                <TextField placeholder="Enter to search" />
                <Stack direction="row" spacing={1}>
                    <Button
                        variant="outlined"
                        onClick={() => {
                            console.log(tableRef.current);
                        }}
                    >
                        Delete
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => {
                            navigate("create");
                        }}
                    >
                        Create
                    </Button>
                </Stack>
            </Stack>
            <AppTable<Product>
                tableRef={tableRef}
                tableHeads={tableHeads}
                items={data.products}
                onClickUpdate={(id: number | string) => {
                    alert(id);
                }}
                onClickDelete={(id: number | string) => {
                    alert(id);
                }}
                tableOptions={tableOptions}
                setTableOptions={setTableOptions}
            />
        </Box>
    );
}
