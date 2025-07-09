import { XCircle } from "lucide-react";
import { Link } from "react-router-dom";

const OrderCancelPage = () => {
    return (
        <div className="max-w-2xl mx-auto px-4 py-16 text-center">
            <XCircle className="h-16 w-16 text-red-500 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Cancelled!</h1>
            <p className="text-gray-600 mb-8">Your order has been cancelled. No charges have been made.</p>
            <div className="space-y-4">
                <Link
                    to="/collections/all"
                    className="w-full rounded-none border-1 border-black bg-black px-6 py-3 font-medium text-white transition-colors duration-200 ease-in-out text-center mr-4"
                >
                    Continue Shopping
                </Link>

                <Link
                    to="/"
                    className="w-full rounded-none border-1 border-black bg-white px-10 py-3 font-medium text-black transition-colors duration-200 ease-in-out text-center"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default OrderCancelPage;
