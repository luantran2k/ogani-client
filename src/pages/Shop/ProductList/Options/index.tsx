import { FormatListBulleted, GridView } from "@mui/icons-material";
import { MenuItem, TextField, Typography } from "@mui/material";
import { grey, lightGreen } from "@mui/material/colors";
import { Stack } from "@mui/system";
import { useShopStore } from "../../../../stores/shopStore";
import { SortType } from "../../../../types/Product";

const sortOptionsL: { label: string; value: SortType }[] = [
    { label: "Top Sales", value: "sale" },
    { label: "Percent Discount", value: "discount" },
    { label: "Latest", value: "latest" },
];

export interface IShopProductListOptionsProps {
    numberOfItems: number;
}

export default function ShopProductListOptions(
    props: IShopProductListOptionsProps
) {
    const { numberOfItems = 0 } = props;
    const { filter, updateFilter } = useShopStore();
    return (
        <Stack
            direction={{ xs: "column", sm: "row" }}
            alignItems="center"
            justifyContent="space-between"
        >
            <Stack direction="row" spacing={1} alignItems="center">
                <Typography>Sort By</Typography>
                <TextField
                    size="small"
                    select
                    defaultValue="sale"
                    InputProps={{
                        sx: {
                            fontWeight: "bold",
                        },
                    }}
                    sx={{
                        "& fieldset": { border: "none" },
                    }}
                    onChange={(e) =>
                        updateFilter("sort", e.target.value as SortType)
                    }
                >
                    {sortOptionsL.map((option, index) => (
                        <MenuItem key={index} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </Stack>
            <Typography
                sx={{
                    span: {
                        fontWeight: "bold",
                    },
                }}
            >
                <span>{numberOfItems}</span> Products found
            </Typography>
            {/* <Stack
                direction="row"
                spacing={1}
                sx={{
                    ".list-style": {
                        cursor: "pointer",
                        color: grey[600],
                        transition: "all .3s ease",
                        ":hover": {
                            color: lightGreen[600],
                        },
                    },
                }}
            >
                <GridView className="list-style" />
                <FormatListBulleted className="list-style" />
            </Stack> */}
        </Stack>
    );
}
