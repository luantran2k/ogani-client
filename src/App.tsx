import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/scss/index.scss";
import ElasticLoading from "./components/Loading/ElasticLoading";
const RootLayout = lazy(() => import("./layouts/Root"));
const BlogsPage = lazy(() => import("./pages/Blog"));
const ContactPage = lazy(() => import("./pages/Contact"));
const HomePage = lazy(() => import("./pages/Home"));
const ShopPage = lazy(() => import("./pages/Shop"));

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
                            <Suspense fallback={<p>Loading...</p>}>
                                <ShopPage />
                            </Suspense>
                        }
                    ></Route>
                    <Route
                        path="blogs"
                        element={
                            <Suspense fallback={<p>Loading...</p>}>
                                <BlogsPage />
                            </Suspense>
                        }
                    ></Route>
                    <Route
                        path="contact"
                        element={
                            <Suspense fallback={<p>Loading...</p>}>
                                <ContactPage />
                            </Suspense>
                        }
                    ></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
