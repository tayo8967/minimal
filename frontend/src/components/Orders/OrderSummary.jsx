import { CircleCheckBig, Clock, Package, Truck } from "lucide-react";

const OrderSummary = () => {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Order History</h1>
                <p className="text-gray-600 mt-2">Track and manage all your orders in one place</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Total Orders */}
                <div className="bg-white rounded-lg border border-gray-200 p-4">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                            <Package className="h-5 w-5 text-gray-600" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900">25</p>
                            <p className="text-sm text-gray-600">Total Orders</p>
                        </div>
                    </div>
                </div>

                {/* Delivered Status */}
                <div className="bg-white rounded-lg border border-gray-200 p-4">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                            <CircleCheckBig className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900">17</p>
                            <p className="text-sm text-gray-600">Delivered</p>
                        </div>
                    </div>
                </div>

                {/* Shipped Status */}
                <div className="bg-white rounded-lg border border-gray-200 p-4">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Truck className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900">2</p>
                            <p className="text-sm text-gray-600">Shipped</p>
                        </div>
                    </div>
                </div>

                {/* Processing Status */}
                <div className="bg-white rounded-lg border border-gray-200 p-4">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                            <Clock className="h-5 w-5 text-yellow-600" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900">5</p>
                            <p className="text-sm text-gray-600">Processing</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;
