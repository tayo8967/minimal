import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const FilterSidebar = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const [filters, setFilters] = useState({
        category: "",
        color: [],
        size: [],
        minPrice: 0,
        maxPrice: 200,
    });
    const [priceRange, setPriceRange] = useState([0, 200]);

    //values for the filters can be stored in the DB
    const categories = ["All", "T-Shirts", "Hoodies"];

    const colors = ["Black", "White", "Gray", "Navy", "Beige"];

    const sizes = ["XS", "S", "M", "L", "XL"];

    useEffect(() => {
        const params = Object.fromEntries([...searchParams]);

        setFilters({
            category: params.category || "",
            color: params.color ? params.color.split(",") : [],
            size: params.size ? params.size.split(",") : [],
            minPrice: params.minPrice || 0,
            maxPrice: params.maxPrice || 200,
        });
        setPriceRange([0, params.maxPrice || 200]);
    }, [searchParams]);

    const handleFilterChange = (e) => {
        const { name, value, checked, type } = e.target;
        let newFilters = { ...filters };

        if (type === "checkbox" || name === "size") {
            if (checked || (name === "size" && !filters["size"].includes(value))) {
                newFilters[name] = [...(newFilters[name] || []), value];
            } else {
                newFilters[name] = newFilters[name].filter((item) => item !== value);
            }
        } else {
            newFilters[name] = value;
        }

        setFilters(newFilters);
        updateURLParams(newFilters);
    };

    const updateURLParams = (newFilters) => {
        const params = new URLSearchParams();
        Object.keys(newFilters).forEach((key) => {
            if (Array.isArray(newFilters[key] && newFilters[key].length > 0)) {
                params.append(key, newFilters[key].join(","));
            } else if (newFilters[key]) {
                params.append(key, newFilters[key]);
            }
        });

        setSearchParams(params);
        navigate(`?${params.toString()}`);
    };

    const handlePriceChange = (e) => {
        const newPrice = e.target.value;
        setPriceRange([0, newPrice]);
        const newFilters = { ...filters, minPrice: 0, maxPrice: newPrice };
        setFilters(filters);
        updateURLParams(newFilters);
    };

    const handleSortChange = (e) => {
        const sortBy = e.target.value;
        searchParams.set("sortBy", sortBy);
        setSearchParams(searchParams);
    };

    const handleClearAll = () => {
        setSearchParams("");
    };

    return (
        <div className="bg-white p-6 border border-gray-200 rounded-lg">
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-gray-900">Filters</h3>
                <button onClick={handleClearAll} className="text-sm text-gray-500 hover:text-gray-700">
                    Clear All
                </button>
            </div>
            {/* Category Filter */}
            <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Category</h4>
                <div className="space-y-2">
                    {categories.map((category) => (
                        <label key={category} className="flex items-center">
                            <input
                                type="radio"
                                name="category"
                                value={category}
                                onChange={handleFilterChange}
                                checked={filters.category == category}
                                className="mr-2"
                            />
                            {category}
                        </label>
                    ))}
                </div>
            </div>

            {/* Price Range Filter */}
            <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Price Range</h4>
                <div className="space-y-2">
                    <input
                        type="range"
                        name="priceRange"
                        min={0}
                        max={100}
                        value={priceRange[1]}
                        onChange={handlePriceChange}
                        className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                        <span>$0</span>
                        <span>${priceRange[1]}</span>
                    </div>
                </div>
            </div>

            {/* Size Filter */}
            <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Size</h4>
                <div className="flex flex-wrap gap-2">
                    {sizes.map((size) => (
                        <button
                            key={size}
                            name="size"
                            value={size}
                            onClick={handleFilterChange}
                            className={`px-3 py-1 border rounded ${
                                filters["size"].includes(size)
                                    ? "bg-black text-white border-black"
                                    : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
                            }`}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>

            {/* Color Filter */}
            <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Color</h4>
                <div className="space-y-2">
                    {colors.map((color) => (
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                name="color"
                                value={color}
                                onChange={handleFilterChange}
                                checked={filters.color.includes(color)}
                                className="mr-2"
                            />
                            {color}
                        </label>
                    ))}
                </div>
            </div>

            {/* Sort Filter */}
            <div>
                <h4 className="font-medium text-gray-900 mb-3">Sort By</h4>
                <select
                    id="sort"
                    onChange={handleSortChange}
                    value={searchParams.get("sortBy") || ""}
                    className="w-full p-2 border border-gray-300 rounded"
                >
                    <option value="name">Name</option>
                    <option value="priceLow">Price: Low to High</option>
                    <option value="priceHigh">Price: High to Low</option>
                    <option value="newest">Newest</option>
                </select>
            </div>
        </div>
    );
};

export default FilterSidebar;
