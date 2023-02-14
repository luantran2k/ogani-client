import { MenuItem, Stack } from "@mui/material";
import { lightGreen } from "@mui/material/colors";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
export interface IAdminSideBarProps {}

export default function AdminSideBar(props: IAdminSideBarProps) {
    return (
        <Stack>
            <Link to="/">
                <img
                    src={logo}
                    alt=""
                    style={{
                        display: "block",
                        margin: "2rem auto",
                    }}
                />
            </Link>
            <Stack
                sx={{
                    li: {
                        fontWeight: "500",
                        fontSize: "1.2rem",
                        transition: "all 0.2s ease-in-out",
                    },
                    ".active": {
                        li: {
                            color: "white",
                            backgroundColor: lightGreen[600],
                        },
                    },
                }}
            >
                <NavLink to={"dashboard"}>
                    <MenuItem>Dashboard</MenuItem>
                </NavLink>
                <NavLink to={"products"}>
                    <MenuItem>Product</MenuItem>
                </NavLink>
                <NavLink to={"categories"}>
                    <MenuItem>Category</MenuItem>
                </NavLink>
                <NavLink to={"users"}>
                    <MenuItem>User</MenuItem>
                </NavLink>
                <NavLink to={"blogs"}>
                    <MenuItem>Blog</MenuItem>
                </NavLink>
            </Stack>
        </Stack>
    );
}
