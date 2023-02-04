import { User } from "../../User";

export interface BlogComment {
    id: number;
    user: User;
    content: string;
    createAt: number;
    updateAt: number;
}
