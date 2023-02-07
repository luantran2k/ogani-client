import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/scss/index.scss";
import ElasticLoading from "./components/Loading/ElasticLoading";
import ProductPage from "./pages/Product";
import ProductDetailPage from "./pages/Product/ProductDetail";
const RootLayout = lazy(() => import("./layouts/Root"));
const BlogsPage = lazy(() => import("./pages/Blog"));
const ContactPage = lazy(() => import("./pages/Contact"));
const HomePage = lazy(() => import("./pages/Home"));
const ShopPage = lazy(() => import("./pages/Shop"));
const Login = lazy(() => import("./pages/Login"));

function App() {
    return (
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
                    path="login"
                    element={
                        <Suspense fallback={<ElasticLoading />}>
                            <Login />
                        </Suspense>
                    }
                ></Route>
                <Route path="*" element={<h1>Not found</h1>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
