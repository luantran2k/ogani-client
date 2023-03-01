import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/scss/index.scss";
import AppNotifications from "./components/AppNotifications";
import ElasticLoading from "./components/Loading/ElasticLoading";
const LoginForm = lazy(() => import("./pages/Login/LoginForm"));
const RegisterForm = lazy(() => import("./pages/Login/RegisterForm"));
const ProductPage = lazy(() => import("./pages/Product"));
const ProductDetailPage = lazy(() => import("./pages/Product/ProductDetail"));
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
const CreateProductPage = lazy(
    () => import("./pages/Admin/subPages/Product/CreateProduct")
);
const CheckoutPage = lazy(() => import("./pages/Checkout"));

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
                        <Route
                            path="checkout"
                            element={
                                <Suspense fallback={<ElasticLoading />}>
                                    <CheckoutPage />
                                </Suspense>
                            }
                        ></Route>
                        <Route path="products">
                            <Route
                                index
                                element={
                                    <Suspense fallback={<ElasticLoading />}>
                                        <ProductPage />
                                    </Suspense>
                                }
                            ></Route>
                            <Route
                                path=":id"
                                element={
                                    <Suspense fallback={<ElasticLoading />}>
                                        <ProductDetailPage />
                                    </Suspense>
                                }
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
                        <Route path="products">
                            <Route
                                index
                                element={
                                    <Suspense fallback={<ElasticLoading />}>
                                        <AdminProductPage />
                                    </Suspense>
                                }
                            ></Route>
                            <Route
                                path="create"
                                element={
                                    <Suspense fallback={<ElasticLoading />}>
                                        <CreateProductPage />
                                    </Suspense>
                                }
                            ></Route>
                        </Route>
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
                        <Route
                            index
                            element={
                                <Suspense fallback={<ElasticLoading />}>
                                    <LoginForm />
                                </Suspense>
                            }
                        ></Route>
                        <Route
                            path="register"
                            element={
                                <Suspense fallback={<ElasticLoading />}>
                                    <RegisterForm />
                                </Suspense>
                            }
                        ></Route>
                    </Route>
                    <Route path="*" element={<h1>Not found</h1>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
