import { Link } from "react-router-dom";
import AnalyticsSummary from "../components/Admin/AnalyticsSummary";
import { Calendar, Eye, Package, Users } from "lucide-react";

const orders = [
    {
        _id: "ORD-001",
        name: "Bon Goe",
        date: "2024-01-15",
        totalPrice: 89.99,
        status: "Completed",
    },
    {
        _id: "ORD-002",
        name: "Jane Smith",
        date: "2024-01-15",
        totalPrice: 129.99,
        status: "Processing",
    },
    {
        _id: "ORD-003",
        name: "Mike Johnson",
        date: "2024-01-14",
        totalPrice: 59.99,
        status: "Shipped",
    },
    {
        _id: "ORD-004",
        name: "Sarah Wilson",
        date: "2024-01-14",
        totalPrice: 199.99,
        status: "Completed",
    },
    {
        _id: "ORD-005",
        name: "Tom Brown",
        date: "2024-01-13",
        totalPrice: 79.99,
        status: "Cancelled",
    },
];

const AdminHomePage = () => {
    return (
        <div className="p-6">
            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                    <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your store.</p>
                </div>

                <AnalyticsSummary />

                <div className="grid lg:grid-cols-2 gap-6">
                    {/* Recent Orders */}
                    <div className="bg-white rounded-lg border border-gray-200">
                        <div className="p-6 border-b border-gray-200">
                            <h2 className="text-lg font-semibold text-gray-900">Recent Orders</h2>
                        </div>
                        <div className="divide-y divide-gray-200">
                            {orders.map((order, index) => (
                                <div key={index} className="p-6 flex items-center justify-between">
                                    <div>
                                        <p className="font-medium text-gray-900">{order._id}</p>
                                        <p className="text-sm text-gray-600">{order.name}</p>
                                        <p className="text-xs text-gray-500">{order.date}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-semibold text-gray-900">${order.totalPrice}</p>
                                        <span
                                            className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                                                order.status === "Completed"
                                                    ? "bg-green-100 text-green-800"
                                                    : order.status === "Processing"
                                                    ? "bg-yellow-100 text-yellow-800"
                                                    : order.status === "Shipped"
                                                    ? "bg-blue-100 text-blue-800"
                                                    : "bg-red-100 text-red-800"
                                            }`}
                                        >
                                            {order.status.toLocaleLowerCase()}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="p-6 border-t border-gray-200 text-center">
                            <Link
                                to="/admin/orders"
                                className="w-full text-center text-sm text-gray-600 hover:text-black transition-colors"
                            >
                                View All Orders →
                            </Link>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-white rounded-lg border border-gray-200">
                        <div className="p-6 border-b border-gray-200">
                            <h2 className="text-lg font-semibold text-gray-900">Quick Actions</h2>
                        </div>

                        <div className="p-6 space-y-4">
                            <button className="w-full flex items-center space-x-3 p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                                <Package className="h-5 w-5 text-gray-600" />
                                <span className="font-medium text-gray-900">Add New Product</span>
                            </button>

                            <button className="w-full flex items-center space-x-3 p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                                <Eye className="h-5 w-5 text-gray-600" />
                                <span className="font-medium text-gray-900">View Analytics</span>
                            </button>

                            <button className="w-full flex items-center space-x-3 p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                                <Users className="h-5 w-5 text-gray-600" />
                                <span className="font-medium text-gray-900">Manage Users</span>
                            </button>

                            <button className="w-full flex items-center space-x-3 p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                                <Calendar className="h-5 w-5 text-gray-600" />
                                <span className="font-medium text-gray-900">Schedule Report</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHomePage;
