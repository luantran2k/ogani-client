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
import SearchInput from "./SearchInput";

export interface ISearchBarProps {}

export default function SearchBar(props: ISearchBarProps) {
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
                    <SearchInput />
                    <SearchBarPhone />
                </Stack>
            </Stack>
        </Container>
    );
}
