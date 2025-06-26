import { Link } from "react-router-dom";
import SearchModal from "./SearchModal";
import { User, ShoppingBag, LucideMenu, X, Search } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
    const [navDrawerOpen, setNavDrawerOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleNavDrawer = () => {
        setNavDrawerOpen(!navDrawerOpen);
    };

    const handleSearchToggle = () => {
        setIsSearchOpen(!isSearchOpen);
        toggleNavDrawer();
    };

    return (
        <header className="sticky top-0 z-40">
            <nav className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Left - Logo */}
                        <div>
                            <Link
                                to="/"
                                className="text-2xl font-bold text-black"
                            >
                                MINIMAL
                            </Link>
                        </div>
                        {/* Center - Navigation Links */}
                        <div className="hidden md:flex space-x-8">
                            <Link
                                to="/"
                                className="text-gray-700 hover:text-black transition-colors"
                            >
                                Home
                            </Link>
                            <Link
                                to="/collection/all"
                                className="text-gray-700 hover:text-black transition-colors"
                            >
                                Shop
                            </Link>
                        </div>
                        {/* Right - Icons */}
                        <div className="hidden md:flex items-center space-x-4">
                            {/* Search */}
                            <button
                                onClick={handleSearchToggle}
                                className="text-gray-700 hover:text-black transition-colors"
                            >
                                <Search className="h-5 w-5" />
                            </button>

                            {/* User Profile */}
                            <Link
                                to="/profile"
                                className="text-gray-700 hover:text-black transition-colors"
                            >
                                <User className="h-5 w-5" />
                            </Link>
                            {/* Cart */}
                            <Link
                                to="/cart"
                                className="text-gray-700 hover:text-black transition-colors"
                            >
                                <ShoppingBag className="h-5 w-5" />
                            </Link>
                        </div>
                        {/* Mobile Navigation */}
                        <button
                            onClick={toggleNavDrawer}
                            className="md:hidden text-gray-700 hover:text-black transition-colors"
                        >
                            {navDrawerOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <LucideMenu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
                {navDrawerOpen && (
                    <div className="md:hidden bg-white border-t border-gray-200">
                        <div className="px-4 py-4 space-y-4">
                            <Link
                                to="/"
                                onClick={toggleNavDrawer}
                                className="block text-gray-700 hover:text-black transition-colors"
                            >
                                Home
                            </Link>
                            <Link
                                to="/collection/all"
                                onClick={toggleNavDrawer}
                                className="block text-gray-700 hover:text-black transition-colors"
                            >
                                Shop
                            </Link>

                            <button
                                onClick={handleSearchToggle}
                                className="text-gray-700 hover:text-black transition-colors"
                            >
                                Search
                            </button>

                            <Link
                                to="/profile"
                                onClick={toggleNavDrawer}
                                className="block text-gray-700 hover:text-black transition-colors"
                            >
                                User
                            </Link>
                            <Link
                                to="/cart"
                                onClick={toggleNavDrawer}
                                className="block text-gray-700 hover:text-black transition-colors"
                            >
                                Cart (0)
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
            <SearchModal
                open={isSearchOpen}
                onClose={() => setIsSearchOpen()}
            />
        </header>
    );
};

export default Navbar;
