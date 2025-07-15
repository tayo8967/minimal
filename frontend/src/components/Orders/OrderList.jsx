import {
    Calendar,
    ChevronDown,
    CircleCheckBig,
    CircleX,
    Clock,
    CreditCard,
    Download,
    MapPin,
    MessageCircle,
    Truck,
} from "lucide-react";
import { useEffect, useState } from "react";
import OrderPagination from "./OrderPagination";
import { useSearchParams } from "react-router-dom";

const OrderList = ({ orderList }) => {
    const [isDetailsOpen, setIsDetailsOpen] = useState(-1);
    const [searchParams] = useSearchParams();
    const currentPage = parseInt(searchParams.get("page")) || 1;

    const itemsPerPage = 5;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToDisplay = orderList.slice(startIndex, endIndex);

    useEffect(() => {
        setIsDetailsOpen(-1);
    }, [searchParams.toString()]);

    const toggleDetails = (orderId) => {
        if (orderId != isDetailsOpen) {
            setIsDetailsOpen(orderId);
        } else {
            setIsDetailsOpen(-1);
        }
    };

    return (
        <>
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-600">
                        Showing {endIndex} of {orderList.length} orders
                    </p>
                </div>

                {/* Order List */}
                <div className="space-y-4">
                    {itemsToDisplay.map((order) => (
                        <div
                            key={order._id}
                            className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="p-6 border-b border-gray-200">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center space-x-4">
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Order #{order._id}</h3>
                                            <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600">
                                                <span className="flex items-center">
                                                    <Calendar className="h-4 w-4 mr-1" />
                                                    {order.date}
                                                </span>
                                                <span className="flex items-center">
                                                    <CreditCard className="h-4 w-4 mr-1" />${order.totalPrice}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div
                                            className={`flex items-center space-x-2 px-3 py-1 rounded-full border text-sm font-medium ${
                                                order.orderStatus === "Processing"
                                                    ? "bg-yellow-100 text-yellow-800 border-yellow-200"
                                                    : order.orderStatus === "Shipped"
                                                    ? "bg-blue-100 text-blue-800 border-blue-200"
                                                    : order.orderStatus === "Delivered"
                                                    ? "bg-green-100 text-green-800 border-green-200"
                                                    : "bg-red-100 text-red-800 border-red-200"
                                            }`}
                                        >
                                            {order.orderStatus === "Processing" && (
                                                <Clock className="h-5 w-5 text-yellow-600" />
                                            )}

                                            {order.orderStatus === "Shipped" && (
                                                <Truck className="h-5 w-5 text-blue-600" />
                                            )}

                                            {order.orderStatus === "Delivered" && (
                                                <CircleCheckBig className="h-5 w-5 text-green-600" />
                                            )}

                                            {order.orderStatus === "Cancelled" && (
                                                <CircleX className="h-5 w-5 text-red-600" />
                                            )}

                                            <span>{order.orderStatus}</span>
                                        </div>

                                        <button
                                            onClick={() => toggleDetails(order._id)}
                                            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                                        >
                                            <ChevronDown className="h-5 w-5" />
                                        </button>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    {order.products.map((product, index) => (
                                        <div key={index} className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden">
                                            <img
                                                src={product.images[0].url}
                                                alt={product.name}
                                                className="w-full h-full object-cover text-transparent"
                                            />
                                        </div>
                                    ))}

                                    <span className="text-sm text-gray-600">
                                        {order.products.length} item{order.products.length > 1 && "s"}
                                    </span>
                                </div>
                            </div>

                            {/* Order details */}
                            {isDetailsOpen == order._id && isDetailsOpen != -1 && (
                                <div className="p-6 space-y-6">
                                    {/* Product info */}
                                    <div>
                                        <h4 className="font-medium text-gray-900 mb-4">Items Ordered</h4>
                                        <div className="space-y-4">
                                            {order.products.map((product, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
                                                >
                                                    <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
                                                        <img
                                                            src={product.images[0].url}
                                                            alt={product.name}
                                                            className="w-full h-full object-cover text-transparent"
                                                        />
                                                    </div>

                                                    <div className="flex-1">
                                                        <h5 className="font-medium text-gray-900">{product.name}</h5>
                                                        <p className="text-sm text-gray-600">
                                                            Size: {product.size} | Color: {product.color}
                                                        </p>
                                                        <p className="text-sm text-gray-600">
                                                            Quantity: {product.quantity}
                                                        </p>
                                                    </div>

                                                    <div className="text-right">
                                                        <p className="font-semibold text-gray-900">
                                                            ${(product.price * product.quantity).toFixed(2)}
                                                        </p>
                                                        <p className="text-sm text-gray-600">${product.price} each</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        {/* Shipping info */}
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                                                <MapPin className="h-4 w-4 mr-2 text-gray-600" />
                                                Shipping Address
                                            </h4>
                                            <div className="text-sm text-gray-600 space-y-1">
                                                <p>
                                                    {order.shippingAddress.firstName} {order.shippingAddress.lastName}
                                                </p>
                                                <p>{order.shippingAddress.address}</p>
                                                <p>
                                                    {order.shippingAddress.city}, {order.shippingAddress.zipcode}
                                                </p>
                                                <p>{order.shippingAddress.state}</p>
                                            </div>
                                        </div>

                                        {/* Order summary */}
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-3">Order Summary</h4>
                                            <div className="text-sm space-y-2">
                                                <div className="flex justify-between">
                                                    <div className="text-gray-600">Subtotal</div>
                                                    <div className="text-gray-900">${order.subtotal}</div>
                                                </div>

                                                <div className="flex justify-between">
                                                    <div className="text-gray-600">Shipping</div>
                                                    <div className="text-gray-900">${order.shippingFee}</div>
                                                </div>

                                                <div className="flex justify-between">
                                                    <div className="text-gray-600">Tax</div>
                                                    <div className="text-gray-900">${order.tax}</div>
                                                </div>

                                                <div className="flex justify-between">
                                                    <div className="text-gray-600">Tax</div>
                                                    <div className="text-gray-900">${order.tax}</div>
                                                </div>

                                                <div className="flex justify-between font-semibold pt-2 border-t border-gray-200">
                                                    <div className="text-gray-900">Total</div>
                                                    <div className="text-gray-900">${order.totalPrice}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
                                        <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-black border border-gray-300 rounded-lg hover:border-gray-400 transition-colors disabled:opacity-50">
                                            <Download className="h-4 w-4" />
                                            <span className="text-sm">Download Invoice</span>
                                        </button>

                                        <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-black border border-gray-300 rounded-lg hover:border-gray-400 transition-colors disabled:opacity-50">
                                            <MessageCircle className="h-4 w-4" />
                                            <span className="text-sm">Get Help</span>
                                        </button>

                                        <button className="flex items-center space-x-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                                            <Truck className="h-4 w-4" />
                                            <span className="text-sm">Track Order</span>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination */}
            <OrderPagination orders={orderList} />
        </>
    );
};

export default OrderList;
