import { useEffect, useState } from "react";
import { Search, X } from "lucide-react";
import _ from "lodash";
import { Link } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

const fetchedProducts = [
    {
        _id: 1,
        name: "Product 1",
        price: 100,
        image: "https://picsum.photos/150?random=1",
        description: "Shirt Jacket T-Shirt Polo Pants",
    },
    {
        _id: 2,
        name: "Product 2",
        price: 120,
        image: "https://picsum.photos/150?random=2",
        description: "Shirt Polo Pants",
    },
    {
        _id: 3,
        name: "Product 3",
        price: 130,
        image: "https://picsum.photos/150?random=3",
        description: "Shirt Jacket T-Shirt Pants",
    },
    {
        _id: 4,
        name: "Product 4",
        price: 140,
        image: "https://picsum.photos/150?random=4",
        description: "Shirt T-Shirt Polo Pants",
    },
    {
        _id: 5,
        name: "Product 5",
        price: 150,
        image: "https://picsum.photos/150?random=5",
        description: "T-Shirt Polo Pants",
    },
    {
        _id: 6,
        name: "Product 6",
        price: 160,
        image: "https://picsum.photos/150?random=6",
        description: "Shirt Jacket T-Shirt Polo Pants",
    },
    {
        _id: 7,
        name: "Product 7",
        price: 170,
        image: "https://picsum.photos/150?random=7",
        description: "Shirt Jacket",
    },
    {
        _id: 8,
        name: "Product 8",
        price: 180,
        image: "https://picsum.photos/150?random=8",
        description: "Polo Pants",
    },
];

const SearchModal = ({ open, onClose }) => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    // change this to display recent searches from redis instead of products
    const debouncedSearch = _.debounce(async (q) => {
        // look back and improve
        if (q.length < 3) {
            setProducts([]);
            return;
        }

        setIsLoading(true);

        //const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`);
        //const data = await res.json();
        //setProducts(data);
        const products = fetchedProducts.filter((product) => {
            const desc = product.description.toLocaleLowerCase();
            return desc.includes(q.toLowerCase());
        });

        setProducts(products);
        console.log("Search Results: ", products);
    }, 300);

    useEffect(() => {
        try {
            debouncedSearch(searchTerm); // make this async and await
        } catch (err) {
            console.error(err);
        } finally {
            setTimeout(() => {
                //timeout to simulate api getting search results
                setIsLoading(false);
            }, 2000);
        }

        return debouncedSearch.cancel;
    }, [searchTerm]);

    return (
        <>
            {open && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20">
                    <div className="bg-white w-full max-w-2xl mx-4 rounded-lg shadow-xl">
                        <div className="p-4 border-b border-gray-200">
                            <div className="flex items-center">
                                <Search className="h-5 w-5 text-gray-400 mr-3" />
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    className="flex-1 outline-none text-lg"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <button onClick={onClose} className="ml-3 text-gray-400 hover:text-gray-600">
                                    <X className="h-5 w-5" />
                                </button>
                            </div>
                            <div className="max-h-96 overflow-y-auto">
                                {searchTerm === "" ? (
                                    <div className="p-8 text-center text-gray-500">
                                        Start typing to search products...
                                    </div>
                                ) : (
                                    <div className="p-4 space-y-4">
                                        {isLoading ? (
                                            <LoadingSpinner />
                                        ) : products.length > 0 ? (
                                            products.map((product) => (
                                                <div key={product._id}>
                                                    <Link
                                                        to={`/product/${product._id}`}
                                                        className="flex items-center space-x-4 p-2 hover:bg-gray-50 rounded-lg transition-colors"
                                                    >
                                                        <img
                                                            src={product.image}
                                                            alt={product.name}
                                                            className="rounded-lg object-cover w-16 h-16"
                                                        />
                                                        <div className="flex-1">
                                                            <h3 className="font-medium text-gray-900">
                                                                {product.name}
                                                            </h3>
                                                            <p className="text-sm text-gray-500">${product.price}</p>
                                                        </div>
                                                    </Link>
                                                </div>
                                            ))
                                        ) : (
                                            <div className="p-8 text-center text-gray-500">
                                                No products found for "{searchTerm}"
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default SearchModal;
