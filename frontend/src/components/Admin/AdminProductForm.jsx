import { Image, Plus, Save, Upload, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const AdminProductForm = ({ type, isOpen, onClose, productDetails }) => {
    if (!isOpen) return null;

    const [productData, setProductData] = useState({
        _id: 0,
        name: "",
        description: "",
        price: 0,
        category: "t-shirts",
        sizes: [],
        colors: [],
        inStock: true,
        isFeatured: false,
        images: [],
    });
    const [selectedTab, setSelectedTab] = useState(0);
    const fileInputRef = useRef(null);

    useEffect(() => {
        setProductData(productDetails);
    }, []);

    const handleTabChange = () => {
        if (selectedTab == 0) {
            setSelectedTab(1);
        } else {
            setSelectedTab(0);
        }
    };

    const handleFileUpload = () => {
        fileInputRef.current.click();
    };

    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;

        setProductData((prevData) => ({ ...prevData, [name]: type === "checkbox" ? checked : value }));
    };

    const handleImageUpload = async (e) => {
        const files = Array.from(e.target.files);
        console.log(files);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(productData);
    };

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6 border-b border-gray-200">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold text-gray-900">{type} Product</h2>
                        <button className="text-gray-400 hover:text-gray-600">
                            <X onClick={onClose} className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Tabs */}
                    <div className="flex space-x-4 mt-4">
                        <button
                            onClick={handleTabChange}
                            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                                selectedTab == 0
                                    ? "bg-black text-white"
                                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                            }`}
                        >
                            Product Details
                        </button>

                        <button
                            onClick={handleTabChange}
                            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors flex items-center space-x-2 ${
                                selectedTab == 1
                                    ? "bg-black text-white"
                                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                            }`}
                        >
                            <Image className="h-4 w-4" />
                            <span>Images ({productData.images.length})</span>
                        </button>
                    </div>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="p-6">
                        <div className="space-y-6">
                            {selectedTab == 0 ? (
                                <>
                                    {/* Product Details Form */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Product Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={productData.name}
                                                onChange={handleChange}
                                                className="w-full rounded-none border border-gray-300 px-4 py-3 transition-colors duration-200"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Price *
                                            </label>
                                            <input
                                                type="number"
                                                name="price"
                                                value={productData.price}
                                                onChange={handleChange}
                                                className="w-full rounded-none border border-gray-300 px-4 py-3 transition-colors duration-200"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Description
                                        </label>
                                        <textarea
                                            rows="3"
                                            name="description"
                                            value={productData.description}
                                            onChange={handleChange}
                                            className="w-full rounded-none border border-gray-300 px-4 py-3 transition-colors duration-200 resize-none"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Category
                                            </label>
                                            <select
                                                name="category"
                                                value={productData.category}
                                                onChange={handleChange}
                                                className="w-full rounded-none border border-gray-300 px-4 py-3 transition-colors duration-200 resize-none"
                                            >
                                                <option value="t-shirts">T-Shirts</option>
                                                <option value="hoodies">Hoodies</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Sizes (comma-separated)
                                            </label>
                                            <input
                                                type="text"
                                                name="sizes"
                                                value={productData.sizes.join(", ")}
                                                onChange={(e) =>
                                                    setProductData({
                                                        ...productData,
                                                        sizes: e.target.value.split(",").map((size) => size.trim()),
                                                    })
                                                }
                                                placeholder="XS, S, M, L, XL"
                                                className="w-full rounded-none border border-gray-300 px-4 py-3 transition-colors duration-200 resize-none"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Colors (comma-separated)
                                        </label>
                                        <input
                                            type="text"
                                            name="colors"
                                            value={productData.colors.join(", ")}
                                            onChange={(e) =>
                                                setProductData({
                                                    ...productData,
                                                    colors: e.target.value.split(",").map((color) => color.trim()),
                                                })
                                            }
                                            placeholder="Black, White, Gray"
                                            className="w-full rounded-none border border-gray-300 px-4 py-3 transition-colors duration-200 resize-none"
                                        />
                                    </div>

                                    <div className="flex items-center space-x-6">
                                        <label className="flex items-center">
                                            <input
                                                type="checkbox"
                                                name="inStock"
                                                value={productData.inStock}
                                                onChange={handleChange}
                                                checked={productData.inStock}
                                                className="mr-2"
                                            />
                                            <span className="text-sm text-gray-700">In Stock</span>
                                        </label>

                                        <label className="flex items-center">
                                            <input
                                                type="checkbox"
                                                name="isFeatured"
                                                value={productData.isFeatured}
                                                onChange={handleChange}
                                                checked={productData.isFeatured}
                                                className="mr-2"
                                            />
                                            <span className="text-sm text-gray-700">Featured Product</span>
                                        </label>
                                    </div>
                                </>
                            ) : (
                                <>
                                    {/* Image Upload */}
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900 mb-4">Product Images</h3>
                                        <p className="text-sm text-gray-600 mb-6">
                                            Upload high-quality images of your product. The first image will be used as
                                            the primary product image.
                                        </p>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="border-2 border-dashed rounded-lg p-8 text-center transition-colors border-gray-300 hover:border-gray-400">
                                            <input
                                                type="file"
                                                ref={fileInputRef}
                                                onChange={handleImageUpload}
                                                accept="image/jpeg,image/png,image/webp"
                                                className="hidden"
                                                multiple
                                            />
                                            <div className="space-y-4">
                                                <div className="flex justify-center">
                                                    <Upload className="h-12 w-12" />
                                                </div>

                                                <div className="text-center">
                                                    <p className="text-lg font-medium text-gray-900">
                                                        Drop images here or click to upload
                                                    </p>
                                                    <p className="text-sm text-gray-500 mt-1">
                                                        Support for jpeg, png, webp up to 10MB each
                                                    </p>
                                                    <p className="text-xs text-gray-400 mt-1">
                                                        Maximum 8 images • Images will be optimized automatically
                                                    </p>
                                                    <button
                                                        type="button"
                                                        onClick={handleFileUpload}
                                                        className="mx-auto mt-6 flex items-center gap-2 px-6 py-3 bg-black text-white font-medium rounded-none transition-colors duration-200"
                                                    >
                                                        <Plus className="h-4 w-4 mr-2" />
                                                        Select Images
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="p-6 border-t border-gray-200 flex justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                            {productData.images.length == 0 && (
                                <span className="text-red-600">⚠ At least one image is required</span>
                            )}
                        </div>

                        <div className="flex space-x-3">
                            <button
                                onClick={onClose}
                                className="px-4 py-2 text-gray-700 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="w-full rounded-none border-1 border-black bg-black px-6 py-3 font-medium text-white transition-colors duration-200 ease-in-out text-center flex items-center space-x-2"
                            >
                                <Save className="h-4 w-4" />
                                <span>{type == "Add New" ? "Add" : "Update"} Product</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminProductForm;
