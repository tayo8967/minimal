import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("User Login: ", { email, password });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">Sign in to your account</h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Don't have an account?{" "}
                        <Link to="/register" className="font-medium text-black hover:text-gray-700">
                            Sign Up
                        </Link>
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    <div className="space-y-4">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="w-full rounded-none border border-gray-300 bg-white px-4 py-3 transition-colors duration-200"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full rounded-none border border-gray-300 bg-white px-4 py-3 transition-colors duration-200"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 px-4 rounded font-medium transition-colors bg-black text-white hover:bg-gray-800"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
