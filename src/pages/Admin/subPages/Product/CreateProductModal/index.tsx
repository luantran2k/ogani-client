import { Button, Stack, TextField, Typography } from "@mui/material";
import { useRef } from "react";
import AppModal, {
    AppModalRef,
    IAppModalProps,
} from "../../../../../components/Modal";

export interface ICreateProductModalProps {}

export default function CreateProductModal(props: ICreateProductModalProps) {
    const appModalRef = useRef<AppModalRef>(null);
    return (
        <AppModal trigger={<Button variant="contained">Create</Button>}>
            <form>
                <Stack spacing={2}>
                    <TextField label="Name" fullWidth />
                    <TextField label="Name" fullWidth />
                    <TextField label="Name" fullWidth />
                    <TextField label="Name" fullWidth />
                    <TextField label="Name" fullWidth />
                </Stack>
            </form>
        </AppModal>
    );
}
