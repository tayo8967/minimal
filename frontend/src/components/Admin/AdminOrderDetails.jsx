import { Calendar, CreditCard, MapPin, User, X } from "lucide-react";
import React, { useEffect, useState } from "react";

const AdminOrderDetails = ({ isOpen, onClose, orderDetails }) => {
    if (!isOpen) return null;

    const [orderData, setOrderData] = useState({
        _id: "",
        date: "",
        totalPrice: 0,
        orderStatus: "",
        tax: 0,
        shippingFee: 0,
        subtotal: 0,
        products: [],
        shippingAddress: {
            firstName: "",
            lastName: "",
            address: "",
            city: "",
            zipcode: "",
            state: "",
        },
    });

    useEffect(() => {
        setOrderData(orderDetails);
    }, []);

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold text-gray-900">Order #{orderData._id}</h2>
                        <button className="text-gray-400 hover:text-gray-600">
                            <X onClick={onClose} className="h-6 w-6" />
                        </button>
                    </div>
                </div>

                {/* Order details */}
                <div className="p-6 space-y-6">
                    {/* Order info */}
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="flex items-center space-x-3">
                            <Calendar className="h-5 w-5 text-gray-400" />
                            <div>
                                <p className="text-sm text-gray-600">Order Date</p>
                                <p className="font-medium">
                                    {orderData.date != "" &&
                                        new Intl.DateTimeFormat("en-US", {
                                            month: "short",
                                            day: "2-digit",
                                            year: "numeric",
                                        }).format(new Date(orderData.date))}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-3">
                            <User className="h-5 w-5 text-gray-400" />
                            <div>
                                <p className="text-sm text-gray-600">Customer</p>
                                <p className="font-medium">
                                    {orderData.shippingAddress.firstName} {orderData.shippingAddress.lastName}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-3">
                            <CreditCard className="h-5 w-5 text-gray-400" />
                            <div>
                                <p className="text-sm text-gray-600">Total</p>
                                <p className="font-medium">${orderData.totalPrice}</p>
                            </div>
                        </div>
                    </div>

                    {/* Order Items */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Order Items</h3>
                        <div className="space-y-4">
                            {orderData.products.map((product) => (
                                <div
                                    key={product._id}
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
                                        <h4 className="font-medium text-gray-900">{product.name}</h4>
                                        <p className="text-sm text-gray-600">
                                            Size: {product.size} | Color: {product.color}
                                        </p>
                                        <p className="text-sm text-gray-600">Quantity: {product.quantity}</p>
                                    </div>

                                    <div className="text-right">
                                        <p className="font-semibold text-gray-900">
                                            ${(product.price * product.quantity).toFixed(2)}
                                        </p>
                                        <p className="text-sm text-gray-600">${product.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Shipping Address */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4 flex items-center">Shipping Address</h3>
                        <div className="bg-gray-50 rounded-lg p-4">
                            <p className="font-medium text-gray-900">
                                {orderData.shippingAddress.firstName} {orderData.shippingAddress.lastName}
                            </p>
                            <p className="text-gray-600">{orderData.shippingAddress.address}</p>
                            <p className="text-gray-600">
                                {orderData.shippingAddress.city}, {orderData.shippingAddress.zipcode}
                            </p>
                            <p className="text-gray-600">{orderData.shippingAddress.state}</p>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <h3 className="font-semibold text-gray-900 mb-4">Order Summary</h3>
                    <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                        <div className="flex justify-between">
                            <span className="text-gray-600">Subtotal</span>
                            <span className="text-gray-900">${orderData.subtotal}</span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-gray-600">Shipping</span>
                            <span className="text-gray-900">${orderData.shippingFee}</span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-gray-600">Tax</span>
                            <span className="text-gray-900">${orderData.tax}</span>
                        </div>

                        <div className="flex justify-between font-semibold pt-2 border-t border-gray-200">
                            <span className="text-gray-900">Total</span>
                            <span className="text-gray-900">${orderData.totalPrice}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminOrderDetails;
