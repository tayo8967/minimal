import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSearchParams } from "react-router-dom";

const OrderPagination = ({ orders }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentPage = parseInt(searchParams.get("page")) || 1;
    const itemsPerPage = 5;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const totalPages = Math.ceil(orders.length / itemsPerPage);
    const pageNumbers = [];

    for (let i = 1; i <= 25; i++) {
        pageNumbers.push();
    }

    const handlePageChange = (direction, pageNumber) => {
        let newPage = 1;

        if (direction === "left") {
            newPage = currentPage - 1;
        } else if (direction === "right") {
            newPage = currentPage + 1;
        } else {
            newPage = pageNumber;
        }

        searchParams.set("page", newPage.toString());
        setSearchParams(searchParams);
    };

    const getPaginationRange = () => {
        const delta = 1; // how many pages to show around currentPage
        const range = [];

        if (totalPages <= 5) {
            // Show all pages if total pages is small
            for (let i = 1; i <= totalPages; i++) {
                range.push(i);
            }
        } else {
            const left = Math.max(2, currentPage - delta);
            const right = Math.min(totalPages - 1, currentPage + delta);

            range.push(1); // Always show first

            if (left > 2) {
                range.push("...");
            }

            for (let i = left; i <= right; i++) {
                range.push(i);
            }

            if (right < totalPages - 1) {
                range.push("...");
            }

            range.push(totalPages); // Always show last
        }

        return range;
    };

    return (
        <div className="bg-white rounded-lg border border-gray-200 px-6 py-4 mt-6">
            <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                    Showing {startIndex + 1} to {endIndex} of {orders.length} orders
                </div>

                <div className="flex items-center space-x-2">
                    <button
                        onClick={() => handlePageChange("left")}
                        className={`flex items-center space-x-1 px-3 py-2 text-gray-600 hover:text-black border border-gray-300 rounded-lg hover:border-gray-400 transition-colors ${
                            totalPages == 1 || currentPage == 1 ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                        disabled={totalPages == 1 || currentPage == 1}
                    >
                        <ChevronLeft className="h-4 w-4" />
                        <span className="hidden sm:inline">Previous</span>
                    </button>

                    <div className="flex items-center space-x-1">
                        {getPaginationRange().map((page, index) =>
                            page === "..." ? (
                                <div key={index}>
                                    <span className="px-3 py-2 text-gray-400">...</span>
                                </div>
                            ) : (
                                <div key={index}>
                                    <button
                                        onClick={() => handlePageChange("", page)}
                                        className={`px-3 py-2 rounded-lg transition-colors ${
                                            page === currentPage
                                                ? "bg-black text-white"
                                                : "text-gray-600 hover:text-black hover:bg-gray-100"
                                        }`}
                                    >
                                        {page}
                                    </button>
                                </div>
                            )
                        )}
                    </div>

                    <button
                        onClick={() => handlePageChange("right")}
                        className={`flex items-center space-x-1 px-3 py-2 text-gray-600 hover:text-black border border-gray-300 rounded-lg hover:border-gray-400 transition-colors ${
                            totalPages == 1 || currentPage == totalPages ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                        disabled={totalPages == 1 || currentPage == totalPages}
                    >
                        <ChevronRight className="h-4 w-4" />
                        <span className="hidden sm:inline">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderPagination;
