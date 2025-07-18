import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import UserLayout from "./components/Layout/UserLayout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import CollectionPage from "./pages/CollectionPage";
import ProductDetails from "./components/Products/ProductDetails";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderSuccessPage from "./pages/OrderSuccessPage";
import OrderCancelPage from "./pages/OrderCancelPage";
import OrderHistoryPage from "./pages/OrderHistoryPage";
import AdminHomePage from "./pages/AdminHomePage";
import AdminLayout from "./components/Layout/AdminLayout";
const App = () => {
    return (
        <BrowserRouter>
            <Toaster position="top-right" />
            <Routes>
                <Route path="/" element={<UserLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="register" element={<RegisterPage />} />
                    <Route path="profile" element={<ProfilePage />} />
                    <Route path="collections/:collection" element={<CollectionPage />} />
                    <Route path="product/:id" element={<ProductDetails />} />
                    <Route path="cart" element={<CartPage />} />
                    <Route path="checkout" element={<CheckoutPage />} />
                    <Route path="order-success" element={<OrderSuccessPage />} />
                    <Route path="order-cancel" element={<OrderCancelPage />} />
                    <Route path="order-history" element={<OrderHistoryPage />} />
                </Route>

                <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<AdminHomePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
