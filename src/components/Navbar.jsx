import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { href: 'index.html', label: 'Home' },
    { href: 'calculator.html', label: 'Budget Calculator' },
    { href: 'saved-plans.html', label: 'Saved Plans' },
    { href: 'login.html', label: 'Login' },
    { href: 'sign-up.html', label: 'Signup' }
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
          <li key={link.href} className="relative group">
            <a 
              href={link.href} 
              className="text-white font-medium transition-colors group-hover:text-amber-500 relative"
            >
              {link.label}
              <span className="absolute bottom-[-5px] left-0 h-0.5 bg-amber-500 w-0 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
        ))}
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
              <li key={link.href}>
                <a 
                  href={link.href} 
                  className="text-white text-2xl font-medium hover:text-amber-500 transition-colors"
                  onClick={toggleMobileMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;