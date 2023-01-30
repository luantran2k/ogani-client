import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/scss/index.scss";
import RootLayout from "./layouts/Root";
import BlogsPage from "./pages/Blog";
import ContactPage from "./pages/Contact";
import HomePage from "./pages/Home";
import ShopPage from "./pages/Shop";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RootLayout />}>
                    <Route index element={<HomePage />}></Route>
                    <Route path="shop" element={<ShopPage />}></Route>
                    <Route path="blogs" element={<BlogsPage />}></Route>
                    <Route path="contact" element={<ContactPage />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
