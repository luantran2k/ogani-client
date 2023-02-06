import { Box, Grid } from "@mui/material";
import { useState } from "react";
import MenuTitle from "../../../components/Typography/MenuTitle";
import SizeOption from "./SizeOption";

const sizes: { label: string; value: string }[] = [
    {
        label: "Large",
        value: "large",
    },
    {
        label: "Medium",
        value: "medium",
    },
    {
        label: "Small",
        value: "small",
    },
    {
        label: "Tiny",
        value: "tiny",
    },
];

export interface IProductSizeProps {}

export default function ProductSize(props: IProductSizeProps) {
    const [checkedSizes, setCheckedSizes] = useState<string[]>([]);
    const handleCheckSize = (size: string) => {
        if (checkedSizes.some((sz) => sz === size)) {
            setCheckedSizes(checkedSizes.filter((sz) => sz !== size));
        } else setCheckedSizes((sizes) => [...sizes, size]);
    };
    return (
        <Box>
            <MenuTitle title="Popular Size" />
            <Grid container spacing={1}>
                {sizes.map(({ label, value }, index) => (
                    <Grid item xs={6} key={index}>
                        <SizeOption
                            label={label}
                            value={value}
                            checked={checkedSizes.includes(value)}
                            onClick={() => handleCheckSize(value)}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
