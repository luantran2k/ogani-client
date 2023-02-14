import { zodResolver } from "@hookform/resolvers/zod";
import { Facebook, Google } from "@mui/icons-material";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { z } from "zod";
import { AuthStoreState, useAuthStore } from "../../../stores/authStore";
import { request } from "../../../utils/request";

const loginFormSchema = z.object({
    username: z.string().min(5, { message: "Minimum is 5 character" }),
    password: z.string().min(5, { message: "Minimum is 5 character" }),
});

type loginFormType = z.infer<typeof loginFormSchema>;

export interface ILoginFormProps {}

export default function LoginForm(props: ILoginFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<loginFormType>({
        resolver: zodResolver(loginFormSchema),
        mode: "all",
    });
    const location = useLocation();
    const { setUser } = useAuthStore();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<loginFormType> = async (data) => {
        const res = await request.post<AuthStoreState>("auth/login", {
            ...data,
        });
        if (res) {
            setUser(res.data);
            const from = location.state?.from || "/";
            console.log(location.state);
            console.log(from);
            navigate(from);
        }
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={1} width="100%">
                <TextField
                    fullWidth
                    label="Username"
                    {...register("username")}
                    error={Boolean(errors.username?.message)}
                    helperText={
                        errors.username?.message &&
                        `${errors.username?.message}`
                    }
                />
                <TextField
                    fullWidth
                    type="password"
                    label="Password"
                    {...register("password")}
                    error={Boolean(errors.password?.message)}
                    helperText={
                        errors.password?.message &&
                        `${errors.password?.message}`
                    }
                />
                <Link to="/" style={{ fontSize: ".8rem", textAlign: "right" }}>
                    Forgot password
                </Link>
            </Stack>
            <Stack marginTop={2} spacing={2}>
                <Button variant="contained" type="submit">
                    Login
                </Button>
                <Button variant="outlined" onClick={() => navigate("register")}>
                    Register
                </Button>
                <Typography textAlign="center">or</Typography>
                <Button startIcon={<Google />} variant="outlined">
                    Login with Google
                </Button>
                <Button startIcon={<Facebook />} variant="outlined">
                    Login with Facebook
                </Button>
            </Stack>
            <Link
                to="/"
                style={{
                    display: "block",
                    textAlign: "center",
                    marginTop: "1rem",
                }}
            >
                Back to home
            </Link>
        </form>
    );
}
