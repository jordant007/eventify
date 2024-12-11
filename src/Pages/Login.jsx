import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const auth = getAuth();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/"); // Navigate to the home page on successful login
    } catch (err) {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen" style={{ backgroundColor: 'rgb(21,21,21)' }}>
        <div className="max-w-md w-full bg-[rgb(29,29,29)] p-8 rounded-lg shadow-lg text-[rgb(212,175,55)]">
          <h2 className="text-2xl font-bold text-center mb-6">
            Login to Eventify
          </h2>

          {error && (
            <div className="bg-red-500 text-white text-sm p-3 rounded mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 bg-[rgb(15,15,15)] text-[rgb(212,175,55)] border border-[rgb(212,175,55)] rounded focus:outline-none focus:ring-2 focus:ring-[rgb(212,175,55)]"
              />
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-3 bg-[rgb(15,15,15)] text-[rgb(212,175,55)] border border-[rgb(212,175,55)] rounded focus:outline-none focus:ring-2 focus:ring-[rgb(212,175,55)]"
              />
              <span
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-3 text-[rgb(212,175,55)] cursor-pointer"
              >
                {showPassword ? <AiFillEyeInvisible size={24} /> : <AiFillEye size={24} />}
              </span>
            </div>
            <button
              type="submit"
              className="w-full bg-[rgb(212,175,55)] text-black font-bold py-2 rounded hover:bg-yellow-600 transition"
            >
              Login
            </button>
          </form>

          <p className="text-center text-sm text-gray-400 mt-4">
            Don't have an account?{" "}
            <a
              href="/sign-up"
              className="text-[rgb(212,175,55)] font-semibold hover:text-yellow-500"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
