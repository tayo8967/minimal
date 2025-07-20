import { useEffect, useState } from "react";
import { Filter } from "lucide-react";
import FilterSidebar from "../components/Products/FilterSidebar";
import ProductGrid from "../components/Products/ProductGrid";
import LoadingSpinner from "../components/Common/LoadingSpinner";

const CollectionPage = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            const fetchedProducts = [
                {
                    _id: 1,
                    name: "Product 1",
                    price: 100,
                    images: [{ url: "https://picsum.photos/500/500?random=1" }],
                },
                {
                    _id: 2,
                    name: "Product 2",
                    price: 100,
                    images: [{ url: "https://picsum.photos/500/500?random=2" }],
                },
                {
                    _id: 3,
                    name: "Product 3",
                    price: 100,
                    images: [{ url: "https://picsum.photos/500/500?random=3" }],
                },
                {
                    _id: 4,
                    name: "Product 4",
                    price: 100,
                    images: [{ url: "https://picsum.photos/500/500?random=4" }],
                },
                {
                    _id: 5,
                    name: "Product 5",
                    price: 100,
                    images: [{ url: "https://picsum.photos/500/500?random=5" }],
                },
                {
                    _id: 6,
                    name: "Product 6",
                    price: 100,
                    images: [{ url: "https://picsum.photos/500/500?random=6" }],
                },
            ];
            setProducts(fetchedProducts);
            setIsLoading(false);
        }, 1000);
    }, []);

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
                <div className="flex-1">
                    {isLoading ? (
                        <LoadingSpinner />
                    ) : (
                        <>
                            <div className="mb-4 text-gray-600">
                                {products.length} product{products.length > 1 && "s"} found
                            </div>
                            {/* Product Grid */}
                            <ProductGrid products={products} />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CollectionPage;
