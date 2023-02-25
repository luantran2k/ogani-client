import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { BOX_SHADOW } from "../../../const/style";
import { ProductCategory } from "../../../schemas/productCategory";
import styles from "./styles.module.scss";
export interface ICategoryCardProps {
    category: ProductCategory;
}

export default function CategoryCard(props: ICategoryCardProps) {
    const { category } = props;
    const { id, image, name } = category;
    return (
        <Link to={"/shop?categoryId=" + id}>
            <Box
                position="relative"
                borderRadius="1rem"
                overflow="hidden"
                height="16rem"
                sx={{ userSelect: "none", cursor: "pointer" }}
            >
                <img
                    src={image}
                    alt={name || ""}
                    className={styles.backgroundImage}
                />
                <Typography
                    variant="caption"
                    position="absolute"
                    bottom="1.4rem"
                    left="1.4rem"
                    right="1.4rem"
                    bgcolor="white"
                    padding=".4rem"
                    fontWeight="bold"
                    fontSize="1rem"
                    textAlign="center"
                    textTransform="uppercase"
                    letterSpacing=".1rem"
                    textOverflow="ellipsis"
                    borderRadius=".4rem"
                    boxShadow={BOX_SHADOW}
                >
                    {name}
                </Typography>
            </Box>
        </Link>
    );
}
