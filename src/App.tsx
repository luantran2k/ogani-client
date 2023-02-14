import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/scss/index.scss";
import AppNotifications from "./components/AppNotifications";
import ElasticLoading from "./components/Loading/ElasticLoading";
import LoginForm from "./pages/Login/LoginForm";
import RegisterForm from "./pages/Login/RegisterForm";
import ProductPage from "./pages/Product";
import ProductDetailPage from "./pages/Product/ProductDetail";
import { request } from "./utils/request";
const RootLayout = lazy(() => import("./layouts/Root"));
const BlogsPage = lazy(() => import("./pages/Blog"));
const ContactPage = lazy(() => import("./pages/Contact"));
const HomePage = lazy(() => import("./pages/Home"));
const ShopPage = lazy(() => import("./pages/Shop"));
const Login = lazy(() => import("./pages/Login"));
const AdminPage = lazy(() => import("./pages/Admin"));
const AdminDashboardPage = lazy(
    () => import("./pages/Admin/subPages/Dashboard")
);
const AdminProductPage = lazy(() => import("./pages/Admin/subPages/Product"));
const AdminCategoryPage = lazy(() => import("./pages/Admin/subPages/Category"));
const AdminUserPage = lazy(() => import("./pages/Admin/subPages/User"));
const AdminBlogPage = lazy(() => import("./pages/Admin/subPages/Blog"));

function App() {
    return (
        <>
            <AppNotifications />
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Suspense fallback={<ElasticLoading />}>
                                <RootLayout />
                            </Suspense>
                        }
                    >
                        <Route
                            index
                            element={
                                <Suspense fallback={<ElasticLoading />}>
                                    <HomePage />
                                </Suspense>
                            }
                        ></Route>
                        <Route
                            path="shop"
                            element={
                                <Suspense fallback={<ElasticLoading />}>
                                    <ShopPage />
                                </Suspense>
                            }
                        ></Route>
                        <Route path="products">
                            <Route index element={<ProductPage />}></Route>
                            <Route
                                path=":id"
                                element={<ProductDetailPage />}
                            ></Route>
                        </Route>
                        <Route
                            path="blogs"
                            element={
                                <Suspense fallback={<ElasticLoading />}>
                                    <BlogsPage />
                                </Suspense>
                            }
                        ></Route>
                        <Route
                            path="contact"
                            element={
                                <Suspense fallback={<ElasticLoading />}>
                                    <ContactPage />
                                </Suspense>
                            }
                        ></Route>
                    </Route>
                    <Route
                        path="admin"
                        element={
                            <Suspense fallback={<ElasticLoading />}>
                                <AdminPage />
                            </Suspense>
                        }
                    >
                        <Route
                            index
                            element={
                                <Suspense fallback={<ElasticLoading />}>
                                    <AdminDashboardPage />
                                </Suspense>
                            }
                        ></Route>
                        <Route
                            path="dashboard"
                            element={
                                <Suspense fallback={<ElasticLoading />}>
                                    <AdminDashboardPage />
                                </Suspense>
                            }
                        ></Route>
                        <Route
                            path="products"
                            element={
                                <Suspense fallback={<ElasticLoading />}>
                                    <AdminProductPage />
                                </Suspense>
                            }
                        ></Route>
                        <Route
                            path="categories"
                            element={
                                <Suspense fallback={<ElasticLoading />}>
                                    <AdminCategoryPage />
                                </Suspense>
                            }
                        ></Route>
                        <Route
                            path="users"
                            element={
                                <Suspense fallback={<ElasticLoading />}>
                                    <AdminUserPage />
                                </Suspense>
                            }
                        ></Route>
                        <Route
                            path="blogs"
                            element={
                                <Suspense fallback={<ElasticLoading />}>
                                    <AdminBlogPage />
                                </Suspense>
                            }
                        ></Route>
                    </Route>
                    <Route
                        path="login"
                        element={
                            <Suspense fallback={<ElasticLoading />}>
                                <Login />
                            </Suspense>
                        }
                    >
                        <Route index element={<LoginForm />}></Route>
                        <Route
                            path="register"
                            element={<RegisterForm />}
                        ></Route>
                    </Route>
                    <Route path="*" element={<h1>Not found</h1>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
