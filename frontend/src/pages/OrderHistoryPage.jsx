import OrderFilterSidebar from "../components/Orders/OrderFilterSidebar";
import OrderSummary from "../components/Orders/OrderSummary";

const OrderHistoryPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-6xl mx-auto px-4">
                {/* Order Summary */}
                <OrderSummary />

                {/* Filters */}
                <OrderFilterSidebar />

                {/* Order List */}
            </div>
        </div>
    );
};

export default OrderHistoryPage;
