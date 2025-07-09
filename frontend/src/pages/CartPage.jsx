import { Minus, Plus, Trash2 } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const cart = {
    products: [
        {
            name: "Classic Black Tee",
            size: "XS",
            color: "White",
            quantity: 2,
            price: 29.99,
            image: "https://picsum.photos/150?random=1",
        },
        {
            name: "Essential White Tee",
            size: "M",
            color: "Black",
            quantity: 1,
            price: 29.99,
            image: "https://picsum.photos/150?random=2",
        },
    ],
    subTotal: 89.97,
};

const CartPage = () => {
    const tax = (2.4 * cart.products.reduce((sum, product) => sum + product.quantity, 0)).toFixed(2);
    const totalPrice = (Number(cart.subTotal) + Number(tax)).toFixed(2);
    return (
        <>
            {Object.keys(cart).length === 0 ? (
                <div className="max-w-7xl mx-auto px-4 py-16 text-center">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
                    <p className="text-gray-600 mb-8">Add some items to your cart to get started.</p>
                    <Link
                        to="/collections/all"
                        className="rounded-none bg-black px-6 py-3 font-medium text-white transition-colors duration-200 ease-in-out"
                    >
                        Continue Shopping
                    </Link>
                </div>
            ) : (
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Cart Products */}
                        <div className="lg:col-span-2 space-y-4">
                            {cart.products.map((product, index) => (
                                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover text-transparent"
                                            />
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-medium text-gray-900">{product.name}</h3>
                                            <p className="text-sm text-gray-600">
                                                Size: {product.size} | Color: {product.color}
                                            </p>
                                            <p className="text-lg font-semibold text-gray-900">${product.price}</p>
                                        </div>

                                        <div className="flex items-center space-x-3">
                                            <button className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:border-gray-400">
                                                <Minus className="h-4 w-4" />
                                            </button>
                                            <span className="text-lg font-medium w-8 text-center">
                                                {product.quantity}
                                            </span>
                                            <button className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:border-gray-400">
                                                <Plus className="h-4 w-4" />
                                            </button>
                                        </div>

                                        <button className="text-red-500 hover:text-red-700 p-2">
                                            <Trash2 className="h-5 w-5" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>
                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Subtotal</span>
                                        <span className="font-medium">${cart.subTotal}</span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Shipping</span>
                                        <span className="font-medium">Free</span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Tax</span>
                                        <span className="font-medium">${tax}</span>
                                    </div>

                                    <div className="border-t border-gray-200 pt-3">
                                        <div className="flex justify-between">
                                            <span className="text-lg font-semibold">Total</span>
                                            <span className="text-lg font-semibold">${totalPrice}</span>
                                        </div>
                                    </div>
                                </div>
                                <Link
                                    to="/checkout"
                                    className="w-full rounded-none border-1 border-black bg-black px-6 py-3 font-medium text-white transition-colors duration-200 ease-in-out block text-center" //Button Primary
                                >
                                    Proceed to Checkout
                                </Link>
                                <Link
                                    to="/collections/all"
                                    className="w-full rounded-none border-1 border-black bg-white px-6 py-3 font-medium text-black transition-colors duration-200 ease-in-out block text-center mt-3" //Button Secondary
                                >
                                    Continue Shopping
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CartPage;
