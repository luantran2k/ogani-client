import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useShopStore } from "../../../stores/shopStore";

export interface IProductSearchProps {}

export default function ProductSearch(props: IProductSearchProps) {
    const { filter, updateFilter } = useShopStore();
    const [searchText, setSearchText] = useState(filter.search || "");
    useEffect(() => {
        if (filter.search) {
            setSearchText(filter.search);
        }
    }, [filter.search]);
    return (
        <TextField
            label="Search"
            onChange={(e) => setSearchText(e.target.value)}
            onBlur={(e) => updateFilter("search", searchText)}
            value={searchText}
        />
    );
}
