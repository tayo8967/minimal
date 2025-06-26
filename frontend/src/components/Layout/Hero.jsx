import { Link } from "react-router-dom";
import heroImg from "../../assets/minimal-hero.jpg";

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src={heroImg}
                    alt="Minimal"
                    className="object-cover object-center absolute w-full h-full inset-0 text-transparent"
                />
                <div className="absolute inset-0 bg-black/20"></div>
            </div>

            <div className="relative z-10 text-center space-y-6 px-4 max-w-4xl mx-auto">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg">
                    Minimal Essentials
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-white drop-shadow-md max-w-3xl mx-auto leading-relaxed">
                    Discover our carefully curated collection of premium basics.
                    Clean lines, quality materials, timeless design.
                </p>
                <div className="pt-4">
                    <Link
                        to="/collection/all"
                        className="inline-block bg-white text-black px-8 py-4 font-medium hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-transform"
                    >
                        Shop Collection
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
