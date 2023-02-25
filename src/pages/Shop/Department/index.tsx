import { Box, MenuItem, TextField } from "@mui/material";
import MenuTitle from "../../../components/Typography/MenuTitle";
import { useProductCategories } from "../../../hooks/productCategories";
import { useShopStore } from "../../../stores/shopStore";

export interface IDepartmentProps {}

const departments: { label: string; value: string }[] = [
    { label: "All", value: "all" },
    { label: "Fresh Meat", value: "fresh-meat" },
    { label: "Vegetables", value: "vegetables" },
    { label: "Fruit & Nut Gifts", value: "fruit-and-nut-gifts" },
    { label: "Fresh Berries", value: "fresh-berries" },
    { label: "Ocean Foods", value: "ocean-foods" },
    { label: "Butter & Eggs", value: "butter-and-eggs" },
    { label: "Fastfood", value: "fastfood" },
    { label: "Fresh Onion", value: "fresh-onion" },
    { label: "Papayaya & Crisps", value: "papayaya-and-crisps" },
    { label: "Oatmeal", value: "oat-meal" },
];

export default function Department(props: IDepartmentProps) {
    const { productCategoriesQuery } = useProductCategories();
    const { filter, updateFilter } = useShopStore();
    const {
        data = {
            productCategories: [],
            total: 0,
        },
        isLoading,
    } = productCategoriesQuery();
    const handleUpdate = (value: number | string) => {
        if (typeof value === "string") {
            updateFilter("categoryId", undefined);
            return;
        }
        updateFilter("categoryId", value);
    };
    return (
        <Box>
            <MenuTitle title="Department" />
            <TextField
                fullWidth
                select
                value={filter.categoryId || "all"}
                onChange={(e) => handleUpdate(e.target.value)}
            >
                <MenuItem value={"all"}>All</MenuItem>
                {data.productCategories.map(({ id, name }) => (
                    <MenuItem key={id} value={id}>
                        {name}
                    </MenuItem>
                ))}
            </TextField>
        </Box>
    );
}
