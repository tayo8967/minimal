import OrderFilterSidebar from "../components/Orders/OrderFilterSidebar";
import OrderList from "../components/Orders/OrderList";
import OrderSummary from "../components/Orders/OrderSummary";

const orders = [
    {
        _id: "ORD-001",
        date: "June 28, 2025",
        totalPrice: 421.12,
        orderStatus: "Processing",
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
        orderStatus: "Shipped",
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
        orderStatus: "Cancelled",
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
        _id: "ORD-004",
        date: "May 24, 2025",
        totalPrice: 97.19,
        orderStatus: "Delivered",
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
        orderStatus: "Delivered",
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

const OrderHistoryPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-6xl mx-auto px-4">
                {/* Order Summary */}
                <OrderSummary />

                <div className="mt-8 grid lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-1">
                        {/* Filters */}
                        <OrderFilterSidebar />
                    </div>

                    {/* Order List */}
                    <div className="lg:col-span-3">
                        <OrderList orderList={orders} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderHistoryPage;
