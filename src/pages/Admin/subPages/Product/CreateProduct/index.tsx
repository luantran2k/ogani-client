import { useAutoAnimate } from "@formkit/auto-animate/react";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { Delete } from "@mui/icons-material";
import {
    Box,
    Button,
    Container,
    Grid,
    InputLabel,
    MenuItem,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import ImageListPreview from "../../../../../components/ImageListPreview";
import ImageInput from "../../../../../components/Inputs/ImageInput";
import MultiSelectChip from "../../../../../components/Inputs/MultiSelectChip";
import RichTextEditor from "../../../../../components/RichTextEditor";
import {
    createProductSchema,
    ProductCreate,
    ProductVariant,
    sizeEnum,
} from "../../../../../schemas/product";
import { ProductCategory } from "../../../../../schemas/productCategory";

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
    const emptyVariant: ProductVariant & { id: string } = {
        id: uuidv4(),
        price: 0,
        quantity: 0,
        size: "small",
    };
    const [variants, setVariants] = useState<
        (ProductVariant & { id: string })[]
    >([emptyVariant]);
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
            variants: variants,
        },
    });
    const [variantList] = useAutoAnimate();

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

    const handleRemoveVariant = (variantId: string) => {
        setVariants((variants) =>
            variants.filter((variant) => variant.id !== variantId)
        );
    };

    const onSubmit: SubmitHandler<ProductCreate> = (data: ProductCreate) => {
        console.log(data);
    };
    const onErrors = (errors: any) => {
        console.log(errors);
    };
    return (
        <Container fixed>
            <Typography variant="h5" align="center">
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
                            items={productCategories}
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
                    <Grid ref={variantList} item xs={12}>
                        {variants?.map((variant, index) => (
                            <Grid
                                container
                                spacing={2}
                                margin="1rem 0"
                                key={index}
                            >
                                <Grid item xs={12} display="flex">
                                    <Typography variant="h6">
                                        Variant {index + 1}
                                    </Typography>
                                    <Button
                                        color="error"
                                        onClick={() =>
                                            handleRemoveVariant(variant.id)
                                        }
                                    >
                                        <Delete />
                                    </Button>
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField
                                        type="number"
                                        label="Price"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField
                                        type="number"
                                        label="Sale percent"
                                        fullWidth
                                    />
                                </Grid>

                                <Grid item xs={3}>
                                    <TextField
                                        type="number"
                                        label="Quantity"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField label="Size" fullWidth select>
                                        {/* {JSON.stringify(sizeEnum)} */}
                                    </TextField>
                                </Grid>
                            </Grid>
                        ))}
                    </Grid>

                    <Grid item xs={12}>
                        <Stack
                            direction="row"
                            justifyContent="center"
                            spacing={1}
                        >
                            <Button
                                variant="outlined"
                                onClick={() =>
                                    setVariants((variants) => [
                                        ...variants,
                                        emptyVariant,
                                    ])
                                }
                            >
                                Create new variant
                            </Button>

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
