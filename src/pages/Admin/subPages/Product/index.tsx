import { Box, Typography } from "@mui/material";
import { useState } from "react";
import AppTable, { ITableHeader } from "../../../../components/Table";
import { products } from "../../../../mock/product";
import { Product } from "../../../../types/Product";

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
    const [page, setPage] = useState(1);
    return (
        <Box>
            <Typography variant="h5">Product</Typography>
            <AppTable<Product> tableHeads={tableHeads} items={products} />
        </Box>
    );
}
