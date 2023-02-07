import { Box, Checkbox, Slider, Stack, Typography } from "@mui/material";
import { lightGreen } from "@mui/material/colors";
import { useState } from "react";
import MenuTitle from "../../../components/Typography/MenuTitle";

export interface IPriceSlideBarProps {}

export default function PriceSlideBar(props: IPriceSlideBarProps) {
    const [value, setValue] = useState<number[]>([10, 40]);
    const [usePrice, setUsePrice] = useState(false);

    return (
        <Box>
            <MenuTitle title={"Price"} />
            <Stack direction="row" alignItems="center">
                <Checkbox
                    value={usePrice}
                    onChange={(e) => setUsePrice(!usePrice)}
                />
                <Typography>Use price range</Typography>
            </Stack>
            <Box
                sx={{
                    filter: usePrice ? undefined : "grayscale(1)",
                    pointerEvents: usePrice ? undefined : "none",
                }}
            >
                <Slider
                    value={value}
                    min={10}
                    max={200}
                    step={1}
                    valueLabelDisplay="auto"
                    onChange={(event: Event, value: number | number[]) => {
                        setValue(value as number[]);
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
