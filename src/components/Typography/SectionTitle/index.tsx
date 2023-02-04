import { Typography } from "@mui/material";
import { lightGreen } from "@mui/material/colors";

export interface ISectionTitleProps {
    title: string;
}

export default function SectionTitle(props: ISectionTitleProps) {
    const { title } = props;
    return (
        <Typography
            variant="h2"
            fontSize="2rem"
            fontWeight="bold"
            textAlign="center"
            sx={{
                ":after": {
                    content: '""',
                    display: "block",
                    margin: ".6rem auto 2rem",
                    width: "4rem",
                    borderBottom: `.25rem solid ${lightGreen[600]}`,
                },
            }}
        >
            {title}
        </Typography>
    );
}
