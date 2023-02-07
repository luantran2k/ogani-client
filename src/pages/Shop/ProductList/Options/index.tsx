import { FormatListBulleted, GridView } from "@mui/icons-material";
import { MenuItem, TextField, Typography } from "@mui/material";
import { grey, lightGreen } from "@mui/material/colors";
import { Stack } from "@mui/system";

const sortOptionsL: { label: string; value: string }[] = [
    { label: "Top Sales", value: "top-sales" },
    { label: "Percent Discount", value: "percent-discount" },
    { label: "Latest", value: "latest" },
    { label: "Descending Price", value: "descending-price" },
    { label: "Ascending Price", value: "ascending-price" },
];

export interface IShopProductListOptionsProps {
    numberOfItems: number;
}

export default function ShopProductListOptions(
    props: IShopProductListOptionsProps
) {
    const { numberOfItems = 0 } = props;
    return (
        <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            marginBottom="2rem"
        >
            <Stack direction="row" spacing={1} alignItems="center">
                <Typography>Sort By</Typography>
                <TextField
                    size="small"
                    select
                    defaultValue="top-sales"
                    InputProps={{
                        sx: {
                            fontWeight: "bold",
                        },
                    }}
                    sx={{
                        "& fieldset": { border: "none" },
                    }}
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
            <Stack
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
            </Stack>
        </Stack>
    );
}
