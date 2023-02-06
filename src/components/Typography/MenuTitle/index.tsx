import { Typography } from "@mui/material";

export interface IMenuTitleProps {
    title: string;
}

export default function MenuTitle(props: IMenuTitleProps) {
    const { title } = props;
    return (
        <Typography fontWeight="bold" fontSize="1.4rem">
            {title}
        </Typography>
    );
}
