import { Filter, Search } from "lucide-react";
import { useEffect, useState } from "react";
import AdminOrderList from "../components/Admin/AdminOrderList";
import AdminOrderDetails from "../components/Admin/AdminOrderDetails";

const orders = [
    {
        _id: "ORD-001",
        date: "June 28, 2025",
        totalPrice: 421.12,
        orderStatus: "processing",
        tax: 31.19,
        shippingFee: 0.0,
        subtotal: 389.93,
        products: [
            {
                _id: 1,
                name: "Classic Black Tee",
                size: "L",
                color: "Navy",
                quantity: 2,
                price: 29.99,
                images: [{ url: "https://picsum.photos/500/500?random=1" }],
            },
            {
                _id: 2,
                name: "Zip-Up Hoodie",
                size: "L",
                color: "Beige",
                quantity: 3,
                price: 89.99,
                images: [{ url: "https://picsum.photos/500/500?random=2" }],
            },
            {
                _id: 3,
                name: "Classic Black Tee",
                size: "XS",
                color: "White",
                quantity: 2,
                price: 29.99,
                images: [{ url: "https://picsum.photos/500/500?random=3" }],
            },
        ],
        shippingAddress: {
            firstName: "John",
            lastName: "Doe",
            address: "123 Minimal Street",
            city: "New York",
            zipcode: "NY 10001",
            state: "United States",
        },
    },
    {
        _id: "ORD-002",
        date: "June 2, 2025",
        totalPrice: 97.19,
        orderStatus: "shipped",
        tax: 7.2,
        shippingFee: 0.0,
        subtotal: 89.99,
        products: [
            {
                _id: 1,
                name: "Zip-Up Hoodie",
                size: "L",
                color: "Black",
                quantity: 1,
                price: 89.99,
                images: [{ url: "https://picsum.photos/500/500?random=1" }],
            },
        ],
        shippingAddress: {
            firstName: "John",
            lastName: "Doe",
            address: "123 Minimal Street",
            city: "New York",
            zipcode: "NY 10001",
            state: "United States",
        },
    },
    {
        _id: "ORD-003",
        date: "June 2, 2025",
        totalPrice: 421.12,
        orderStatus: "cancelled",
        tax: 31.19,
        shippingFee: 0.0,
        subtotal: 389.93,
        products: [
            {
                _id: 1,
                name: "Classic Black Tee",
                size: "L",
                color: "Navy",
                quantity: 2,
                price: 29.99,
                images: [{ url: "https://picsum.photos/500/500?random=1" }],
            },
            {
                _id: 2,
                name: "Zip-Up Hoodie",
                size: "L",
                color: "Beige",
                quantity: 3,
                price: 89.99,
                images: [{ url: "https://picsum.photos/500/500?random=2" }],
            },
            {
                _id: 3,
                name: "Classic Black Tee",
                size: "XS",
                color: "White",
                quantity: 2,
                price: 29.99,
                images: [{ url: "https://picsum.photos/500/500?random=3" }],
            },
        ],
        shippingAddress: {
            firstName: "Matt",
            lastName: "Go",
            address: "123 Minimal Street",
            city: "New York",
            zipcode: "NY 10001",
            state: "United States",
        },
    },
    {
        _id: "ORD-004",
        date: "May 24, 2025",
        totalPrice: 97.19,
        orderStatus: "delivered",
        tax: 7.2,
        shippingFee: 0.0,
        subtotal: 89.99,
        products: [
            {
                _id: 1,
                name: "Zip-Up Hoodie",
                size: "L",
                color: "Black",
                quantity: 1,
                price: 89.99,
                images: [{ url: "https://picsum.photos/500/500?random=1" }],
            },
        ],
        shippingAddress: {
            firstName: "John",
            lastName: "Doe",
            address: "123 Minimal Street",
            city: "New York",
            zipcode: "NY 10001",
            state: "United States",
        },
    },
    {
        _id: "ORD-005",
        date: "May 7, 2025",
        totalPrice: 97.19,
        orderStatus: "delivered",
        tax: 7.2,
        shippingFee: 0.0,
        subtotal: 89.99,
        products: [
            {
                _id: 1,
                name: "Zip-Up Hoodie",
                size: "L",
                color: "Black",
                quantity: 1,
                price: 89.99,
                images: [{ url: "https://picsum.photos/500/500?random=1" }],
            },
        ],
        shippingAddress: {
            firstName: "John",
            lastName: "Doe",
            address: "123 Minimal Street",
            city: "New York",
            zipcode: "NY 10001",
            state: "United States",
        },
    },
    {
        _id: "ORD-006",
        date: "June 28, 2025",
        totalPrice: 421.12,
        orderStatus: "delivered",
        tax: 31.19,
        shippingFee: 0.0,
        subtotal: 389.93,
        products: [
            {
                _id: 1,
                name: "Classic Black Tee",
                size: "L",
                color: "Navy",
                quantity: 2,
                price: 29.99,
                images: [{ url: "https://picsum.photos/500/500?random=1" }],
            },
            {
                _id: 2,
                name: "Zip-Up Hoodie",
                size: "L",
                color: "Beige",
                quantity: 3,
                price: 89.99,
                images: [{ url: "https://picsum.photos/500/500?random=2" }],
            },
            {
                _id: 3,
                name: "Classic Black Tee",
                size: "XS",
                color: "White",
                quantity: 2,
                price: 29.99,
                images: [{ url: "https://picsum.photos/500/500?random=3" }],
            },
        ],
        shippingAddress: {
            firstName: "Dean",
            lastName: "Lanzo",
            address: "123 Minimal Street",
            city: "New York",
            zipcode: "NY 10001",
            state: "United States",
        },
    },
    {
        _id: "ORD-007",
        date: "June 2, 2025",
        totalPrice: 97.19,
        orderStatus: "cancelled",
        tax: 7.2,
        shippingFee: 0.0,
        subtotal: 89.99,
        products: [
            {
                _id: 1,
                name: "Zip-Up Hoodie",
                size: "L",
                color: "Black",
                quantity: 1,
                price: 89.99,
                images: [{ url: "https://picsum.photos/500/500?random=1" }],
            },
        ],
        shippingAddress: {
            firstName: "John",
            lastName: "Doe",
            address: "123 Minimal Street",
            city: "New York",
            zipcode: "NY 10001",
            state: "United States",
        },
    },
    {
        _id: "ORD-008",
        date: "June 2, 2025",
        totalPrice: 421.12,
        orderStatus: "shipped",
        tax: 31.19,
        shippingFee: 0.0,
        subtotal: 389.93,
        products: [
            {
                _id: 1,
                name: "Classic Black Tee",
                size: "L",
                color: "Navy",
                quantity: 2,
                price: 29.99,
                images: [{ url: "https://picsum.photos/500/500?random=1" }],
            },
            {
                _id: 2,
                name: "Zip-Up Hoodie",
                size: "L",
                color: "Beige",
                quantity: 3,
                price: 89.99,
                images: [{ url: "https://picsum.photos/500/500?random=2" }],
            },
            {
                _id: 3,
                name: "Classic Black Tee",
                size: "XS",
                color: "White",
                quantity: 2,
                price: 29.99,
                images: [{ url: "https://picsum.photos/500/500?random=3" }],
            },
        ],
        shippingAddress: {
            firstName: "John",
            lastName: "Doe",
            address: "123 Minimal Street",
            city: "New York",
            zipcode: "NY 10001",
            state: "United States",
        },
    },
    {
        _id: "ORD-009",
        date: "May 24, 2025",
        totalPrice: 97.19,
        orderStatus: "processing",
        tax: 7.2,
        shippingFee: 0.0,
        subtotal: 89.99,
        products: [
            {
                _id: 1,
                name: "Zip-Up Hoodie",
                size: "L",
                color: "Black",
                quantity: 1,
                price: 89.99,
                images: [{ url: "https://picsum.photos/500/500?random=1" }],
            },
        ],
        shippingAddress: {
            firstName: "John",
            lastName: "Doe",
            address: "123 Minimal Street",
            city: "New York",
            zipcode: "NY 10001",
            state: "United States",
        },
    },
    {
        _id: "ORD-010",
        date: "May 7, 2025",
        totalPrice: 97.19,
        orderStatus: "delivered",
        tax: 7.2,
        shippingFee: 0.0,
        subtotal: 89.99,
        products: [
            {
                _id: 1,
                name: "Zip-Up Hoodie",
                size: "L",
                color: "Black",
                quantity: 1,
                price: 89.99,
                images: [{ url: "https://picsum.photos/500/500?random=1" }],
            },
        ],
        shippingAddress: {
            firstName: "John",
            lastName: "Doe",
            address: "123 Minimal Street",
            city: "New York",
            zipcode: "NY 10001",
            state: "United States",
        },
    },
];

const AdminOrdersPage = () => {
    const [selectedStatus, setSelectedStatus] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [orderDetails, setOrderDetails] = useState({
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

    const filteredOrders = Array.from(
        new Map(
            orders
                .filter((order) => {
                    const customer = `${order.shippingAddress.firstName} ${order.shippingAddress.lastName}`;
                    const matchesSearch =
                        order._id.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
                        customer.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
                    const matchesCategory =
                        selectedStatus === "all" ||
                        order.orderStatus.toLocaleLowerCase() === selectedStatus.toLocaleLowerCase();

                    return matchesSearch && matchesCategory;
                })
                .map((ord) => [ord._id, ord])
        ).values()
    );

    const handleModal = (modalData) => {
        setOrderDetails(modalData);
        setIsModalOpen(true);
    };

    return (
        <div className="p-6">
            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Order Management</h1>
                    <p className="text-gray-600 mt-2">Manage and track customer orders</p>
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
                                    placeholder="Search orders or customers..."
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
                                />
                            </div>
                        </div>

                        {/* Status filter */}
                        <div className="flex items-center space-x-4">
                            <Filter className="h-4 w-4 text-gray-400" />
                            <select
                                id="status"
                                value={selectedStatus}
                                onChange={(e) => setSelectedStatus(e.target.value)}
                                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-black"
                            >
                                <option value="all">All Status</option>
                                <option value="processing">Processing</option>
                                <option value="shipped">Shipped</option>
                                <option value="delivered">Delivered</option>
                                <option value="cancelled">Cancelled</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Table */}
                {filteredOrders.length > 0 ? (
                    <AdminOrderList orders={filteredOrders} openModal={handleModal} />
                ) : (
                    <div className="p-4 space-y-4">
                        <div className="p-8 text-center text-gray-500">No orders found</div>
                    </div>
                )}

                {/* View Order Details */}
                {isModalOpen && (
                    <AdminOrderDetails
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        orderDetails={orderDetails}
                    />
                )}
            </div>
        </div>
    );
};

export default AdminOrdersPage;
