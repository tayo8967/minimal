import { Calendar, SquarePen, Trash2, User } from "lucide-react";

const AdminUserList = ({ users, openModal }) => {
    const handleStatusChange = (id, newStatus) => {
        //api to send updated user status
        console.log(`User ${id} status updated: ${newStatus}`);
    };

    const handleRoleChange = (id, newRole) => {
        //api to send updated user role
        console.log(`User ${id} role updated: ${newRole}`);
    };

    return (
        <div className="bg-white rounded-lg border border-gray-200">
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th className="text-left p-4 font-medium text-gray-900">User</th>
                            <th className="text-left p-4 font-medium text-gray-900">Role</th>
                            <th className="text-left p-4 font-medium text-gray-900">Status</th>
                            <th className="text-left p-4 font-medium text-gray-900">Join Date</th>
                            <th className="text-left p-4 font-medium text-gray-900">Orders</th>
                            <th className="text-left p-4 font-medium text-gray-900">Total Spent</th>
                            <th className="text-left p-4 font-medium text-gray-900">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {users.map((user) => (
                            <tr key={user._id} className="hover:bg-gray-50">
                                {/* User */}
                                <td className="p-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                                            <User className="h-5 w-5 text-gray-600" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900">
                                                {user.firstName} {user.lastName}
                                            </p>
                                            <p className="text-sm text-gray-600">{user.email}</p>
                                        </div>
                                    </div>
                                </td>

                                {/* Role */}
                                <td className="p-4">
                                    <select
                                        id="userRole"
                                        value={user.role}
                                        onChange={(e) => handleRoleChange(user._id, e.target.value)}
                                        className={`text-sm border rounded px-2 py-1 ${
                                            user.role == "customer"
                                                ? "bg-blue-100 text-blue-800"
                                                : "bg-purple-100 text-purple-800"
                                        }`}
                                    >
                                        <option value="customer">Customer</option>
                                        <option value="admin">Admin</option>
                                    </select>
                                </td>

                                {/* Status */}
                                <td className="p-4">
                                    <select
                                        id="userStatus"
                                        value={user.status}
                                        onChange={(e) => handleStatusChange(user._id, e.target.value)}
                                        className={`text-sm border rounded px-2 py-1 ${
                                            user.status == "active"
                                                ? "bg-green-100 text-green-800"
                                                : user.status == "blocked"
                                                ? "bg-red-100 text-red-800"
                                                : "bg-yellow-100 text-yellow-800"
                                        }`}
                                    >
                                        <option value="active">Active</option>
                                        <option value="blocked">Blocked</option>
                                        <option value="pending">Pending</option>
                                    </select>
                                </td>

                                {/* Join date */}
                                <td className="p-4">
                                    <div className="flex items-center space-x-1 text-sm text-gray-600">
                                        <Calendar className="h-4 w-4" />
                                        <span>
                                            {new Intl.DateTimeFormat("en-US", {
                                                month: "short",
                                                day: "2-digit",
                                                year: "numeric",
                                            }).format(new Date(user.createdAt))}
                                        </span>
                                    </div>
                                </td>

                                {/* Orders */}
                                <td className="p-4">
                                    <p className="text-sm text-gray-900">{user.orderCount}</p>
                                </td>

                                {/* Total Spent */}
                                <td className="p-4">
                                    <p className="font-semibold text-gray-900">${user.totalSpent}</p>
                                </td>

                                {/* Actions */}
                                <td className="p-4">
                                    <div className="flex items-center space-x-2">
                                        <button
                                            onClick={() => openModal("Edit", user)}
                                            className="p-2 text-gray-600 hover:text-black hover:bg-gray-100 rounded transition-colors"
                                        >
                                            <SquarePen className="h-4 w-4" />
                                        </button>

                                        <button
                                            onClick={() => openModal("Delete", user)}
                                            className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminUserList;
