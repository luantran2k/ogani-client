import { Box, Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export interface IBannerCardProps {
    image: string;
    title: string;
    description: string;
    color: string;
}

export default function BannerCard(props: IBannerCardProps) {
    const { image, title, description, color } = props;
    const navigate = useNavigate();
    return (
        <Stack
            direction="row"
            padding="2rem 1rem"
            spacing={2}
            flex="1"
            bgcolor={color}
            borderRadius="1rem"
            alignItems="center"
        >
            <Box flex="1">
                <img src={image} alt="" loading="lazy" />
            </Box>
            <Box flex="1">
                <Stack justifyContent="center" alignItems="start">
                    <Typography fontWeight="bold" fontSize="1.5rem">
                        {title}
                    </Typography>
                    <Typography fontSize=".85rem">{description}</Typography>
                    <Button
                        color="error"
                        variant="contained"
                        sx={{ marginTop: "1rem" }}
                        onClick={() => navigate("/shop")}
                    >
                        Shop now
                    </Button>
                </Stack>
            </Box>
        </Stack>
    );
}
