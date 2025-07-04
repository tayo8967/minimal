import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 mt-16">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    <div className="lg:col-span-1">
                        <Link to="/" className="text-2xl font-bold text-black mb-4 block">
                            MINIMAL
                        </Link>
                        <p className="text-gray-600 text-sm leading-relaxed mb-6">
                            Crafting timeless essentials with clean lines and premium materials. Our minimalist approach
                            focuses on quality over quantity, creating pieces that transcend trends and stand the test
                            of time.
                        </p>
                        <div className="flex space-x-4">
                            <Link to="#" className="text-gray-400 hover:text-black transition-colors duration-200">
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link to="#" className="text-gray-400 hover:text-black transition-colors duration-200">
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link to="#" className="text-gray-400 hover:text-black transition-colors duration-200">
                                <Twitter className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Shop Links */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    to="/"
                                    className="text-gray-600 hover:text-black transition-colors duration-200 text-sm"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/collections/all"
                                    className="text-gray-600 hover:text-black transition-colors duration-200 text-sm"
                                >
                                    Shop
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/"
                                    className="text-gray-600 hover:text-black transition-colors duration-200 text-sm"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/"
                                    className="text-gray-600 hover:text-black transition-colors duration-200 text-sm"
                                >
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/cart"
                                    className="text-gray-600 hover:text-black transition-colors duration-200 text-sm"
                                >
                                    Shopping Cart
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Customer Service</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    to="/"
                                    className="text-gray-600 hover:text-black transition-colors duration-200 text-sm"
                                >
                                    Shipping Info
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/"
                                    className="text-gray-600 hover:text-black transition-colors duration-200 text-sm"
                                >
                                    Returns & Exchanges
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/"
                                    className="text-gray-600 hover:text-black transition-colors duration-200 text-sm"
                                >
                                    Size Guide
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/"
                                    className="text-gray-600 hover:text-black transition-colors duration-200 text-sm"
                                >
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/cart"
                                    className="text-gray-600 hover:text-black transition-colors duration-200 text-sm"
                                >
                                    Customer Support
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Follow us */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Get in Touch</h3>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <Mail className="h-4 w-4 text-gray-400 flex-shrink-0" />
                                <Link
                                    to="/"
                                    className="text-gray-600 hover:text-black transition-colors duration-200 text-sm"
                                >
                                    hello@minimal.com
                                </Link>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="h-4 w-4 text-gray-400 flex-shrink-0" />
                                <Link
                                    to="/"
                                    className="text-gray-600 hover:text-black transition-colors duration-200 text-sm"
                                >
                                    +1 (234) 567-890
                                </Link>
                            </div>
                            <div className="flex items-start space-x-3">
                                <MapPin className="h-4 w-4 text-gray-400 flex-shrink-0" />
                                <address className="text-gray-600 text-sm not-italic leading-relaxed">
                                    123 Minimal Street
                                    <br />
                                    Design District
                                    <br />
                                    New York, NY 10001
                                </address>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="border-t border-gray-200 pt-8 mb-8">
                    <div className="max-w-md mx-auto text-center">
                        <h3 className="font-semibold text-gray-900 mb-2">Stay Updated</h3>
                        <p className="text-gray-600 text-sm mb-4">
                            Subscribe to our newsletter for the latest updates and exclusive offers.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                className="flex-1 px-4 py-2 border border-gray-300 rounded-none focus:outline-none focus:border-black transition-colors duration-200 text-sm"
                                placeholder="Enter your email"
                                required
                            />
                            <button
                                type="submit"
                                className="px-6 py-2 bg-black text-white hover:bg-gray-800 transition-colors duration-200 font-medium text-sm whitespace-nowrap"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                <div className="border-t border-gray-200 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-gray-600 text-sm text-center md:text-left">
                            © 2025 MINIMAL. All rights reserved.
                        </div>
                        <div className="flex flex-wrap justify-center md:justify-end space-x-6">
                            <Link
                                to="/"
                                className="text-gray-600 hover:text-black transition-colors duration-200 text-sm"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                to="/"
                                className="text-gray-600 hover:text-black transition-colors duration-200 text-sm"
                            >
                                Terms of Service
                            </Link>
                            <Link
                                to="/"
                                className="text-gray-600 hover:text-black transition-colors duration-200 text-sm"
                            >
                                Cookie Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
