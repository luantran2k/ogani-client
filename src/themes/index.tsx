import { createTheme } from "@mui/material";
import { lightGreen, yellow } from "@mui/material/colors";

export const theme = createTheme({
    palette: {
        primary: {
            main: lightGreen[600],
            contrastText: "white",
        },

        secondary: {
            main: yellow[700],
        },
    },
    typography: {
        fontFamily: [
            "Cairo",
            "Roboto",
            "Helvetica",
            "Arial",
            "sans-serif",
        ].join(","),
    },
});
