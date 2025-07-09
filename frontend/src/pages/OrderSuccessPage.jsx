import { CircleCheckBig } from "lucide-react";
import { Link } from "react-router-dom";

const OrderSuccessPage = () => {
    return (
        <div className="max-w-2xl mx-auto px-4 py-16 text-center">
            <CircleCheckBig className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Confirmed!</h1>
            <p className="text-gray-600 mb-8">
                Thank you for your purchase. Your order has been successfully processed and you will receive a
                confirmation email shortly.
            </p>
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

export default OrderSuccessPage;
