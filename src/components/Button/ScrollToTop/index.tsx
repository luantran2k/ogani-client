import { ArrowBackIosNew } from "@mui/icons-material";
import { blue, lightGreen } from "@mui/material/colors";

export interface IScrollToTopButtonProps {}

export default function ScrollToTopButton(props: IScrollToTopButtonProps) {
    return (
        <ArrowBackIosNew
            onClick={() => {
                scrollTo({ top: 0, behavior: "smooth" });
            }}
            sx={{
                zIndex: 2,
                position: "fixed",
                transform: "rotate(90deg)",
                bottom: "3.2rem",
                right: "3.2rem",
                height: "2.4rem",
                width: "2.4rem",
                padding: ".4rem",
                color: lightGreen[600],
                borderRadius: "50%",
                cursor: "pointer",
                border: `2px solid ${lightGreen[600]}`,
                transition: "all .3s ease",
                ":hover": {
                    backgroundColor: lightGreen[600],
                    color: "white",
                },
                ":active": {
                    backgroundColor: blue[700],
                },
            }}
        />
    );
}
