import { TriangleAlert } from "lucide-react";

const AdminDeleteProduct = ({ isOpen, onClose, productId }) => {
    if (!isOpen) return null;

    const handleDelete = () => {
        console.log(productId + " is deleted.");
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-md w-full">
                <div className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                        <TriangleAlert className="h-6 w-6 text-red-600" />
                        <h3 className="text-lg font-semibold text-gray-900">Delete Product</h3>
                    </div>
                    <p className="text-gray-600 mb-6">
                        Are you sure you want to delete this product? This action cannot be undone and will remove all
                        associated images.
                    </p>
                    <div className="flex justify-end space-x-3">
                        <button
                            onClick={onClose}
                            className="px-4 py-2 text-gray-700 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleDelete}
                            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                        >
                            Delete Product
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDeleteProduct;
