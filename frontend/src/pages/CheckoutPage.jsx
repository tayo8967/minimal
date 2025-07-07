import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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

const CheckoutPage = () => {
    const tax = (2.4 * cart.products.reduce((sum, product) => sum + product.quantity, 0)).toFixed(2);
    const totalPrice = (Number(cart.subTotal) + Number(tax)).toFixed(2);
    const navigate = useNavigate();
    const [checkoutId, setCheckoutId] = useState(null);
    const [contactInformation, setContactInformation] = useState({
        email: "",
        phone: "",
    });
    const [shippingAddress, setShippingAddress] = useState({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        zipCode: "",
        state: "",
    });

    useEffect(() => {
        //api to get user contact info
        setContactInformation({
            email: "demo@example.com",
            phone: "09912748361",
        });
    }, []);

    const handleCreateCheckout = (e) => {
        e.preventDefault();
        setCheckoutId(123);

        console.log(contactInformation);
        console.log(shippingAddress);
    };

    const handlePaymentSuccess = (details) => {
        console.log("Payment Succesful", details);
        // for Stripe payment will use own stripe page
        //navigate("/order-confirmation"); only used for paypal
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>
            <div className="grid lg:grid-cols-2 gap-12">
                {/* Checkout Form */}
                <div>
                    <form onSubmit={handleCreateCheckout} className="space-y-6">
                        <div>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h2>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <input
                                    name="email"
                                    type="email"
                                    value={contactInformation.email}
                                    onChange={(e) =>
                                        setContactInformation({
                                            ...contactInformation,
                                            email: e.target.value,
                                        })
                                    }
                                    placeholder="Email address"
                                    className="w-full rounded-none border border-gray-300 px-4 py-3 transition-colors duration-200 ease-in-out"
                                    required
                                />
                                <input
                                    name="phone"
                                    type="text"
                                    value={contactInformation.phone}
                                    onChange={(e) =>
                                        setContactInformation({
                                            ...contactInformation,
                                            phone: e.target.value,
                                        })
                                    }
                                    placeholder="Phone number"
                                    className="w-full rounded-none border border-gray-300 px-4 py-3 transition-colors duration-200 ease-in-out"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Shipping Address</h2>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <input
                                    name="firstName"
                                    type="text"
                                    value={shippingAddress.firstName}
                                    onChange={(e) =>
                                        setShippingAddress({
                                            ...shippingAddress,
                                            firstName: e.target.value,
                                        })
                                    }
                                    placeholder="First name"
                                    className="w-full rounded-none border border-gray-300 px-4 py-3 transition-colors duration-200 ease-in-out"
                                    required
                                />

                                <input
                                    name="lastName"
                                    type="text"
                                    value={shippingAddress.lastName}
                                    onChange={(e) =>
                                        setShippingAddress({
                                            ...shippingAddress,
                                            lastName: e.target.value,
                                        })
                                    }
                                    placeholder="Last name"
                                    className="w-full rounded-none border border-gray-300 px-4 py-3 transition-colors duration-200 ease-in-out"
                                    required
                                />
                            </div>

                            <input
                                name="address"
                                type="text"
                                value={shippingAddress.address}
                                onChange={(e) =>
                                    setShippingAddress({
                                        ...shippingAddress,
                                        address: e.target.value,
                                    })
                                }
                                placeholder="Address"
                                className="w-full rounded-none border border-gray-300 px-4 py-3 transition-colors duration-200 ease-in-out mb-4"
                                required
                            />

                            <div className="grid grid-cols-3 gap-4">
                                <input
                                    name="city"
                                    type="text"
                                    value={shippingAddress.city}
                                    onChange={(e) =>
                                        setShippingAddress({
                                            ...shippingAddress,
                                            city: e.target.value,
                                        })
                                    }
                                    placeholder="City"
                                    className="w-full rounded-none border border-gray-300 px-4 py-3 transition-colors duration-200 ease-in-out"
                                    required
                                />

                                <input
                                    name="state"
                                    type="text"
                                    value={shippingAddress.state}
                                    onChange={(e) =>
                                        setShippingAddress({
                                            ...shippingAddress,
                                            state: e.target.value,
                                        })
                                    }
                                    placeholder="State"
                                    className="w-full rounded-none border border-gray-300 px-4 py-3 transition-colors duration-200 ease-in-out"
                                    required
                                />

                                <input
                                    name="zipCode"
                                    type="text"
                                    value={shippingAddress.zipCode}
                                    onChange={(e) =>
                                        setShippingAddress({
                                            ...shippingAddress,
                                            zipCode: e.target.value,
                                        })
                                    }
                                    placeholder="ZIP Code"
                                    className="w-full rounded-none border border-gray-300 px-4 py-3 transition-colors duration-200 ease-in-out"
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 rounded font-medium transition-colors bg-black text-white hover:bg-gray-800"
                        >
                            Proceed to Payment
                        </button>
                    </form>
                </div>

                {/* Order Summary */}
                <div>
                    <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
                        <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>
                        <div className="space-y-4 mb-6">
                            {cart.products.map((product, index) => (
                                <div className="flex items-center space-x-4">
                                    <div
                                        key={index}
                                        className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0"
                                    >
                                        <img src={product.image} alt={product.name} />
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-medium text-gray-900 text-sm">{product.name}</h3>
                                        <p className="text-xs text-gray-600">
                                            {product.size} | {product.color} | Qty: {product.quantity}
                                        </p>
                                    </div>

                                    <span className="font-medium text-gray-900">
                                        ${product.price * product.quantity}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-3 border-t border-gray-200 pt-4">
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
