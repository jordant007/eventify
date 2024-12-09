import React from 'react';
import { FacebookIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[rgb(30,30,30)] text-white py-12 px-16">
      <div className="flex flex-wrap justify-between gap-8 items-start">
        {/* Navigation Links */}
        <div className="flex-1 min-w-[200px]">
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="index.html" className="text-amber-300 hover:text-amber-500 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="calculator.html" className="text-amber-300 hover:text-amber-500 transition-colors">
                Budget Calculator
              </a>
            </li>
            <li>
              <a href="saved-plans.html" className="text-amber-300 hover:text-amber-500 transition-colors">
                Saved Plans
              </a>
            </li>
            <li>
              <a href="login.html" className="text-amber-300 hover:text-amber-500 transition-colors">
                Login/Signup
              </a>
            </li>
          </ul>
        </div>
        {/* Newsletter Subscription */}
        <div className="flex-[2] min-w-[300px]">
          <h4 className="text-lg font-semibold text-amber-400 mb-4">Subscribe to Our Newsletter</h4>
          <p className="text-sm mb-4">Get the latest updates and tips for planning your perfect event.</p>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="p-2 border border-amber-500 rounded bg-gray-700 text-white placeholder-amber-300 placeholder-opacity-80 text-sm"
            />
            <button
              type="submit"
              className="p-2 bg-amber-500 text-gray-800 rounded hover:bg-amber-600 transition-colors cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
        {/* Social Media Icons */}
        <div className="flex-1 text-center">
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex justify-center space-x-4">
            <a href="#" aria-label="Facebook" className="text-amber-300 hover:text-amber-500 transition-colors">
              <FacebookIcon size={24} />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-amber-300 hover:text-amber-500 transition-colors">
              <LinkedinIcon size={24} />
            </a>
            <a href="#" aria-label="Twitter" className="text-amber-300 hover:text-amber-500 transition-colors">
              <TwitterIcon size={24} />
            </a>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <p className="text-center mt-8 text-sm">&copy; 2024 Eventify. All rights reserved.</p>
    </footer>
  );
};

export default Footer;