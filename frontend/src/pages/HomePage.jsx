import Hero from "../components/Layout/Hero";
import ProductGrid from "../components/Products/ProductGrid";

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

const HomePage = () => {
    return (
        <div className="min-h-screen">
            <Hero />

            {/* Feature Products */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Featured Products
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Our most popular pieces, loved for their versatility
                            and quality craftsmanship.
                        </p>
                    </div>
                    <ProductGrid products={placeholderProducts} />
                </div>
            </section>
        </div>
    );
};

export default HomePage;
