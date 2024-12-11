import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; // Adjust path as needed
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"; // Import eye icons
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SignUp = () => {
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = formState;

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/login"); // Redirect to login or homepage
    } catch (err) {
      let errorMessage = "An error occurred.";
      switch (err.code) {
        case "auth/email-already-in-use":
          errorMessage = "This email is already in use.";
          break;
        case "auth/invalid-email":
          errorMessage = "The email address is invalid.";
          break;
        case "auth/weak-password":
          errorMessage = "The password is too weak.";
          break;
        default:
          errorMessage = err.message;
      }
      setError(errorMessage);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen" style={{ backgroundColor: 'rgb(21,21,21)' }}>
        <div className="bg-[rgb(29,29,29)] rounded-lg shadow-lg w-full max-w-md p-6 text-[rgb(212,175,55)]">
          <h2 className="text-center text-2xl font-semibold mb-4">
            Create Your Account
          </h2>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formState.fullName}
              onChange={handleChange}
              className="w-full p-3 rounded bg-[rgb(15,15,15)] border border-[rgb(212,175,55)] text-[rgb(212,175,55)] focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formState.email}
              onChange={handleChange}
              className="w-full p-3 rounded bg-[rgb(15,15,15)] border border-[rgb(212,175,55)] text-[rgb(212,175,55)] focus:outline-none"
              required
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formState.password}
                onChange={handleChange}
                className="w-full p-3 rounded bg-[rgb(15,15,15)] border border-[rgb(212,175,55)] text-[rgb(212,175,55)] focus:outline-none"
                required
              />
              <span
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-3 text-[rgb(212,175,55)] cursor-pointer"
              >
                {showPassword ? <AiFillEyeInvisible size={24} /> : <AiFillEye size={24} />}
              </span>
            </div>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formState.confirmPassword}
                onChange={handleChange}
                className="w-full p-3 rounded bg-[rgb(15,15,15)] border border-[rgb(212,175,55)] text-[rgb(212,175,55)] focus:outline-none"
                required
              />
              <span
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="absolute right-3 top-3 text-[rgb(212,175,55)] cursor-pointer"
              >
                {showConfirmPassword ? <AiFillEyeInvisible size={24} /> : <AiFillEye size={24} />}
              </span>
            </div>
            <button
              type="submit"
              className="w-full bg-[rgb(212,175,55)] hover:bg-yellow-600 text-black font-bold py-2 rounded transition duration-300"
            >
              Sign Up
            </button>
          </form>
          <p className="text-center text-sm text-gray-400 mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-[rgb(212,175,55)] font-semibold hover:text-yellow-500">
              Login
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
