import {
    Stack,
    TextField,
    MenuItem,
    Box,
    Button,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export interface ISearchInputProps {}

export default function SearchInput(props: ISearchInputProps) {
    const theme = useTheme();
    const matchSm = useMediaQuery(theme.breakpoints.up("sm"));
    const [value, setValue] = useState("");
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const handleSearch = () => {
        queryClient.invalidateQueries(["products"], { exact: true });
        navigate("/shop?search=" + value);
    };
    return (
        <Stack direction="row" flex={1}>
            <Stack
                alignItems="center"
                direction="row"
                flex={1}
                sx={{
                    borderRadius: "0.25rem",
                    marginRight: ".4rem",
                    border: `1px solid ${grey[300]}`,
                }}
            >
                <TextField
                    size="small"
                    defaultValue="all"
                    select
                    sx={{
                        display: matchSm ? "block" : "none",
                        width: "14rem",
                        "& fieldset": { border: "none" },
                    }}
                    InputProps={{
                        sx: {
                            fontWeight: "bold",
                        },
                    }}
                >
                    <MenuItem value="all">All Categories</MenuItem>
                </TextField>
                <Box
                    sx={{
                        height: "60%",
                        borderLeft: `1px solid ${grey[300]}`,
                    }}
                ></Box>
                <TextField
                    fullWidth
                    size="small"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleSearch();
                        }
                    }}
                    placeholder="What do you need?"
                    sx={{
                        "& fieldset": { border: "none" },
                    }}
                />
            </Stack>
            <Button
                size="small"
                variant="contained"
                sx={{
                    padding: "0 1.4rem",
                    fontWeight: "bold",
                    fontSize: ".8rem",
                }}
                onClick={handleSearch}
            >
                Search
            </Button>
        </Stack>
    );
}
