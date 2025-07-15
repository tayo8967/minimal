import { Filter, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const OrderFilterSidebar = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const [filters, setFilters] = useState({
        status: "",
        dateRange: "",
        search: "",
    });

    // values for the filters can be stored in the DB
    const orderStatuses = ["All Orders", "Processing", "Shipped", "Delivered", "Cancelled"];
    const dateRanges = ["All Time", "Last 30 Days", "Last 3 Months", "Last Year"];

    useEffect(() => {
        const params = Object.fromEntries([...searchParams]);

        setFilters({
            status: params.status || "All Orders",
            dateRange: params.dateRange || "All Time",
            search: params.search || "",
        });
    }, [searchParams]);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        let newFilters = { ...filters };

        newFilters[name] = value;

        setFilters(newFilters);
        updateURLParams(newFilters);
    };

    const updateURLParams = (newFilters) => {
        const params = new URLSearchParams();
        Object.keys(newFilters).forEach((key) => {
            if (newFilters[key]) {
                params.append(key, newFilters[key]);
            }
        });

        setSearchParams(params);
        navigate(`?${params.toString()}`);
    };

    const handleClearAll = () => {
        const clearedFilters = {
            status: "",
            dateRange: "",
            search: "",
        };

        setFilters(clearedFilters);
        setSearchParams("");
    };

    return (
        <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-24">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                    <Filter className="h-5 w-5 mr-2 text-gray-600" />
                    Filters
                </h3>

                {searchParams.has("status" || "orderRange" || "search") && (
                    <button
                        onClick={handleClearAll}
                        className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
                    >
                        Clear All
                    </button>
                )}
            </div>

            <div className="space-y-6">
                {/* Search Orders */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Search Orders</label>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Order ID or product name..."
                            name="search"
                            value={filters.search}
                            onChange={handleFilterChange}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                        />
                    </div>
                </div>

                {/* Order Status */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Order Status</label>
                    <div className="space-y-2">
                        {orderStatuses.map((orderStatus) => (
                            <label key={orderStatus} className="flex items-center justify-between cursor-pointer">
                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        name="status"
                                        value={orderStatus}
                                        onChange={handleFilterChange}
                                        checked={filters.status === orderStatus}
                                        className="mr-3 text-black focus:ring-black"
                                    />
                                    <span className="text-sm text-gray-700">{orderStatus}</span>
                                </div>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Date Range */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Date Range</label>
                    <div className="space-y-2">
                        {dateRanges.map((dateRange) => (
                            <label key={dateRange} className="flex items-center justify-between cursor-pointer">
                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        name="dateRange"
                                        value={dateRange}
                                        onChange={handleFilterChange}
                                        checked={filters.dateRange === dateRange}
                                        className="mr-3 text-black focus:ring-black"
                                    />
                                    <span className="text-sm text-gray-700">{dateRange}</span>
                                </div>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="pt-4 border-t border-gray-200">
                    <h4 className="text-sm font-medium text-gray-700 mb-3">Quick Actions</h4>
                    <div className="space-y-2">
                        <button
                            name="status"
                            value={"Processing"}
                            onClick={handleFilterChange}
                            className="w-full text-left text-sm text-gray-600 hover:text-black transition-colors"
                        >
                            View Processing Orders
                        </button>
                        <button
                            name="dateRange"
                            value="Last 30 Days"
                            onClick={handleFilterChange}
                            className="w-full text-left text-sm text-gray-600 hover:text-black transition-colors"
                        >
                            Recent Orders
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderFilterSidebar;
