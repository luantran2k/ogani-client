import { Box, Stack } from "@mui/material";
import { lightGreen, teal } from "@mui/material/colors";
import { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import loginImage from "../../assets/images/login.jpg";
import logo from "../../assets/images/logo.png";
import { BOX_SHADOW_LARGE } from "../../const/style";
import { useAuthStore } from "../../stores/authStore";

export interface ILoginPageProps {}

export default function LoginPage(props: ILoginPageProps) {
    const { info } = useAuthStore();
    const navigate = useNavigate();
    useEffect(() => {
        if (info) {
            return navigate("/");
        }
    }, []);
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="100vh"
            sx={{
                background: `linear-gradient(45deg,${lightGreen[200]} 25%, ${teal[200]} 100%)`,
            }}
        >
            <Stack
                direction="row"
                height="80vh"
                width="100%"
                maxWidth="60rem"
                justifyContent="center"
                borderRadius="1rem"
                overflow="hidden"
                bgcolor="white"
                margin="0 2rem"
                boxShadow={BOX_SHADOW_LARGE}
            >
                <Box
                    flex={{ sm: "1 1 50%", md: "1 1 60%" }}
                    display={{ xs: "none", sm: "flex" }}
                    alignItems="center"
                >
                    <img
                        src={loginImage}
                        alt=""
                        width="100%"
                        style={{ objectFit: "cover" }}
                    />
                </Box>
                <Box
                    className="hideScrollbar"
                    flex={{ xs: "1 1 100%", sm: "1 1 50%", md: "1 1 40%" }}
                    display="flex"
                    margin={{ xs: "0 1rem", sm: "0 2rem" }}
                    justifyContent="center"
                    sx={{
                        overflowY: "auto",
                    }}
                >
                    <Box
                        padding={{ xs: ".4rem", sm: "1rem", md: "2rem" }}
                        width="100%"
                        sx={{}}
                    >
                        <Box width="fit-content" sx={{ margin: "1rem auto" }}>
                            <img src={logo} alt="" />
                        </Box>
                        <Outlet />
                    </Box>
                </Box>
            </Stack>
        </Box>
    );
}
