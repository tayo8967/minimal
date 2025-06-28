import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedCollection = ({ collection }) => {
    const [mainImage, setMainImage] = useState("");
    const [selectedProduct, setSelectedProduct] = useState({
        name: "",
        price: 0,
        images: [],
        description: "",
        colors: [],
        material: "",
    });

    useEffect(() => {
        if (selectedProduct?.images?.length > 0) {
            setMainImage(selectedProduct.images[0].url);
        }
    }, [selectedProduct]);

    useEffect(() => {
        setSelectedProduct(collection.products[0]);
        setMainImage(collection.products[0].images[0].url);
    }, []);

    const handleImageChange = (direction, index) => {
        const products = collection.products;
        const currentIndex = products.indexOf(selectedProduct);

        if (direction === "right") {
            const nextIndex = (currentIndex + 1) % products.length;
            setSelectedProduct(products[nextIndex]);
        } else if (direction === "left") {
            const prevIndex = (currentIndex - 1 + products.length) % products.length;
            setSelectedProduct(products[prevIndex]);
        } else {
            setSelectedProduct(products[index]);
        }
    };

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        {/* Main Image */}
                        <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden group">
                            <img
                                src={mainImage}
                                alt="Latest collection showcase"
                                className="object-cover transition-transform duration-700 group-hover:scale-105 absolute h-full w-full inset-0 text-transparent"
                            />
                            <button
                                onClick={() => handleImageChange("left")}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
                            >
                                <ChevronLeft className="h-5 w-5 text-gray-800" />
                            </button>
                            <button
                                onClick={() => handleImageChange("right")}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
                            >
                                <ChevronRight className="h-5 w-5 text-gray-800" />
                            </button>
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                {collection.products.map((product, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleImageChange("", index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-200  ${
                                            mainImage === product.images[0].url ? "bg-white" : "bg-white/50"
                                        }`}
                                    ></button>
                                ))}
                            </div>
                        </div>
                        {/* Bottom Thumbnails */}
                        <div className="grid grid-cols-4 gap-3">
                            {collection.products.map((product, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleImageChange("", index)}
                                    className={`aspect-square bg-gray-100 rounded-lg overflow-hidden transition-all duration-200 ${
                                        mainImage === product.images[0].url
                                            ? "ring-2 ring-black"
                                            : "hover:ring-2 hover:ring-gray-300"
                                    }`}
                                >
                                    <img
                                        src={product.images[0].url}
                                        alt={product.images[0].altText || product.name}
                                        className="w-full h-full object-cover text-transparent"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="space-y-8">
                        <div>
                            <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full mb-4">
                                New Collection
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                {collection.name}
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">{collection.description}</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-semibold text-gray-900">Featured Item</h3>
                                <span className="text-2xl font-bold text-gray-900">
                                    ${collection.products[0].price}
                                </span>
                            </div>
                            <h4 className="font-medium text-gray-800 mb-2">{collection.products[0].name}</h4>
                            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                {collection.products[0].description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {collection.products[0].colors.map((color) => (
                                    <span className="px-2 py-1 bg-white text-gray-600 text-xs rounded border">
                                        {color}
                                    </span>
                                ))}
                            </div>
                            <Link
                                to={`product/${collection.products[0]._id}`}
                                className="inline-flex items-center text-black hover:text-gray-700 font-medium text-sm transition-colors"
                            >
                                View Details
                                <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/collection/all"
                                className="flex-1 bg-black text-white px-8 py-4 text-center font-medium hover:bg-gray-800 transition-colors duration-200"
                            >
                                Shop Collection
                            </Link>
                            <Link
                                to="/collection/all?category=t-shirts"
                                className="flex-1 border border-black text-black px-8 py-4 text-center font-medium hover:bg-black hover:text-white transition-colors duration-200"
                            >
                                View T-Shirts
                            </Link>
                        </div>
                        <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-gray-900 mb-1">
                                    {collection.productCount > 4 ? "4+" : collection.productCount}
                                </div>
                                <div className="text-sm text-gray-600">New Items</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-gray-900 mb-1">100%</div>
                                <div className="text-sm text-gray-600">{collection.products[0].material}</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-gray-900 mb-1">30</div>
                                <div className="text-sm text-gray-600">Day Returns</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedCollection;
