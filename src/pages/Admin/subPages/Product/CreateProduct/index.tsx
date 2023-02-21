import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Button,
    Container,
    Grid,
    InputLabel,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { ChangeEvent, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { getProductCategories } from "../../../../../apis/productCategories";
import ImageListPreview from "../../../../../components/ImageListPreview";
import ImageInput from "../../../../../components/Inputs/ImageInput";
import MultiSelectChip from "../../../../../components/Inputs/MultiSelectChip";
import RichTextEditor from "../../../../../components/RichTextEditor";
import { useProductCategories } from "../../../../../hooks/productCategories";
import {
    createProductSchema,
    ProductCreate,
} from "../../../../../schemas/product";
import { ProductCategory } from "../../../../../schemas/productCategory";
import ProductVariantList, { CreateProductVariant } from "./Variants";

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
    const variantsRef = useRef<CreateProductVariant[]>([]);
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
            variants: variantsRef.current,
        },
    });

    const { productCategoriesQuery } = useProductCategories();
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
        console.log(data);
    };
    const onErrors = (errors: any) => {
        console.log(errors);
    };
    return (
        <Container fixed>
            <Typography variant="h5" align="center" marginBottom="1rem">
                Create new product
            </Typography>
            <form onSubmit={handleSubmit(onSubmit, onErrors)}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            {...register("name")}
                            error={Boolean(errors.name?.message)}
                            helperText={errors.name?.message}
                            label="Name"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <MultiSelectChip<ProductCategory>
                            items={categories?.productCategories || []}
                            onChange={(items) => {
                                setValue("categories", items);
                            }}
                            label="Categories"
                            errorMessages={errors.categories?.message}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            {...register("description")}
                            error={Boolean(errors.description?.message)}
                            helperText={errors.description?.message}
                            label="Description"
                            multiline
                            fullWidth
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        margin="2rem 0"
                        display="flex"
                        justifyContent="center"
                    >
                        <ImageInput
                            error={errors.images?.message}
                            onChange={handleChangeImages}
                        />
                    </Grid>
                    {images.length > 0 && (
                        <Grid item xs={12}>
                            <ImageListPreview
                                images={images}
                                setImages={setImages}
                            />
                        </Grid>
                    )}
                    <Grid item xs={12}>
                        <InputLabel>Detail</InputLabel>
                        <RichTextEditor />
                    </Grid>
                    <Grid item xs={12}>
                        <ProductVariantList variantsRef={variantsRef} />
                    </Grid>

                    <Grid item xs={12}>
                        <Stack
                            direction="row"
                            justifyContent="center"
                            spacing={1}
                        >
                            <Button type="reset" variant="outlined">
                                Clear
                            </Button>
                            <Button type="submit" variant="contained">
                                Create
                            </Button>
                        </Stack>
                    </Grid>
                </Grid>
            </form>

            <DevTool control={control} placement="top-right" />
        </Container>
    );
}
