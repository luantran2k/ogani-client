export interface User {
    id: number;
    userName: string;
    name: string;
    email: string;
    phone: string;
    avatar: string;
    role: string;
}

export type UserInfo = Pick<
    User,
    "id" | "userName" | "name" | "email" | "avatar" | "phone" | "role"
>;
