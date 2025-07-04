import {
    User,
    Settings,
    LogOut,
    Pen,
    Mail,
    MapPin,
    Package,
    Calendar,
    CreditCard,
    Eye,
    Download,
    Shield,
    Check,
    Key,
    TriangleAlert,
    ReceiptText,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const userDataPlaceholder = {
    name: "John Doe",
    email: "johndoe@email.com",
    accountStatus: "Active Account",
    profileImage: {},
    phone: "+1 (555) 123-4567",
    address: {
        street: "123 Minimal Street",
        city: "New York",
        state: "NY",
        zip: "10001",
        country: "United States",
    },
    orderHistory: [
        // 3 most recent orders
        {
            _id: "ORD-001",
            date: "January 15, 2025", //not sure if date of purchase or completed order
            status: "Delivered",
            totalPrice: 89.98,
            products: [
                {
                    _id: "1",
                    name: "Essential White Tee",
                    size: "M",
                    color: "White",
                    quantity: 2,
                    price: 59.98,
                    images: [{ url: "https://picsum.photos/500/500?random=1", altText: "Essential 1" }],
                },
                {
                    _id: "2",
                    name: "Minimalist Hoodie",
                    size: "L",
                    color: "Black",
                    quantity: 1,
                    price: 79.99,
                    images: [{ url: "https://picsum.photos/500/500?random=2", altText: "Essential 2" }],
                },
            ],
        },
        {
            _id: "ORD-002",
            date: "January 8, 2025", //not sure if date of purchase or completed order
            status: "Shipped",
            totalPrice: 34.99,
            products: [
                {
                    _id: "3",
                    name: "Oversized Tee",
                    size: "L",
                    color: "Black",
                    quantity: 1,
                    price: 34.99,
                    images: [{ url: "https://picsum.photos/500/500?random=3", altText: "Essential 3" }],
                },
            ],
        },
        {
            _id: "ORD-003",
            date: "December 20, 2023", //not sure if date of purchase or completed order
            status: "Processing",
            totalPrice: 119.97,
            products: [
                {
                    _id: "4",
                    name: "Classic Black Tee",
                    size: "M",
                    color: "Black",
                    quantity: 1,
                    price: 29.99,
                    images: [{ url: "https://picsum.photos/500/500?random=4", altText: "Essential 4" }],
                },
                {
                    _id: "5",
                    name: "Zip-Up Hoodie",
                    size: "M",
                    color: "Gray",
                    quantity: 1,
                    price: 89.99,
                    images: [{ url: "https://picsum.photos/500/500?random=5", altText: "Essential 4" }],
                },
            ],
        },
    ],
};

const ProfilePage = () => {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        accountStatus: "",
        profileImage: {
            url: "",
            altText: "",
        },
        phone: "",
        address: {
            street: "",
            city: "",
            state: "",
            zip: "",
            country: "",
        },
        orderHistory: [],
    });
    const [isDetailsOpen, setIsDetailsOpen] = useState(-1);

    useEffect(() => {
        setUserData(userDataPlaceholder);
    }, []);

    const handleLogout = () => {
        console.log("Logged out!");
    };

    const toggleDetails = (index) => {
        if (index != isDetailsOpen) {
            setIsDetailsOpen(index);
        } else {
            setIsDetailsOpen(-1);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-4xl mx-auto px-4">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                                {userData.profileImage.url ? (
                                    <img
                                        src={userData.profileImage.url}
                                        alt={userData.profileImage.altText}
                                        className="rounded-full"
                                    />
                                ) : (
                                    <User className="h-8 w-8 text-gray-600" />
                                )}
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">{userData.name}</h1>
                                <p className="text-gray-600">{userData.email}</p>
                                <span className="inline-block mt-1 px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                                    {userData.accountStatus}
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                                <Settings className="h-5 w-5" />
                            </button>

                            <button
                                onClick={handleLogout}
                                className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            >
                                <LogOut className="h-5 w-5" />
                                <span className="text-sm font-medium">Logout</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="grid lg:grid-cols-3 gap-8 mt-8">
                    <div className="lg:col-span-2 space-y-8">
                        {/* Account Details */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                            <div className="p-6 border-b border-gray-200">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-xl font-semibold text-gray-900">Account Details</h2>
                                    <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-black hover:bg-gray-50 rounded-lg transition-colors">
                                        <Pen className="h-4 w-4" />
                                        <span className="text-sm font-medium">Edit</span>
                                    </button>
                                </div>
                            </div>
                            <div className="p-6 space-y-6">
                                <div>
                                    <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                                        <User className="h-5 w-5 mr-2 text-gray-600" />
                                        Personal Information
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Full Name
                                            </label>
                                            <p className="text-gray-900 py-2">{userData.name}</p>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Phone Number
                                            </label>
                                            <p className="text-gray-900 py-2">{userData.phone}</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                                        <Mail className="h-5 w-5 mr-2 text-gray-600" />
                                        Email Address
                                    </h3>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                        <p className="text-gray-900 py-2">{userData.email}</p>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                                        <MapPin className="h-5 w-5 mr-2 text-gray-600" />
                                        Shipping Address
                                    </h3>
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Street Address
                                            </label>
                                            <p className="text-gray-900 py-2">{userData.address.street}</p>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    City
                                                </label>
                                                <p className="text-gray-900 py-2">{userData.address.city}</p>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    State
                                                </label>
                                                <p className="text-gray-900 py-2">{userData.address.state}</p>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Zip Code
                                                </label>
                                                <p className="text-gray-900 py-2">{userData.address.zip}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Country
                                            </label>
                                            <p className="text-gray-900 py-2">{userData.address.country}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Order History */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                            <div className="p-6 border-b border-gray-200">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                                            <Package className="h-5 w-5 mr-2 text-gray-600" />
                                            Order History
                                        </h2>
                                        <p className="text-gray-600 mt-1">View and track your recent orders</p>
                                    </div>
                                    <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-black hover:bg-gray-50 rounded-lg transition-colors">
                                        <Eye className="h-4 w-4" />
                                        <span className="text-sm font-medium">View All</span>
                                    </button>
                                </div>
                            </div>
                            <div className="divide-y divide-gray-200">
                                {userData.orderHistory &&
                                    userData.orderHistory.map((order, index) => (
                                        <div key={index} className="p-6">
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="flex items-center space-x-4">
                                                    <div>
                                                        <h3 className="font-semibold text-gray-900">
                                                            Order # {order._id}
                                                        </h3>
                                                        <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600">
                                                            <span className="flex items-center">
                                                                <Calendar className="h-4 w-4 mr-1" />
                                                                {order.date}
                                                            </span>
                                                            <span className="flex items-center">
                                                                <CreditCard className="h-4 w-4 mr-1" />$
                                                                {order.totalPrice}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center space-x-3">
                                                    <span
                                                        className={`px-3 py-1 rounded-full text-xs font-medium  ${
                                                            order.status === "Delivered"
                                                                ? "bg-green-100 text-green-800"
                                                                : order.status === "Shipped"
                                                                ? "bg-blue-100 text-blue-800"
                                                                : "bg-yellow-100 text-yellow-800"
                                                        }`}
                                                    >
                                                        {order.status}
                                                    </span>
                                                    <button
                                                        onClick={() => toggleDetails(index)}
                                                        className="flex items-center space-x-1 text-gray-600 hover:text-black transition-colors"
                                                    >
                                                        <ReceiptText className="h-4 w-4" />
                                                        <span className="text-sm">Details</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-4 mb-4">
                                                {order.products.map((product, index) => (
                                                    <div
                                                        key={index}
                                                        className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden"
                                                    >
                                                        <img
                                                            src={product.images[0].url}
                                                            alt={product.images[0].altText || product.name}
                                                            className="w-full h-full object-cover text-transparent"
                                                        />
                                                    </div>
                                                ))}
                                                <span className="text-sm text-gray-600">
                                                    {order.products.length} item
                                                    {order.products.length > 1 && "s"}
                                                </span>
                                            </div>
                                            {isDetailsOpen == index && isDetailsOpen != -1 && (
                                                <div className="mt-4 pt-4 border-t border-gray-200">
                                                    <div className="space-y-4">
                                                        {order.products.map((product, index) => (
                                                            <div key={index} className="flex items-center space-x-4">
                                                                <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
                                                                    <img
                                                                        src={product.images[0].url}
                                                                        alt={product.images[0].altText}
                                                                        className="w-full h-full object-cover text-transparent"
                                                                    />
                                                                </div>
                                                                <div className="flex-1">
                                                                    <h4 className="font-medium text-gray-900">
                                                                        {product.name}
                                                                    </h4>
                                                                    <p className="text-sm text-gray-600">
                                                                        Size: {product.size} | Color: {product.color} |
                                                                        Qty: {product.quantity}
                                                                    </p>
                                                                </div>
                                                                <div className="text-right">
                                                                    <p className="font-semibold text-gray-900">
                                                                        $ {product.price}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
                                                        <div className="flex items-center space-x-4">
                                                            <button className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors">
                                                                <Download className="h-4 w-4" />
                                                                <span className="text-sm">Download Invoice</span>
                                                            </button>
                                                            <Link
                                                                to="/"
                                                                className="text-sm text-gray-600 hover:text-black transition-colors"
                                                            >
                                                                Need help?
                                                            </Link>
                                                        </div>
                                                        <div className="text-right">
                                                            <p className="text-sm text-gray-600">Total</p>
                                                            <p className="text-lg font-semibold text-gray-900">
                                                                $ {order.totalPrice}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-1">
                        <div className="space-y-6">
                            {/* Security */}
                            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                    <Shield className="h-5 w-5 mr-2 text-gray-600" />
                                    Security
                                </h2>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                                <Check className="h-4 w-4 text-green-600" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-green-900">Account Secured</p>
                                                <p className="text-sm text-green-700">Your account is protected</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-600">Password</span>
                                            <span className="text-sm text-gray-900">Last changed 30 days ago</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-600">Two-factor authentication</span>
                                            <span className="text-sm text-yellow-600">Not enabled</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Change password */}
                            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-medium text-gray-900 flex items-center">
                                        <Key className="h-5 w-5 mr-2 text-gray-600" />
                                        Change Password
                                    </h3>
                                    <button className="text-sm text-gray-600 hover:text-black transition-colors">
                                        Update Password
                                    </button>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Keep your account secure by using a strong password and updating it regularly.
                                </p>
                            </div>

                            {/* Security Recommendation */}
                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                                <div className="flex items-start space-x-3">
                                    <TriangleAlert className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-medium text-yellow-900 mb-1">Security Recommendation</h4>
                                        <p className="text-sm text-yellow-800 mb-2">
                                            Enable two-factor authentication for additional security.
                                        </p>
                                        <button className="text-sm text-yellow-900 hover:text-yellow-700 font-medium">
                                            Enable 2FA →
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
