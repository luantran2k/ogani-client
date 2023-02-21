import { KeyboardArrowDown, Menu } from "@mui/icons-material";
import { Box, MenuItem, Stack, Typography } from "@mui/material";
import { grey, lightGreen } from "@mui/material/colors";
import { useState } from "react";
import { useProductCategories } from "../../../hooks/productCategories";

export interface IDropDownProps {}

export default function DropDown(props: IDropDownProps) {
    const [open, setOpen] = useState(false);
    const { productCategoriesQuery } = useProductCategories();
    const { data, isLoading, isError } = productCategoriesQuery();

    return (
        <Box position="relative" flex="0 0 25%">
            <Stack
                direction="row"
                alignItems="center"
                sx={{
                    height: "100%",
                    color: "white",
                    backgroundColor: lightGreen[600],
                    padding: ".8rem 1rem",
                    cursor: "pointer",
                    borderRadius: "0.25rem",
                }}
                onClick={() => {
                    setOpen(!open);
                }}
            >
                <Menu sx={{ marginRight: "1rem" }} />
                <Typography flex="1" fontWeight="bold" fontSize="1.1rem">
                    All departments
                </Typography>
                <KeyboardArrowDown
                    sx={{
                        transform: open ? "rotate(180deg)" : "",
                        transition: "transform 0.3s ease-in-out",
                    }}
                />
            </Stack>
            <Box
                sx={{
                    top: "100%",
                    borderRadius: ".25rem",
                    backgroundColor: "white",
                    position: "absolute",
                    overflow: "hidden",
                    width: "100%",
                    zIndex: 2,
                    border: `1px solid ${grey[300]}`,
                    maxHeight: open ? "80vh" : "0",
                    visibility: open ? "visible" : "hidden",
                    transition: "all .3s linear",
                    li: {
                        ":hover": {
                            color: lightGreen[700],
                        },
                    },
                }}
            >
                {isLoading ? (
                    <MenuItem>Loading...</MenuItem>
                ) : isError ? (
                    <MenuItem>Error</MenuItem>
                ) : (
                    <>
                        {data.productCategories.map((category) => (
                            <MenuItem key={category.id}>
                                {category.name}
                            </MenuItem>
                        ))}
                    </>
                )}
            </Box>
        </Box>
    );
}
