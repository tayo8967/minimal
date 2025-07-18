import { Menu } from "lucide-react";
import { useState } from "react";
import AdminSidebar from "../Admin/AdminSidebar";

const profile = {
    name: "John Doe",
    role: "admin",
};

const AdminLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <main className="min-h-screen">
            <div className="min-h-screen bg-gray-50 flex">
                {/* Mobile Toggle Button */}
                <button
                    onClick={toggleSidebar}
                    className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md"
                >
                    <Menu className="h-6 w-6" />
                </button>

                {/* Overlay for mobile sidebar */}
                {isSidebarOpen && (
                    <div onClick={toggleSidebar} className="fixed inset-0 bg-black/50 z-40 lg:hidden"></div>
                )}

                {/* Sidebar */}
                <div
                    className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 -translate-x-full ${
                        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                >
                    <AdminSidebar profile={profile} />
                </div>
            </div>
        </main>
    );
};

export default AdminLayout;
