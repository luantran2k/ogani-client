import {
    AccessTime,
    LocalPhone,
    LocationOn,
    LocationOnOutlined,
    MailOutline,
} from "@mui/icons-material";
import {
    Box,
    Container,
    Grid,
    Stack,
    SvgIconTypeMap,
    TextField,
    Typography,
} from "@mui/material";
import { lightGreen } from "@mui/material/colors";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { ReactNode } from "react";
import BreadCrumb from "../../components/BreadCrumb";
import MessageForm from "./MessageForm";

export interface IContactPageProps {}
interface ContactItem {
    icon: ReactNode;
    title: string;
    description: string;
}

const items: ContactItem[] = [
    {
        icon: <LocalPhone />,
        title: "Phone",
        description: "+01-3-8888-6868",
    },
    {
        icon: <LocationOnOutlined />,
        title: "Address",
        description: "60-49 Road 11378 New York",
    },
    {
        icon: <AccessTime />,
        title: "Open time",
        description: "10:00 am to 23:00 pm",
    },
    {
        icon: <MailOutline />,
        title: "Email",
        description: "hello@colorlib.com",
    },
];

export default function ContactPage(props: IContactPageProps) {
    return (
        <>
            <BreadCrumb path="Contact" />
            <Container maxWidth="lg" sx={{ marginBottom: "4rem" }}>
                <Grid container justifyContent="center" spacing={4}>
                    {items.map((item, index) => (
                        <Grid item key={index} xs={12} sm={6} md={3}>
                            <Stack alignItems="center" spacing={1}>
                                <Box
                                    sx={{
                                        marginBottom: "1rem",
                                        ".MuiSvgIcon-root": {
                                            color: lightGreen[700],
                                            height: "2.8rem",
                                            width: "2.8rem",
                                        },
                                    }}
                                >
                                    {item.icon}
                                </Box>
                                <Typography>{item.title}</Typography>
                                <Typography>{item.description}</Typography>
                            </Stack>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49116.39176087041!2d-86.41867791216099!3d39.69977417971648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886ca48c841038a1%3A0x70cfba96bf847f0!2sPlainfield%2C%20IN%2C%20USA!5e0!3m2!1sen!2sbd!4v1586106673811!5m2!1sen!2sbd"
                height="500"
                style={{ border: 0, width: "100%" }}
            ></iframe>
            <Container maxWidth="lg" sx={{ marginTop: 9, marginBottom: 16 }}>
                <MessageForm />
            </Container>
        </>
    );
}
