import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase'; // Import Firebase auth
import { signOut, onAuthStateChanged } from 'firebase/auth';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user); // Set true if user exists, otherwise false
    });

    return unsubscribe; // Cleanup listener on component unmount
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/calculator', label: 'Budget Calculator' },
    { to: '/saved-plans', label: 'Saved Plans' },
  ];

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-black/80 backdrop-blur-md sticky top-0 z-50 shadow-md">
      <div className="text-2xl font-bold text-amber-500 tracking-wider uppercase">
        Eventify
      </div>

      {/* Hamburger Menu for Mobile */}
      <div 
        className="md:hidden cursor-pointer space-y-1.5"
        onClick={toggleMobileMenu}
      >
        <span className="block w-6 h-0.5 bg-white"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center space-x-6">
        {navLinks.map((link) => (
          <li key={link.to} className="relative group">
            <Link 
              to={link.to} 
              className="text-white font-medium transition-colors group-hover:text-amber-500 relative"
            >
              {link.label}
              <span className="absolute bottom-[-5px] left-0 h-0.5 bg-amber-500 w-0 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
        ))}

        {/* Conditional Login/Logout */}
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="text-white font-medium bg-amber-500 py-2 px-4 rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        ) : (
          <>
            <li>
              <Link 
                to="/login" 
                className="text-white font-medium transition-colors hover:text-amber-500"
              >
                Login
              </Link>
            </li>
            <li>
              <Link 
                to="/sign-up" 
                className="text-white font-medium transition-colors hover:text-amber-500"
              >
                Signup
              </Link>
            </li>
          </>
        )}
      </ul>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/90 z-40 flex flex-col items-center justify-center">
          <button 
            onClick={toggleMobileMenu} 
            className="absolute top-6 right-6 text-white text-2xl"
          >
            ×
          </button>
          <ul className="space-y-6 text-center">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link 
                  to={link.to} 
                  className="text-white text-2xl font-medium hover:text-amber-500 transition-colors"
                  onClick={toggleMobileMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            {/* Conditional Login/Logout */}
            {isLoggedIn ? (
              <button
                onClick={() => {
                  handleLogout();
                  toggleMobileMenu();
                }}
                className="text-white text-2xl font-medium bg-red-500 py-2 px-4 rounded hover:bg-red-600 transition"
              >
                Logout
              </button>
            ) : (
              <>
                <li>
                  <Link 
                    to="/login" 
                    className="text-white text-2xl font-medium hover:text-amber-500"
                    onClick={toggleMobileMenu}
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/sign-up" 
                    className="text-white text-2xl font-medium hover:text-amber-500"
                    onClick={toggleMobileMenu}
                  >
                    Signup
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
