import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Box,
    Button,
    Container,
    InputLabel,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { ChangeEvent, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import ImageListPreview from "../../../../../components/ImageListPreview";
import ImageInput from "../../../../../components/Inputs/ImageInput";
import MultiSelectChip from "../../../../../components/Inputs/MultiSelectChip";
import RichTextEditor from "../../../../../components/RichTextEditor";
import { useProductCategories } from "../../../../../hooks/productCategories";
import { useProducts } from "../../../../../hooks/products";
import {
    createProductSchema,
    ProductCreate,
} from "../../../../../schemas/product";
import { ProductCategory } from "../../../../../schemas/productCategory";
import { useNotificationStore } from "../../../../../stores/notificationStore";
import ProductVariantList, { VariantRef } from "./Variants";

const productCategories: ProductCategory[] = [
    {
        id: 1,
        name: "Vegetable",
        image: "",
    },
    {
        id: 2,
        name: "Meat",
        image: "",
    },
    {
        id: 3,
        name: "Egg",
        image: "",
    },
    {
        id: 4,
        name: "Fruit",
        image: "",
    },
];
export interface ICreateProductPageProps {}

export default function CreateProductPage(props: ICreateProductPageProps) {
    const [images, setImages] = useState<{ id: string; file: File }[]>([]);
    const { pushNotification } = useNotificationStore();
    const naviagte = useNavigate();
    const variantsRef = useRef<VariantRef>({
        variants: [],
        vaildateVariant: () => {},
    });
    const detailRef = useRef("");
    const {
        register,
        handleSubmit,
        control,
        setValue,
        setError,
        formState: { errors },
    } = useForm<ProductCreate>({
        resolver: zodResolver(createProductSchema),
        defaultValues: {
            name: "",
            images: [],
            categories: [],
            description: "",
            detail: "",
            variants: variantsRef.current.variants,
        },
    });

    const { productCategoriesQuery } = useProductCategories();
    const { createProductMutation } = useProducts();
    const { data: categories, isError, isLoading } = productCategoriesQuery();
    const handleChangeImages = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.item(0)) {
            setImages((images) => {
                const newImages = [
                    ...images,
                    ...Array.from(e.target.files || []).map((file) => ({
                        id: uuidv4(),
                        file,
                    })),
                ];
                setValue(
                    "images",
                    newImages.map((image) => image.file)
                );
                return newImages;
            });
        }
    };

    const onSubmit: SubmitHandler<ProductCreate> = (data: ProductCreate) => {
        const newData = {
            ...data,
            variants: variantsRef.current.variants,
        };
        console.log("DATA", newData);
        createProductMutation.mutate(newData);
    };
    const onErrors = (errors: any) => {
        pushNotification({ severity: "error", message: "Check your inputs" });
    };
    return (
        <Container fixed>
            <Typography variant="h4" align="center" marginBottom="1rem">
                Create new Product
            </Typography>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    variantsRef.current.vaildateVariant();
                    setValue("variants", variantsRef.current.variants);
                    setValue("detail", detailRef.current);
                    handleSubmit(onSubmit, onErrors)();
                }}
            >
                <Stack direction="row" spacing={2}>
                    <Stack flex="1" spacing={4}>
                        <Stack spacing={2}>
                            <TextField
                                {...register("name")}
                                error={Boolean(errors.name?.message)}
                                helperText={errors.name?.message}
                                label="Name"
                                fullWidth
                            />
                            <MultiSelectChip<ProductCategory>
                                items={categories?.productCategories || []}
                                onChange={(items) => {
                                    setValue(
                                        "categories",
                                        items.map((item) => item.id)
                                    );
                                }}
                                label="Categories"
                                errorMessages={errors.categories?.message}
                            />
                            <TextField
                                {...register("description")}
                                error={Boolean(errors.description?.message)}
                                helperText={errors.description?.message}
                                label="Description"
                                multiline
                                fullWidth
                            />
                        </Stack>
                        <ImageInput
                            error={errors.images?.message}
                            onChange={handleChangeImages}
                        />

                        {images.length > 0 && (
                            <ImageListPreview
                                images={images}
                                setImages={setImages}
                            />
                        )}
                        <Box>
                            <InputLabel>Detail</InputLabel>
                            <RichTextEditor valueRef={detailRef} />
                        </Box>
                    </Stack>
                    <Stack flex="1" spacing={2}>
                        <ProductVariantList variantsRef={variantsRef} />
                    </Stack>
                </Stack>
                <Stack
                    direction="row"
                    justifyContent="center"
                    spacing={1}
                    marginTop={2}
                >
                    <Button
                        type="reset"
                        variant="outlined"
                        onClick={() => naviagte("../")}
                    >
                        Back
                    </Button>
                    <Button type="submit" variant="contained">
                        Create
                    </Button>
                </Stack>
            </form>

            <DevTool control={control} placement="top-right" />
        </Container>
    );
}
