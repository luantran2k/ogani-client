import { Box, Checkbox, Slider, Stack, Typography } from "@mui/material";
import { lightGreen } from "@mui/material/colors";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import MenuTitle from "../../../components/Typography/MenuTitle";
import { useShopStore } from "../../../stores/shopStore";

export interface IPriceSlideBarProps {}

export default function PriceSlideBar(props: IPriceSlideBarProps) {
    const { filter, updateFilter } = useShopStore();
    const [value, setValue] = useState<number[]>([
        filter.minPrice!,
        filter.maxPrice!,
    ]);

    return (
        <Box>
            <MenuTitle title={"Price"} />
            <Stack direction="row" alignItems="center">
                <Checkbox
                    value={!filter.usePrice}
                    onChange={(e) => updateFilter("usePrice", !filter.usePrice)}
                />
                <Typography>Use price range</Typography>
            </Stack>
            <Box
                sx={{
                    filter: filter.usePrice ? undefined : "grayscale(1)",
                    pointerEvents: filter.usePrice ? undefined : "none",
                }}
            >
                <Slider
                    value={value}
                    min={10}
                    max={500}
                    step={10}
                    valueLabelDisplay="auto"
                    onChange={(event: Event, value: number | number[]) => {
                        const values = value as number[];
                        setValue(values);
                    }}
                    onChangeCommitted={(event, value) => {
                        const values = value as number[];
                        updateFilter("minPrice", Number(values[0]));
                        updateFilter("maxPrice", Number(values[1]));
                    }}
                    disableSwap
                    sx={{
                        ".MuiSlider-thumb": {
                            color: "white",
                            border: `2px solid ${lightGreen[600]}`,
                            height: "1rem",
                            width: "1rem",
                        },
                    }}
                />
                <Stack
                    direction="row"
                    spacing={2}
                    sx={{
                        color: lightGreen[800],
                    }}
                >
                    <Typography fontWeight="bold">${value[0]}</Typography>
                    <Typography fontWeight="bold">-</Typography>
                    <Typography fontWeight="bold">${value[1]}</Typography>
                </Stack>
            </Box>
        </Box>
    );
}
