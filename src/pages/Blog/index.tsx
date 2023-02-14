import { useAuth } from "../../hooks/auth";

export interface IBlogsPageProps {}

export default function BlogsPage(props: IBlogsPageProps) {
    useAuth();
    return <div>Blog page</div>;
}
