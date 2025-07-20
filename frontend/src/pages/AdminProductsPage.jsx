import { Filter, Plus, Search } from "lucide-react";
import { useState } from "react";
import AdminProductGrid from "../components/Admin/AdminProductGrid";
import AdminProductForm from "../components/Admin/AdminProductForm";

const products = [
    {
        _id: 1,
        inStock: true,
        isFeatured: true,
        name: "Essential White Tee",
        description:
            "A timeless white t-shirt crafted from premium organic cotton. Perfect for everyday wear with its comfortable fit and minimalist design.",
        price: 29.99,
        category: "T-shirts",
        images: [
            { url: "https://picsum.photos/500/500?random=1", altText: "Essential White Tee 1" },
            { url: "https://picsum.photos/500/500?random=2", altText: "Essential White Tee 2" },
            { url: "https://picsum.photos/500/500?random=3", altText: "Essential White Tee 3" },
        ],
    },
    {
        _id: 2,
        inStock: true,
        isFeatured: true,
        name: "Classic Black Tee",
        description:
            "Our signature black t-shirt made from sustainable materials. Features a relaxed fit and superior comfort.",
        price: 29.99,
        category: "T-shirts",
        images: [
            { url: "https://picsum.photos/500/500?random=2", altText: "Classic Black Tee 1" },
            { url: "https://picsum.photos/500/500?random=3", altText: "Classic Black Tee 2" },
        ],
    },
    {
        _id: 3,
        inStock: true,
        isFeatured: true,
        name: "Minimalist Hoodie",
        description:
            "A clean, modern hoodie with no unnecessary details. Made from premium cotton blend for ultimate comfort.",
        price: 79.99,
        category: "Hoodies",
        images: [
            { url: "https://picsum.photos/500/500?random=3", altText: "Minimalist Hoodie 1" },
            { url: "https://picsum.photos/500/500?random=4", altText: "Minimalist Hoodie 2" },
        ],
    },
    {
        _id: 4,
        inStock: true,
        isFeatured: false,
        name: "Oversized Tee",
        description: "Contemporary oversized fit t-shirt for a modern streetwear look. Soft, breathable fabric.",
        price: 34.99,
        category: "T-Shirts",
        images: [
            { url: "https://picsum.photos/500/500?random=4", altText: "Oversized Tee 1" },
            { url: "https://picsum.photos/500/500?random=5", altText: "Oversized Tee 2" },
        ],
    },
    {
        _id: 5,
        inStock: true,
        isFeatured: false,
        name: "Zip-Up Hoodie",
        description: "Clean zip-up hoodie with minimal branding. Perfect for layering or wearing on its own.",
        price: 89.99,
        category: "Hoodies",
        images: [
            { url: "https://picsum.photos/500/500?random=5", altText: "Zip-Up Hoodie 1" },
            { url: "https://picsum.photos/500/500?random=6", altText: "Zip-Up Hoodie 2" },
            { url: "https://picsum.photos/500/500?random=7", altText: "Zip-Up Hoodie 2" },
        ],
    },
    {
        _id: 6,
        inStock: false,
        isFeatured: false,
        name: "Long Sleeve Tee",
        description: "Essential long sleeve t-shirt with a modern cut. Perfect for transitional weather.",
        price: 39.99,
        category: "T-Shirts",
        images: [
            { url: "https://picsum.photos/500/500?random=6", altText: "Long Sleeve Tee 1" },
            { url: "https://picsum.photos/500/500?random=7", altText: "Long Sleeve Tee 2" },
        ],
    },
];

const AdminProductsPage = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");
    const [allProducts] = useState(products);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const filteredProducts = Array.from(
        new Map(
            allProducts
                .filter((product) => {
                    const matchesSearch = product.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
                    const matchesCategory =
                        selectedCategory === "all" ||
                        product.category.toLocaleLowerCase() === selectedCategory.toLocaleLowerCase();

                    return matchesSearch && matchesCategory;
                })
                .map((prod) => [prod._id, prod])
        ).values()
    );

    return (
        <div className="p-6">
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Product Management</h1>
                        <p className="text-gray-600 mt-2">Manage your product catalog</p>
                    </div>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="rounded-none bg-black px-6 py-3 font-medium text-white transition-colors duration-200 flex items-center space-x-2"
                    >
                        <Plus className="h-4 w-4" />
                        <span>Add Product</span>
                    </button>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-6">
                    <div className="flex flex-col md:flex-row gap-4">
                        {/* Search bar */}
                        <div className="flex-1">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
                                />
                            </div>
                        </div>

                        {/* Category filter */}
                        <div className="flex items-center space-x-4">
                            <Filter className="h-4 w-4 text-gray-400" />
                            <select
                                id="category"
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-black"
                            >
                                <option value="all">All Categories</option>
                                <option value="t-shirts">T-Shirts</option>
                                <option value="hoodies">Hoodies</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Product grid */}
                {filteredProducts.length > 0 ? (
                    <AdminProductGrid products={filteredProducts} />
                ) : (
                    <div className="p-4 space-y-4">
                        <div className="p-8 text-center text-gray-500">No products found</div>
                    </div>
                )}

                {/* Add New Product */}
                {isModalOpen && <AdminProductForm type="Add New" onClose={() => setIsModalOpen(false)} />}
            </div>
        </div>
    );
};

export default AdminProductsPage;
