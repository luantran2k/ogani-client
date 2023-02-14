import { useState } from "react";

export interface IAdminProductPageProps {}

export default function AdminProductPage(props: IAdminProductPageProps) {
    const [page, setPage] = useState(1);
    return <div>Product admin page</div>;
}
