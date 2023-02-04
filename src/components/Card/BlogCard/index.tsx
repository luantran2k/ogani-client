import {
    CalendarToday,
    ChatBubbleOutlined,
    ChatBubbleOutlineRounded,
} from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { BlogPreview } from "../../../types/Blog";

export interface IBlogCardProps {
    blog: BlogPreview;
}

export default function BlogCard(props: IBlogCardProps) {
    const { blog } = props;
    const { id, title, image, description, comments, createAt } = blog;
    return (
        <Stack>
            <Box
                overflow="hidden"
                sx={{
                    borderRadius: "1rem",
                    img: {
                        width: "100%",
                        objectFit: "cover",
                    },
                }}
            >
                <img src={image} alt="" />
            </Box>
            <Stack
                margin="1.6rem 0 1.2rem"
                direction="row"
                spacing={4}
                alignItems="center"
                sx={{
                    ".icon": {
                        color: grey[400],
                        fontSize: "1.3rem",
                    },
                    ".info": {
                        color: grey[600],
                    },
                }}
            >
                <Stack direction="row" spacing={0.5} alignItems="center">
                    <CalendarToday className="icon" />
                    <Typography className="info">
                        {createAt.toLocaleDateString()}
                    </Typography>
                </Stack>
                <Stack direction="row" spacing={0.5} alignItems="center">
                    <ChatBubbleOutlined className="icon" />
                    <Typography className="info">{comments.length}</Typography>
                </Stack>
            </Stack>
            <Typography fontWeight="bold" fontSize="1.3rem">
                {title}
            </Typography>
            <Typography>
                Sed quia non numquam modi tempora indunt ut labore et dolore
                magnam aliquam quaerat
            </Typography>
        </Stack>
    );
}
