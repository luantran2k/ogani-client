import { Box } from "@mui/material";
import categoryImage1 from "../../../assets/images/categories/cat-1.jpg";
import categoryImage2 from "../../../assets/images/categories/cat-2.jpg";
import categoryImage3 from "../../../assets/images/categories/cat-3.jpg";
import categoryImage4 from "../../../assets/images/categories/cat-4.jpg";
import categoryImage5 from "../../../assets/images/categories/cat-5.jpg";
import categoryImage6 from "../../../assets/images/categories/cat-6.jpg";

export interface ISlideCardProps {}

export default function SlideCard(props: ISlideCardProps) {
    return (
        <Box>
            <img src={categoryImage1} alt="" />
        </Box>
    );
}
