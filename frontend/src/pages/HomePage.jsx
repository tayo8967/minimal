import Hero from "../components/Layout/Hero";
import ProductGrid from "../components/Products/ProductGrid";
import FeaturedCollection from "../components/Products/FeaturedCollection";

const placeholderProducts = [
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
];

const placeholderCollection = {
    name: "Essential Minimalism",
    productCount: "6",
    description:
        "Discover our latest collection of carefully crafted essentials. Each piece embodies our commitment to timeless design, premium materials, and sustainable practices. From versatile basics to statement pieces, find your perfect minimalist wardrobe.",
    products: [
        {
            _id: 1,
            name: "Essential 1",
            price: 29.99,
            images: [{ url: "https://picsum.photos/500/500?random=1", altText: "Essential 1" }],
            description:
                "A timeless white t-shirt crafted from premium organic cotton. Perfect for everyday wear with its comfortable fit and minimalist design.",
            colors: ["White", "Black", "Gray"],
            material: "Organic Cotton",
        },
        {
            _id: 2,
            name: "Essential 2",
            price: 100,
            images: [{ url: "https://picsum.photos/500/500?random=2", altText: "Essential 2" }],
            description:
                "A timeless white t-shirt crafted from premium organic cotton. Perfect for everyday wear with its comfortable fit and minimalist design.",
            colors: ["White", "Black", "Gray"],
            material: "Organic Cotton",
        },
        {
            _id: 3,
            name: "Essential 3",
            price: 100,
            images: [{ url: "https://picsum.photos/500/500?random=3", altText: "Essential 3" }],
            description:
                "A timeless white t-shirt crafted from premium organic cotton. Perfect for everyday wear with its comfortable fit and minimalist design.",
            colors: ["White", "Black", "Gray"],
            material: "Organic Cotton",
        },
        {
            _id: 4,
            name: "Essential 4",
            price: 100,
            images: [{ url: "https://picsum.photos/500/500?random=4", altText: "Essential 4" }],
            description:
                "A timeless white t-shirt crafted from premium organic cotton. Perfect for everyday wear with its comfortable fit and minimalist design.",
            colors: ["White", "Black", "Gray"],
            material: "Organic Cotton",
        },
    ],
};
const HomePage = () => {
    return (
        <div className="min-h-screen">
            <Hero />

            {/* Feature Products */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Our most popular pieces, loved for their versatility and quality craftsmanship.
                        </p>
                    </div>
                    <ProductGrid products={placeholderProducts} />
                </div>
            </section>

            {/* Featured Collection */}
            <FeaturedCollection collection={placeholderCollection} />
        </div>
    );
};

export default HomePage;
