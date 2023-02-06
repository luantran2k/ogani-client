import { Box, Slider, Stack, Typography } from "@mui/material";
import { lightGreen } from "@mui/material/colors";
import { useState } from "react";
import MenuTitle from "../../../components/Typography/MenuTitle";

export interface IPriceSlideBarProps {}

export default function PriceSlideBar(props: IPriceSlideBarProps) {
    const [value, setValue] = useState<number[]>([100, 300]);

    return (
        <Box>
            <MenuTitle title={"Price"} />
            <Slider
                value={value}
                min={10}
                max={540}
                step={2}
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
    );
}
