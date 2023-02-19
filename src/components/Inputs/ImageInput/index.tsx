import {
    Box,
    InputLabel,
    Stack,
    SxProps,
    Typography,
    Theme,
} from "@mui/material";
import { Image } from "@mui/icons-material";
import { lightGreen } from "@mui/material/colors";
import { ChangeEvent, useId } from "react";

export interface IImageInputProps {
    error?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    sx?: SxProps<Theme>;
}

const defaultStyles = {
    bgcolor: lightGreen[50],
    borderRadius: ".4rem",
    cursor: "pointer",
    padding: "1rem 2rem",
    transition: "all .3s ease-in-out",
    ":hover": {
        bgcolor: lightGreen[100],
    },
};

export default function ImageInput(props: IImageInputProps) {
    const { error, onChange, sx = {} } = props;
    const imagesInputId = useId();

    return (
        <Box sx={{ ...defaultStyles, ...sx }}>
            <InputLabel htmlFor={imagesInputId} sx={{ cursor: "pointer" }}>
                <Stack direction="row" spacing={2} justifyContent="center">
                    <Typography>Upload Image </Typography>
                    <Image sx={{ color: lightGreen[800] }} />
                    <Typography color="error">{error}</Typography>
                </Stack>
            </InputLabel>

            <input
                type="file"
                multiple
                id={imagesInputId}
                style={{ display: "none" }}
                accept="image/*"
                onChange={onChange}
            />
        </Box>
    );
}
