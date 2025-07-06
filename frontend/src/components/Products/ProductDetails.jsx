import { useEffect, useState } from "react";
import { toast } from "sonner";
import { ChevronLeft, ChevronRight } from "lucide-react";

const selectedProduct = {
    name: "Classic Black Tee",
    price: 19.99,
    description:
        "Our signature black t-shirt made from sustainable materials. Features a relaxed fit and superior comfort.",
    material: "Organic Cotton",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "White", "Navy"],
    images: [
        {
            url: "https://picsum.photos/500/500?random=1",
            altText: "Classic Black Tee 1",
        },
        {
            url: "https://picsum.photos/500/500?random=2",
            altText: "Classic Black Tee 2",
        },
    ],
};

const ProductDetails = () => {
    const [mainImage, setMainImage] = useState("");
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    useEffect(() => {
        if (selectedProduct?.images?.length > 0) {
            setMainImage(selectedProduct.images[0].url);
        }
    }, [selectedProduct]);

    const handleAddToCart = () => {
        if (!selectedSize || !selectedColor) {
            toast.error("Please select a size and color before adding to cart", {
                duration: 1000,
            });
            return;
        }

        setIsButtonDisabled(true);

        setTimeout(() => {
            toast.success("Product added to cart!", {
                duration: 1000,
            });
            setIsButtonDisabled(false);
        }, 500);
    };

    const handleImageChange = (direction, index) => {
        const images = selectedProduct.images;
        const currentIndex = images.map((image) => image.url).indexOf(mainImage);

        if (direction === "right") {
            const nextIndex = (currentIndex + 1) % images.length;
            setMainImage(images[nextIndex].url);
        } else if (direction === "left") {
            const prevIndex = (currentIndex - 1 + images.length) % images.length;
            setMainImage(images[prevIndex].url);
        } else {
            setMainImage(images[index].url);
        }
    };

    const handleQuantityChange = (action) => {
        if (action === "plus") setQuantity((prev) => prev + 1);
        if (action === "minus" && quantity > 1) setQuantity((prev) => prev - 1);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid md:grid-cols-2 gap-12">
                {/* Left Side */}
                <div className="space-y-4">
                    {/* Main Image */}
                    <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
                        <img
                            src={mainImage}
                            alt="Main Product"
                            className="object-cover absolute h-full w-full inset-0 text-transparent"
                        />
                        <button
                            onClick={() => handleImageChange("left")}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                            onClick={() => handleImageChange("right")}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Bottom Thumbnail */}
                    <div className="flex space-x-2 overflow-x-auto">
                        {selectedProduct.images.map((image, index) => (
                            <button
                                key={index}
                                onClick={() => handleImageChange("", index)}
                                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                                    mainImage === image.url ? "border-black" : "border-gray-200"
                                }`}
                            >
                                <img
                                    src={image.url}
                                    alt={image.altText}
                                    className="w-full h-full object-cover text-transparent"
                                />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Side */}
                <div className="space-y-6">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">{selectedProduct.name}</h1>
                        <p className="text-2xl font-semibold text-gray-900">${selectedProduct.price}</p>
                    </div>

                    <div className="text-gray-600 leading-relaxed">{selectedProduct.description}</div>

                    <div>
                        <h3 className="font-medium text-gray-900 mb-3">Size</h3>
                        <div className="flex flex-wrap gap-2">
                            {selectedProduct.sizes.map((size, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedSize(size)}
                                    className={`px-4 py-2 border rounded ${
                                        selectedSize === size
                                            ? "bg-black text-white border-black"
                                            : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
                                    }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-medium text-gray-900 mb-3">Color</h3>
                        <div className="flex flex-wrap gap-2">
                            {selectedProduct.colors.map((color, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedColor(color)}
                                    className={`px-4 py-2 border rounded ${
                                        selectedColor === color
                                            ? "bg-black text-white border-black"
                                            : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
                                    }`}
                                >
                                    {color}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-medium text-gray-900 mb-3">Quantity</h3>
                        <div className="flex items-center space-x-3">
                            <button
                                onClick={() => handleQuantityChange("minus")}
                                className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center hover:border-gray-400"
                            >
                                -
                            </button>
                            <span className="text-lg font-medium w-8 text-center">{quantity}</span>
                            <button
                                onClick={() => handleQuantityChange("plus")}
                                className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center hover:border-gray-400"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    <button
                        onClick={handleAddToCart}
                        disabled={isButtonDisabled}
                        className={`w-full py-4 rounded font-medium transition-colors bg-black text-white ${
                            isButtonDisabled ? "cursor-not-allowed opacity-50" : "hover:bg-gray-800"
                        }`}
                    >
                        {isButtonDisabled ? "Adding..." : "Add to Cart"}
                    </button>

                    <div className="border-t border-gray-200 pt-6 space-y-4">
                        <div>
                            <h4 className="font-medium text-gray-900 mb-2">Materials & Care</h4>
                            <p className="text-sm text-gray-600">
                                100% {selectedProduct.material.toLocaleLowerCase()}. Machine wash cold, tumble dry low.
                                Do not bleach.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-medium text-gray-900 mb-2">Shipping & Returns</h4>
                            <p className="text-sm text-gray-600">
                                Free shipping on orders over $75. 30-day return policy.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
