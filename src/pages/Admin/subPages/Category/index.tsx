import { Box, Typography } from "@mui/material";
import ProductCategoriesTable from "./ProductCategoriesTable";

export interface IAdminCategoryPageProps {}

export default function AdminCategoryPage(props: IAdminCategoryPageProps) {
    return (
        <Box>
            <ProductCategoriesTable />
        </Box>
    );
}
