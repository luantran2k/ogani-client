import { Grid, Stack } from "@mui/material";
import BlogCard from "../../../components/Card/BlogCard";
import SectionTitle from "../../../components/Typography/SectionTitle";
import { BlogPreview } from "../../../types/Blog";

export interface IHomeBlogProps {}
const blogs: BlogPreview[] = [
    {
        id: 1,
        title: "Cooking tips make cooking simple",
        description:
            "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",
        image: "/images/blog/blog-1.jpg",
        comments: [],
        createAt: new Date(),
    },
    {
        id: 2,
        title: "6 ways to prepare breakfast for 30",
        description:
            "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",
        image: "/images/blog/blog-2.jpg",
        comments: [],
        createAt: new Date(),
    },
    {
        id: 3,
        title: "Visit the clean farm in the US",
        description:
            "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",
        image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*", //images/blog/blog-3.jpg",
        comments: [],
        createAt: new Date(),
    },
];

export default function HomeBlog(props: IHomeBlogProps) {
    return (
        <section id="homeBlog">
            <SectionTitle title={"From The Blog"} />
            <Grid container columnSpacing={4} rowSpacing={8}>
                {blogs.map((blog) => (
                    <Grid key={blog.id} item xs={12} sm={6} md={4}>
                        <BlogCard blog={blog} />
                    </Grid>
                ))}
            </Grid>
        </section>
    );
}
