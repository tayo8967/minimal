import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<UserLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
