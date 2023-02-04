import { User } from "../User";
import { BlogComment } from "./Comment";

export interface Blog {
    id: number;
    author: User;
    title: string;
    image: string;
    description: string;
    comments: BlogComment[];
    createAt: Date;
    updateAt: Date;
}
export type BlogPreview = Pick<
    Blog,
    "id" | "createAt" | "comments" | "title" | "description" | "image"
>;
