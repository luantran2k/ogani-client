import { Facebook, Google } from "@mui/icons-material";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { Dispatch } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
    username: z.string().min(6, { message: "Minimum is 6 character" }),
    password: z.string().min(6, { message: "Minimum is 6 character" }),
});

export interface ILoginFormProps {
    setLogginForm: Dispatch<React.SetStateAction<boolean>>;
}

export default function LoginForm(props: ILoginFormProps) {
    const { setLogginForm } = props;
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
        mode: "all",
    });

    return (
        <form onSubmit={handleSubmit((d) => console.log(d))}>
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
                <Button
                    variant="outlined"
                    onClick={() =>
                        setLogginForm((isLogginForm) => !isLogginForm)
                    }
                >
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
