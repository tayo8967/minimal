import { Filter, Search, TriangleAlert, UserPlus } from "lucide-react";
import { useState } from "react";
import AdminUserList from "../components/Admin/AdminUserList";
import AdminUserForm from "../components/Admin/AdminUserForm";

const users = [
    {
        _id: 1,
        firstName: "Admin",
        lastName: "User",
        email: "admin@minimal.com",
        role: "admin",
        status: "active",
        createdAt: "January 1, 2023",
        orderCount: 0,
        totalSpent: 0.0,
        password: "",
        lastLogin: "January 15, 2024",
    },
    {
        _id: 2,
        firstName: "John",
        lastName: "Doe",
        email: "john@example.com",
        role: "customer",
        status: "active",
        createdAt: "January 15, 2024",
        orderCount: 12,
        totalSpent: 1299.99,
        password: "",
        lastLogin: "February 20, 2024",
    },
    {
        _id: 3,
        firstName: "Jane",
        lastName: "Smith",
        email: "jane@example.com",
        role: "customer",
        status: "active",
        createdAt: "February 20, 2024",
        orderCount: 8,
        totalSpent: 899.5,
        password: "",
        lastLogin: "March 10, 2024",
    },
    {
        _id: 4,
        firstName: "Mike",
        lastName: "Johnson",
        email: "mike@example.com",
        role: "customer",
        status: "blocked",
        createdAt: "March 10, 2024",
        orderCount: 3,
        totalSpent: 299.99,
        password: "",
        lastLogin: "April 18, 2024",
    },
    {
        _id: 5,
        firstName: "Sarah",
        lastName: "Wilson",
        email: "sarah@example.com",
        role: "customer",
        status: "pending",
        createdAt: "January 10, 2025",
        orderCount: 0,
        totalSpent: 0.0,
        password: "",
        lastLogin: "May 15, 2025",
    },
];

const AdminUserManagementPage = () => {
    const [selectedStatus, setSelectedStatus] = useState("all");
    const [selectedRole, setSelectedRole] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [modalType, setModalType] = useState("");
    const [userDetails, setUserDetails] = useState({
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

    const filteredUsers = Array.from(
        new Map(
            users
                .filter((user) => {
                    const userFullName = `${user.firstName} ${user.lastName}`;
                    const matchesSearch =
                        user.email.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
                        userFullName.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
                    const matchesCategory =
                        (selectedStatus === "all" ||
                            user.status.toLocaleLowerCase() === selectedStatus.toLocaleLowerCase()) &&
                        (selectedRole === "all" || user.role.toLocaleLowerCase() === selectedRole.toLocaleLowerCase());

                    return matchesSearch && matchesCategory;
                })
                .map((ord) => [ord._id, ord])
        ).values()
    );

    const handleModal = (modalType, modalData) => {
        if (modalData == null) {
            modalData = {
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
            };
        }
        setModalType(modalType);
        setUserDetails(modalData);

        if (modalType == "Delete") {
            setIsDeleteModalOpen(true);
        } else {
            setIsModalOpen(true);
        }
    };

    const handleDelete = () => {
        console.log("User deleted: " + userDetails._id); // send id to delete to api
        setIsDeleteModalOpen(false);
    };

    return (
        <div className="p-6">
            <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
                        <p className="text-gray-600 mt-2">Manage user accounts and permissions</p>
                    </div>

                    <button
                        onClick={() => handleModal("Add New", null)}
                        className="inline-flex items-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors space-x-2"
                    >
                        <UserPlus className="h-4 w-4" />
                        <span>Add User</span>
                    </button>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-6">
                    <div className="flex flex-col md:flex-row gap-4">
                        {/* Search bar */}
                        <div className="flex-1">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    placeholder="Search users..."
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
                                />
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <Filter className="h-4 w-4 text-gray-400" />

                            {/* Role filter */}
                            <select
                                id="role"
                                value={selectedRole}
                                onChange={(e) => setSelectedRole(e.target.value)}
                                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-black"
                            >
                                <option value="all">All Roles</option>
                                <option value="admin">Admin</option>
                                <option value="customer">Customer</option>
                            </select>

                            {/* Status filter */}
                            <select
                                id="status"
                                value={selectedStatus}
                                onChange={(e) => setSelectedStatus(e.target.value)}
                                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-black"
                            >
                                <option value="all">All Status</option>
                                <option value="active">Active</option>
                                <option value="blocked">Blocked</option>
                                <option value="pending">Pending</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Table */}
                {filteredUsers.length > 0 ? (
                    <AdminUserList users={filteredUsers} openModal={handleModal} />
                ) : (
                    <div className="p-4 space-y-4">
                        <div className="p-8 text-center text-gray-500">No users found</div>
                    </div>
                )}

                {/* Delete Product */}
                {isDeleteModalOpen && (
                    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                        <div className="bg-white rounded-lg max-w-md w-full">
                            <div className="p-6">
                                <div className="flex items-center space-x-3 mb-4">
                                    <TriangleAlert className="h-6 w-6 text-red-600" />
                                    <h3 className="text-lg font-semibold text-gray-900">Delete User</h3>
                                </div>

                                <p className="text-gray-600 mb-6">
                                    Are you sure you want to delete this user? This action cannot be undone and will
                                    remove all associated data.
                                </p>

                                <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-3">
                                    <button
                                        onClick={() => setIsDeleteModalOpen(false)}
                                        className="w-full sm:w-auto px-4 py-2 text-gray-700 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                                    >
                                        Cancel
                                    </button>

                                    <button
                                        onClick={handleDelete}
                                        className="w-full sm:w-auto px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Add New Product */}
                {isModalOpen && (
                    <AdminUserForm
                        type={modalType}
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        userDetails={userDetails}
                    />
                )}
            </div>
        </div>
    );
};

export default AdminUserManagementPage;
