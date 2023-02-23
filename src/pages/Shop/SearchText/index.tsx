import { TextField } from "@mui/material";
import * as React from "react";
import { useShopStore } from "../../../stores/shopStore";

export interface IProductSearchProps {}

export default function ProductSearch(props: IProductSearchProps) {
    const { filter, updateFilter } = useShopStore();
    return (
        <TextField
            label="Search"
            onBlur={(e) => updateFilter("search", e.target.value)}
        >
            {filter.search}
        </TextField>
    );
}
