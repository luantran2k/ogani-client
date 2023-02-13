import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowBack } from "@mui/icons-material";
import { Button, Stack, TextField } from "@mui/material";
import { Dispatch } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { AuthStoreState, useAuthStore } from "../../../stores/authStore";
import { useNotificationStore } from "../../../stores/notificationStore";
import { request } from "../../../utils/request";
import GetCodeButton from "./GetCodeButton";

const registerForm = z
    .object({
        username: z.string().min(5, { message: "Minimum is 5 character" }),
        password: z.string().min(5, { message: "Minimum is 5 character" }),
        confirmPassword: z.string(),
        email: z.string().email({ message: "Must be a valid email address" }),
        verificationCode: z.string(),
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

export interface IRegisterFormProps {}

export default function RegisterForm(props: IRegisterFormProps) {
    const {
        register,
        handleSubmit,
        setError,
        getValues,
        watch,
        formState: { errors },
    } = useForm<registerFormType>({
        resolver: zodResolver(registerForm),
        mode: "all",
    });
    const { pushNotification } = useNotificationStore();
    const { setUser } = useAuthStore();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<registerFormType> = async (data) => {
        const { confirmPassword, ...payload } = data;
        const res = await request.post<AuthStoreState>("auth/register", {
            ...payload,
        });
        if (res) {
            console.log(res);
            setUser(res.data);
            pushNotification({
                message: "Registration successful",
                severity: "success",
            });
            navigate("/");
        }
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
                        type="email"
                        label="Email Address"
                        {...register("email")}
                        error={Boolean(errors.email?.message)}
                        helperText={
                            errors.email?.message && `${errors.email?.message}`
                        }
                    />
                    <Stack direction="row" spacing={1}>
                        <TextField
                            fullWidth
                            label="Verification code"
                            {...register("verificationCode")}
                            error={Boolean(errors.verificationCode?.message)}
                            helperText={
                                errors.verificationCode?.message &&
                                `${errors.verificationCode?.message}`
                            }
                            InputProps={{
                                sx: {
                                    height: "100%",
                                },
                            }}
                        />
                        <GetCodeButton
                            email={watch("email")}
                            isValidEmail={!Boolean(errors.email?.message)}
                        />
                    </Stack>
                </Stack>
                <Button variant="contained" type="submit">
                    Register
                </Button>
                <Button
                    startIcon={<ArrowBack />}
                    onClick={() => navigate("/login")}
                >
                    Login
                </Button>
            </Stack>
        </form>
    );
}
