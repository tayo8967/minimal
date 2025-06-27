import { Link } from "react-router-dom";

const ProductGrid = ({ products }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
                <Link
                    key={index}
                    to={`/product/${product._id}`}
                    className="group"
                >
                    <div className="aspect-square overflow-hidden bg-gray-100 mb-4">
                        <img
                            src={product.images[0].url}
                            alt={product.images[0].altText || product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 text-transparent"
                        />
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
                            {product.name}
                        </h3>
                        <p className="text-gray-600">${product.price}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default ProductGrid;
