import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar />
            {/* Main content */}
            <main className="min-h-screen">
                <Outlet />
            </main>
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default UserLayout;
