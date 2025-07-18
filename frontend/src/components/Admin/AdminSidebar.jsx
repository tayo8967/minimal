import { ArrowLeft, BarChart3, LayoutDashboard, LogOut, Package, Settings, ShoppingCart, Users } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const AdminSidebar = ({ profile }) => {
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate("/login");
    };

    return (
        <div className="flex flex-col h-full">
            <div className="p-6 border-b border-gray-200">
                <Link to="/" className="text-2xl font-bold text-black">
                    MINIMAL
                </Link>
                <p className="text-sm text-gray-600 mt-1">Admin Panel</p>
            </div>
            {/* User */}
            <div className="p-4 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium text-gray-600">{profile.name[0]}</span>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-900">{profile.name}</p>
                        <p className="text-xs text-gray-600">{profile.role === "admin" && "Administrator"}</p>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4">
                <ul className="space-y-2">
                    <li>
                        <NavLink
                            to="/admin"
                            className={({ isActive }) =>
                                isActive
                                    ? "w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors bg-black text-white"
                                    : "w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors text-gray-700 hover:bg-gray-100"
                            }
                        >
                            <LayoutDashboard className="h-5 w-5" />
                            <span className="font-medium">Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/admin/products"
                            className={({ isActive }) =>
                                isActive
                                    ? "w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors bg-black text-white"
                                    : "w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors text-gray-700 hover:bg-gray-100"
                            }
                        >
                            <Package className="h-5 w-5" />
                            <span className="font-medium">Products</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/admin/orders"
                            className={({ isActive }) =>
                                isActive
                                    ? "w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors bg-black text-white"
                                    : "w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors text-gray-700 hover:bg-gray-100"
                            }
                        >
                            <ShoppingCart className="h-5 w-5" />
                            <span className="font-medium">Orders</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/admin/users"
                            className={({ isActive }) =>
                                isActive
                                    ? "w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors bg-black text-white"
                                    : "w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors text-gray-700 hover:bg-gray-100"
                            }
                        >
                            <Users className="h-5 w-5" />
                            <span className="font-medium">Users</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/admin/analytics"
                            className={({ isActive }) =>
                                isActive
                                    ? "w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors bg-black text-white"
                                    : "w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors text-gray-700 hover:bg-gray-100"
                            }
                        >
                            <BarChart3 className="h-5 w-5" />
                            <span className="font-medium">Analytics</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/admin/settings"
                            className={({ isActive }) =>
                                isActive
                                    ? "w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors bg-black text-white"
                                    : "w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors text-gray-700 hover:bg-gray-100"
                            }
                        >
                            <Settings className="h-5 w-5" />
                            <span className="font-medium">Settings</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <div className="p-4 border-t border-gray-200">
                <Link
                    to="/"
                    className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors mb-2"
                >
                    <ArrowLeft className="h-5 w-5" />
                    <span className="font-medium">Back to Store</span>
                </Link>
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                    <LogOut className="h-5 w-5" />
                    <span className="font-medium">Logout</span>
                </button>
            </div>
        </div>
    );
};

export default AdminSidebar;
