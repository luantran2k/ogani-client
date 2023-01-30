import { Facebook, LinkedIn, Twitter, Pinterest } from "@mui/icons-material";
import { Stack } from "@mui/material";
import styles from "./styles.module.scss";
export interface ISocialsProps {}

export default function Socials(props: ISocialsProps) {
    return (
        <Stack direction="row" spacing={2}>
            <Facebook className={styles.socialIcon} />
            <LinkedIn className={styles.socialIcon} />
            <Twitter className={styles.socialIcon} />
            <Pinterest className={styles.socialIcon} />
        </Stack>
    );
}
