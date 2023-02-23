import { Container } from "@mui/material";
import BreadCrumb from "../../components/BreadCrumb";

export interface IContactPageProps {}

export default function ContactPage(props: IContactPageProps) {
    return (
        <>
            <BreadCrumb path="Contact" />
            <Container maxWidth="lg"></Container>
        </>
    );
}
