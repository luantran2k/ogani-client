import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowBack } from "@mui/icons-material";
import { Button, Stack, TextField } from "@mui/material";
import { Dispatch } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const registerForm = z
    .object({
        username: z.string().min(6, { message: "Minimum is 6 character" }),
        password: z.string().min(6, { message: "Minimum is 6 character" }),
        confirmPassword: z.string(),
        email: z.string().email({ message: "Must be a valid email address" }),
        code: z.string().optional(),
    })
    .superRefine(({ confirmPassword, password }, ctx) => {
        if (confirmPassword !== password) {
            ctx.addIssue({
                code: "custom",
                path: ["confirmPassword"],
                message: "The passwords did not match",
            });
        }
    });
type registerFormType = typeof registerForm._output;
export interface IRegisterFormProps {
    setLogginForm: Dispatch<React.SetStateAction<boolean>>;
}

export default function RegisterForm(props: IRegisterFormProps) {
    const { setLogginForm } = props;
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<registerFormType>({
        resolver: zodResolver(registerForm),
        mode: "onBlur",
    });

    const onSubmit: SubmitHandler<registerFormType> = (data) => {
        console.log(data);
        // setError("code", {
        //     message: "Verification code failed",
        // });
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
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
                    <TextField
                        fullWidth
                        type="password"
                        label="Confirm Password"
                        {...register("confirmPassword")}
                        error={Boolean(errors.confirmPassword?.message)}
                        helperText={
                            errors.confirmPassword?.message &&
                            `${errors.confirmPassword?.message}`
                        }
                    />

                    <TextField
                        fullWidth
                        label="Email Address"
                        {...register("email")}
                        error={Boolean(errors.email?.message)}
                        helperText={
                            errors.email?.message && `${errors.email?.message}`
                        }
                    />
                    <TextField
                        fullWidth
                        label="Verification code"
                        {...register("code")}
                        error={Boolean(errors.code?.message)}
                        helperText={
                            errors.code?.message && `${errors.code?.message}`
                        }
                    />
                </Stack>
                <Button variant="contained" type="submit">
                    Register
                </Button>
                <Button
                    startIcon={<ArrowBack />}
                    onClick={() =>
                        setLogginForm((isLogginForm) => !isLogginForm)
                    }
                >
                    Login
                </Button>
            </Stack>
        </form>
    );
}
