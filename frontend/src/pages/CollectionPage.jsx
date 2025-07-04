import { Filter } from "lucide-react";
import FilterSidebar from "../components/Products/FilterSidebar";

const CollectionPage = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Shop</h1>
                <button className="md:hidden flex items-center space-x-2 text-gray-600">
                    <Filter className="h-5 w-5" />
                    <span>Filters</span>
                </button>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-64 space-y-6 hidden md:block">
                    {/* Filter Sidebar */}
                    <FilterSidebar />
                </div>
            </div>
        </div>
    );
};

export default CollectionPage;
