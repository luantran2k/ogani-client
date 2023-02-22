import { Stack } from "@mui/material";
import { lightGreen } from "@mui/material/colors";
import { ProductCategory } from "../../../../schemas/productCategory";

export interface IFeatureOptionsProps {
    active: number | undefined;
    setActive: React.Dispatch<React.SetStateAction<number | undefined>>;
    categories?: ProductCategory[];
}

export default function FeatureOptions(props: IFeatureOptionsProps) {
    const { active, setActive, categories } = props;
    return (
        <Stack
            justifyContent="center"
            direction="row"
            flexWrap="wrap"
            columnGap={4}
            rowGap={1}
            marginBottom={6}
            sx={{
                li: {
                    listStyle: "none",
                    cursor: "pointer",
                    fontSize: "1.1rem",
                    ":hover": {
                        color: lightGreen[700],
                    },
                },
                ".active": {
                    borderBottom: `2px solid ${lightGreen[700]}`,
                },
            }}
        >
            <li
                key={"all"}
                className={active === undefined ? "active" : ""}
                onClick={() => setActive(undefined)}
            >
                All
            </li>
            {categories ? (
                categories.map((category, index) => (
                    <li
                        key={category.id}
                        className={active == category.id ? "active" : ""}
                        onClick={() => setActive(category.id)}
                    >
                        {category.name}
                    </li>
                ))
            ) : (
                <p>loading</p>
            )}
        </Stack>
    );
}
