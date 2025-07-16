import React, { useState } from "react";
import { Sun, X, Menu } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavLink = ({ section, children }) => (
    <button
      onClick={() => scrollToSection(section)}
      className="px-4 py-2 rounded-full text-gray-700 hover:text-yellow-600 hover:bg-yellow-50 transition-all duration-300"
    >
      {children}
    </button>
  );

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <Sun className="w-8 h-8 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              Daksh SolarTech India
            </span>
          </div>

          <nav className="hidden md:flex space-x-2">
            <NavLink section="home">Home</NavLink>
            <NavLink section="about">About</NavLink>
            <NavLink section="services">Services</NavLink>
            <NavLink section="portfolio">Portfolio</NavLink>
            <NavLink section="contact">Contact</NavLink>
          </nav>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 p-4 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col space-y-2">
              <NavLink section="home">Home</NavLink>
              <NavLink section="about">About</NavLink>
              <NavLink section="services">Services</NavLink>
              <NavLink section="portfolio">Portfolio</NavLink>
              <NavLink section="contact">Contact</NavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
