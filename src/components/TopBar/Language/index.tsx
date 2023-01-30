import { ArrowDropDown } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import MouseOverMenu from "../../Menu/MouseOverMenu";
import languageImage from "../../../assets/images/language.png";
import styles from "./styles.module.scss";
export interface ILanguageProps {}

export default function Language(props: ILanguageProps) {
    return (
        <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            className={styles.languages}
        >
            <img
                src={languageImage}
                alt="flag-icon"
                className={styles.languageImage}
            />
            <MouseOverMenu
                trigger={
                    <Stack direction="row" alignItems="center">
                        <Typography>English</Typography>
                        <ArrowDropDown />
                    </Stack>
                }
                sx={{ overflow: "hidden" }}
                className={styles.languageOptions}
            >
                <li>English</li>
                <li>Vietnamese</li>
            </MouseOverMenu>
        </Stack>
    );
}
