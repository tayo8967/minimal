import { Image, SquarePen, Trash2 } from "lucide-react";

const AdminProductGrid = ({ products }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                    {/* Image content */}
                    <div className="aspect-square bg-gray-100 relative">
                        <img
                            src={product.images[0].url}
                            alt={product.images[0].altText}
                            className="object-cover absolute h-full w-full inset-0 text-transparent"
                        />

                        {product.isFeatured && (
                            <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
                                Featured
                            </span>
                        )}

                        {product.inStock ? (
                            <span className="absolute top-2 right-2 text-xs px-2 py-1 rounded bg-green-100 text-green-800">
                                In Stock
                            </span>
                        ) : (
                            <span className="absolute top-2 right-2 text-xs px-2 py-1 rounded bg-red-100 text-red-800">
                                Out of Stock
                            </span>
                        )}

                        <span className="absolute bottom-2 left-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded flex items-center space-x-1">
                            <Image className="h-3 w-3" />
                            <span>{product.images.length}</span>
                        </span>
                    </div>

                    {/* Product details */}
                    <div className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                        <p className="text-sm text-gray-600 mb-2 line-clamp-2">{product.description}</p>
                        <p className="text-lg font-bold text-gray-900 mb-4">${product.price}</p>
                        <div className="flex items-center justify-between">
                            <div className="flex space-x-2">
                                <button className="p-2 text-gray-600 hover:text-black hover:bg-gray-100 rounded transition-colors">
                                    <SquarePen className="h-4 w-4" />
                                </button>

                                <button className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded transition-colors">
                                    <Trash2 className="h-4 w-4" />
                                </button>
                            </div>

                            <span className="text-xs text-gray-500 capitalize">{product.category}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AdminProductGrid;
