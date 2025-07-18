import { Link } from "react-router-dom";
import SearchModal from "./SearchModal";
import { User, ShoppingBag, LucideMenu, X, Search, CircleUser, Shield } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
    const [navDrawerOpen, setNavDrawerOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const toggleNavDrawer = () => {
        setNavDrawerOpen(!navDrawerOpen);
    };

    const handleSearchToggle = () => {
        setIsSearchOpen(!isSearchOpen);
        toggleNavDrawer();
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    const handleProfileToggle = () => {
        setIsProfileOpen(!isProfileOpen);
    };

    return (
        <header className="sticky top-0 z-40">
            <nav className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Left - Logo */}
                        <div>
                            <Link to="/" className="text-2xl font-bold text-black">
                                MINIMAL
                            </Link>
                        </div>
                        {/* Center - Navigation Links */}
                        <div className="hidden md:flex space-x-8">
                            <Link to="/" className="text-gray-700 hover:text-black transition-colors">
                                Home
                            </Link>
                            <Link to="/collections/all" className="text-gray-700 hover:text-black transition-colors">
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

                            {/* Auth/User Profile */}
                            {isLoggedIn ? (
                                <div className="relative">
                                    <button
                                        onClick={handleProfileToggle}
                                        className="flex items-center space-x-2 text-gray-700 hover:text-black transition-colors"
                                    >
                                        <CircleUser className="h-6 w-6" />
                                        <span className="text-sm font-medium">John Doe</span>
                                    </button>
                                    {isProfileOpen && (
                                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                                            <Link
                                                to="/profile"
                                                onClick={handleProfileToggle}
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                                            >
                                                My Profile
                                            </Link>
                                            <Link
                                                to="/order-history"
                                                onClick={handleProfileToggle}
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                                            >
                                                Order History
                                            </Link>
                                            <hr className="my-2 border-gray-200" />
                                            <Link
                                                to="/admin"
                                                onClick={handleProfileToggle}
                                                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors flex items-center space-x-2"
                                            >
                                                <Shield className="h-4 w-4" />
                                                <span>Admin Panel</span>
                                            </Link>
                                            <hr className="my-2 border-gray-200" />
                                            <button
                                                onClick={handleLogout}
                                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                                            >
                                                Logout
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link to="/login" className="text-gray-700 hover:text-black transition-colors">
                                    <User className="h-5 w-5" />
                                </Link>
                            )}
                            {/* Cart */}
                            <Link to="/cart" className="relative text-gray-700 hover:text-black transition-colors">
                                <ShoppingBag className="h-5 w-5" />
                                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                    3
                                </span>
                            </Link>
                        </div>
                        {/* Mobile Navigation */}
                        <button
                            onClick={toggleNavDrawer}
                            className="md:hidden text-gray-700 hover:text-black transition-colors"
                        >
                            {navDrawerOpen ? <X className="h-6 w-6" /> : <LucideMenu className="h-6 w-6" />}
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
                                to="/collections/all"
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
            <SearchModal open={isSearchOpen} onClose={() => setIsSearchOpen()} />
        </header>
    );
};

export default Navbar;
