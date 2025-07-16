import React, { useState } from "react";
import { Zap, Star, Users, Award } from "lucide-react";
export default function Hero() {
  const stats = [
    {
      number: "500+",
      label: "Projects Completed",
      icon: <Award className="w-8 h-8 text-yellow-500" />,
    },
    {
      number: "50MW+",
      label: "Total Capacity",
      icon: <Zap className="w-8 h-8 text-blue-500" />,
    },
    {
      number: "1000+",
      label: "Happy Customers",
      icon: <Users className="w-8 h-8 text-green-500" />,
    },
    {
      number: "5",
      label: "Years Experience",
      icon: <Star className="w-8 h-8 text-purple-500" />,
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };
  const NavLink = ({ section, children }) => (
    <button
      onClick={() => scrollToSection(section)}
      className="px-4 py-2 rounded-full text-gray-700 hover:text-yellow-600 hover:bg-yellow-50 transition-all duration-300"
    >
      {children}
    </button>
  );

  return (
    <section
      id="home"
      className="flex items-center py-10 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-yellow-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-blue-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-600 via-orange-500 to-red-500 bg-clip-text text-transparent leading-tight">
              Power Your Future
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Leading solar panel installation company providing clean,
              renewable energy solutions for homes and businesses across India.
              Join the solar revolution today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Get Free Quote
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="border-2 border-yellow-400 text-yellow-600 px-8 py-4 rounded-full font-semibold hover:bg-yellow-50 transition-all duration-300"
              >
                View Projects
              </button>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="flex justify-center mb-4">{stat.icon}</div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop"
                alt="Solar panels on roof"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    Clean Energy for Tomorrow
                  </h3>
                  <p className="text-lg opacity-90">
                    Join thousands of satisfied customers
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-green-400 to-blue-500 text-white p-6 rounded-2xl shadow-lg">
              <div className="text-2xl font-bold">₹50,000+</div>
              <div className="text-sm">Monthly Savings</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
