import { DollarSign, Package, ShoppingCart, Users } from "lucide-react";

const AnalyticsSummary = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                        <p className="text-2xl font-bold text-gray-900 mt-2">$12,345.67</p>
                    </div>
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        <DollarSign className="h-6 w-6 text-gray-600" />
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-gray-600">Total Orders</p>
                        <p className="text-2xl font-bold text-gray-900 mt-2">1,234</p>
                    </div>
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        <ShoppingCart className="h-6 w-6 text-gray-600" />
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-gray-600">Total Products</p>
                        <p className="text-2xl font-bold text-gray-900 mt-2">156</p>
                    </div>
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        <Package className="h-6 w-6 text-gray-600" />
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-gray-600">Total Users</p>
                        <p className="text-2xl font-bold text-gray-900 mt-2">5,678</p>
                    </div>
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        <Users className="h-6 w-6 text-gray-600" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnalyticsSummary;
