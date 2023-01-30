import {
    Box,
    Button,
    Container,
    MenuItem,
    Stack,
    TextField,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import DropDown from "./Dropdown";
import SearchBarPhone from "./Phone";

export interface ISearchBarProps {}

export default function SearchBar(props: ISearchBarProps) {
    const theme = useTheme();
    const matchSm = useMediaQuery(theme.breakpoints.up("sm"));
    return (
        <Container maxWidth="lg">
            <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={{ xs: 2, md: 4 }}
                justifyContent="space-between"
                flexWrap="wrap"
                marginBottom="2rem"
            >
                <DropDown />
                <Stack
                    direction={{ xs: "column", sm: "row" }}
                    flex={1}
                    spacing={{ xs: 2, sm: 4 }}
                >
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
                        >
                            Search
                        </Button>
                    </Stack>
                    <SearchBarPhone />
                </Stack>
            </Stack>
        </Container>
    );
}
