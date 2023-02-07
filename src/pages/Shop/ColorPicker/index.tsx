import { Box, Grid } from "@mui/material";
import { blue, green, red, yellow } from "@mui/material/colors";
import { useState } from "react";
import MenuTitle from "../../../components/Typography/MenuTitle";
import ColorOption, { IColorOptionProps } from "./ColorOption";

export interface IColorPickerProps {}

const colors: IColorOptionProps[] = [
    { label: "Red", color: "red", value: red[600] },
    { label: "Green", color: "green", value: green[600] },
    { label: "Blue", color: "blue", value: blue[600] },
    { label: "Yellow", color: "yellow", value: yellow[600] },
    { label: "Black", color: "black", value: "black" },
    { label: "White", color: "white", value: "white" },
];

export default function ColorPicker(props: IColorPickerProps) {
    const [checkedColors, setCheckedColors] = useState<string[]>([]);
    const handleCheckColor = (color: string) => {
        if (checkedColors.some((col) => col === color)) {
            setCheckedColors(checkedColors.filter((col) => col !== color));
        } else setCheckedColors((colors) => [...colors, color]);
    };
    return (
        <Box>
            <MenuTitle title="Color" />
            <Grid container spacing={1}>
                {colors.map((color, index) => (
                    <Grid item xs={6} key={index}>
                        <ColorOption
                            {...color}
                            checked={checkedColors.includes(color.color)}
                            onClick={() => handleCheckColor(color.color)}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
