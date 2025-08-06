import { Calendar, CircleCheckBig, CircleX, Clock, Eye, Truck } from "lucide-react";

const AdminOrderList = ({ orders, openModal }) => {
    const handleStatusChange = (id, newStatus) => {
        //api to send updated order status
        console.log(`Order ${id} status updated: ${newStatus}`);
    };

    return (
        <div className="bg-white rounded-lg border border-gray-200">
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th className="text-left p-4 font-medium text-gray-900">Order</th>
                            <th className="text-left p-4 font-medium text-gray-900">Customer</th>
                            <th className="text-left p-4 font-medium text-gray-900">Date</th>
                            <th className="text-left p-4 font-medium text-gray-900">Status</th>
                            <th className="text-left p-4 font-medium text-gray-900">Total</th>
                            <th className="text-left p-4 font-medium text-gray-900">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {orders.map((order) => (
                            <tr key={order._id} className="hover:bg-gray-50">
                                {/* Order */}
                                <td className="p-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="flex -space-x-2">
                                            {order.products.slice(0, 3).map((product) => (
                                                <div
                                                    key={product._id}
                                                    className="w-8 h-8 bg-gray-100 rounded-full border-2 border-white overflow-hidden"
                                                >
                                                    <img
                                                        src={product.images[0].url}
                                                        alt={product.name}
                                                        className="w-full h-full object-cover text-transparent"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900">#{order._id}</p>
                                            <p className="text-sm text-gray-600">{order.products.length} items</p>
                                        </div>
                                    </div>
                                </td>

                                {/* Customer */}
                                <td className="p-4">
                                    <div>
                                        <p className="font-medium text-gray-900">
                                            {order.shippingAddress.firstName} {order.shippingAddress.lastName}
                                        </p>
                                        <p className="text-sm text-gray-600">{order.shippingAddress.city}</p>
                                    </div>
                                </td>

                                {/* Date */}
                                <td className="p-4">
                                    <div className="flex items-center space-x-1 text-sm text-gray-600">
                                        <Calendar className="h-4 w-4" />
                                        <span>
                                            {new Intl.DateTimeFormat("en-US", {
                                                month: "short",
                                                day: "2-digit",
                                                year: "numeric",
                                            }).format(new Date(order.date))}
                                        </span>
                                    </div>
                                </td>

                                {/* Status */}
                                <td className="p-4">
                                    <div className="flex items-center space-x-2">
                                        {order.orderStatus == "shipped" ? (
                                            <Truck className="h-4 w-4 text-blue-600" />
                                        ) : order.orderStatus == "processing" ? (
                                            <Clock className="h-4 w-4 text-yellow-600" />
                                        ) : order.orderStatus == "delivered" ? (
                                            <CircleCheckBig className="h-4 w-4 text-green-600" />
                                        ) : (
                                            <CircleX className="h-4 w-4 text-red-600" />
                                        )}

                                        <select
                                            id="orderStatus"
                                            value={order.orderStatus}
                                            onChange={(e) => handleStatusChange(order._id, e.target.value)}
                                            className={`text-sm border rounded px-2 py-1 ${
                                                order.orderStatus == "shipped"
                                                    ? "bg-blue-100 text-blue-800 border-blue-200"
                                                    : order.orderStatus == "processing"
                                                    ? "bg-yellow-100 text-yellow-800 border-yellow-200"
                                                    : order.orderStatus == "delivered"
                                                    ? "bg-green-100 text-green-800 border-green-200"
                                                    : "bg-red-100 text-red-800 border-red-200"
                                            }`}
                                        >
                                            <option value="processing">Processing</option>
                                            <option value="shipped">Shipped</option>
                                            <option value="delivered">Delivered</option>
                                            <option value="cancelled">Cancelled</option>
                                        </select>
                                    </div>
                                </td>

                                {/* Total */}
                                <td className="p-4">
                                    <p className="font-semibold text-gray-900">${order.totalPrice}</p>
                                </td>

                                <td className="p-4">
                                    {/* Actions */}
                                    <button
                                        onClick={() => openModal(order)}
                                        className="flex items-center space-x-1 text-gray-600 hover:text-black transition-colors"
                                    >
                                        <Eye className="h-4 w-4" />
                                        <span className="text-sm">View</span>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminOrderList;
