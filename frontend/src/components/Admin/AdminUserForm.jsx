import { Calendar, Check, Mail, Shield, User, X } from "lucide-react";
import { useEffect, useState } from "react";

const AdminUserForm = ({ type, isOpen, onClose, userDetails }) => {
    if (!isOpen) return null;

    const [userData, setUserData] = useState({
        _id: 0,
        firstName: "",
        lastName: "",
        email: "",
        role: "customer",
        status: "pending",
        createdAt: "",
        orderCount: 0,
        totalSpent: 0.0,
        password: "",
        lastLogin: "",
    });
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordType, setPasswordType] = useState("password");
    const [isPasswordError, setIsPasswordError] = useState(false);
    const [isConfirmPasswordError, setIsConfirmPasswordError] = useState(false);

    useEffect(() => {
        setUserData(userDetails);
    }, []);

    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;

        if (isPasswordError && name == "password") {
            setIsPasswordError(false);
        } else if (isConfirmPasswordError && name == "confirmPassword") {
            setIsConfirmPasswordError(false);
        }

        if (name == "confirmPassword") {
            setConfirmPassword(value);
        } else {
            setUserData((prevData) => ({ ...prevData, [name]: type === "checkbox" ? checked : value }));
        }
    };

    const handlePasswordShow = () => {
        if (passwordType == "password") {
            setPasswordType("text");
        } else {
            setPasswordType("password");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let error = false;

        if (userData.password.length < 6) {
            setIsPasswordError(true);
            error = true;
        }

        if (userData.password != confirmPassword) {
            setIsConfirmPasswordError(true);
            error = true;
        } else {
            setIsConfirmPasswordError(false);
        }

        if (!error) {
            console.log(userData); // submit to api db
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                <User className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold text-gray-900">{type} User</h2>
                                <p className="text-sm text-gray-600">
                                    {type == "Add New"
                                        ? "Create a new user account with the details below"
                                        : "Update user information and permissions"}
                                </p>
                            </div>
                        </div>

                        <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
                            <X className="h-6 w-6" />
                        </button>
                    </div>
                </div>

                {/* User Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    {/* Basic Information */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium text-gray-900 flex items-center space-x-2">
                            <User className="h-5 w-5" />
                            <span>Basic Information</span>
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={userData.firstName}
                                    onChange={handleChange}
                                    placeholder="Enter first name"
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={userData.lastName}
                                    onChange={handleChange}
                                    placeholder="Enter last name"
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                            <div className="relative">
                                <input
                                    type="email"
                                    name="email"
                                    value={userData.email}
                                    onChange={handleChange}
                                    placeholder="Enter email address"
                                    className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300"
                                    required
                                />
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            </div>
                        </div>
                    </div>

                    {/* Account Settings */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium text-gray-900 flex items-center space-x-2">
                            <Shield className="h-5 w-5" />
                            <span>Account Settings</span>
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">User Role</label>
                                <select
                                    name="role"
                                    value={userData.role}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="customer">Customer</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Account Status</label>
                                <select
                                    name="status"
                                    value={userData.status}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="active">Active</option>
                                    <option value="blocked">Blocked</option>
                                    <option value="pending">Pending</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Password */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium text-gray-900 flex items-center space-x-2">
                            <Shield className="h-5 w-5" />
                            <span>Password</span>
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Password *</label>
                                <input
                                    type={passwordType}
                                    name="password"
                                    value={userData.password}
                                    onChange={handleChange}
                                    placeholder="Enter password"
                                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300 ${
                                        isPasswordError && "border-red-300 bg-red-50"
                                    }`}
                                    required
                                />
                                {isPasswordError && (
                                    <p className="mt-1 text-sm text-red-600">Password must be at least 6 characters</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Confirm Password *
                                </label>
                                <input
                                    type={passwordType}
                                    value={confirmPassword}
                                    name="confirmPassword"
                                    onChange={handleChange}
                                    placeholder="Confirm password"
                                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300 ${
                                        isConfirmPasswordError && "border-red-300 bg-red-50"
                                    }`}
                                    required
                                />
                                {isConfirmPasswordError && (
                                    <p className="mt-1 text-sm text-red-600">Passwords do not match</p>
                                )}
                            </div>

                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    onClick={handlePasswordShow}
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                />
                                <label className="ml-2 text-sm text-gray-600">Show passwords</label>
                            </div>
                        </div>
                    </div>

                    {/* Account Statistics */}
                    {type != "Add New" && (
                        <div className="space-y-4">
                            <h3 className="text-lg font-medium text-gray-900 flex items-center space-x-2">
                                <Calendar className="h-5 w-5" />
                                <span>Account Statistics</span>
                            </h3>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="bg-gray-50 p-3 rounded-lg">
                                    <p className="text-sm text-gray-600">Join Date</p>
                                    <p className="font-medium text-gray-900">
                                        {userData.createdAt != "" &&
                                            new Intl.DateTimeFormat("en-US", {
                                                month: "short",
                                                day: "2-digit",
                                                year: "numeric",
                                            }).format(new Date(userData.createdAt))}
                                    </p>
                                </div>

                                <div className="bg-gray-50 p-3 rounded-lg">
                                    <p className="text-sm text-gray-600">Last Login</p>
                                    <p className="font-medium text-gray-900">
                                        {userData.lastLogin != "" &&
                                            new Intl.DateTimeFormat("en-US", {
                                                month: "short",
                                                day: "2-digit",
                                                year: "numeric",
                                            }).format(new Date(userData.lastLogin))}
                                    </p>
                                </div>

                                <div className="bg-gray-50 p-3 rounded-lg">
                                    <p className="text-sm text-gray-600">Total Orders</p>
                                    <p className="font-medium text-gray-900">{userData.orderCount}</p>
                                </div>

                                <div className="bg-gray-50 p-3 rounded-lg">
                                    <p className="text-sm text-gray-600">Total Spent</p>
                                    <p className="font-medium text-gray-900">{userData.totalSpent}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Footer */}
                    <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-3 pt-6 border-t border-gray-200">
                        <button
                            onClick={onClose}
                            className="w-full sm:w-auto px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
                        >
                            Cancel
                        </button>
                        <button className="w-full sm:w-auto px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 flex items-center justify-center space-x-2">
                            <Check className="h-4 w-4" />
                            {type == "Add New" ? <span>Create User</span> : <span>Update User</span>}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminUserForm;
