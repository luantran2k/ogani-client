import { Container } from "@mui/material";
import { useParams } from "react-router-dom";

export interface IProductDetailPageProps {}

export default function ProductDetailPage(props: IProductDetailPageProps) {
    const { id } = useParams();
    return <Container maxWidth="lg">Product {id}</Container>;
}
