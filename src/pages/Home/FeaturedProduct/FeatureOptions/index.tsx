import { Stack } from "@mui/material";
import { lightGreen } from "@mui/material/colors";
import { ProductCategory } from "../../../../schemas/productCategory";
const productItems: { title: string; value: string }[] = [
    {
        title: "All",
        value: "all",
    },
    {
        title: "Oranges",
        value: "oranges",
    },
    {
        title: "Fresh Meat",
        value: "fresh-meat",
    },
    {
        title: "Vegetables",
        value: "vegetables",
    },
    {
        title: "Fastfood",
        value: "fastfood",
    },
];
export interface IFeatureOptionsProps {
    active: string;
    setActive: React.Dispatch<React.SetStateAction<string>>;
}

export default function FeatureOptions(props: IFeatureOptionsProps) {
    const { active, setActive } = props;
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
            {productItems.map((item, index) => (
                <li
                    key={item.value}
                    className={active == item.value ? "active" : ""}
                    onClick={() => setActive(item.value)}
                >
                    {item.title}
                </li>
            ))}
        </Stack>
    );
}
