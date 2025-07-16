import React, { useState } from "react";
import { Sun, Zap, Shield, Leaf } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Sun className="w-12 h-12 text-yellow-500" />,
      title: "Residential Solar",
      description:
        "Complete rooftop solar solutions for homes with maximum efficiency and cost savings.",
    },
    {
      icon: <Zap className="w-12 h-12 text-blue-500" />,
      title: "Commercial Solar",
      description:
        "Large-scale solar installations for businesses and industrial facilities.",
    },
    {
      icon: <Shield className="w-12 h-12 text-green-500" />,
      title: "Maintenance & Support",
      description:
        "24/7 monitoring and maintenance services to ensure optimal performance.",
    },
    {
      icon: <Leaf className="w-12 h-12 text-emerald-500" />,
      title: "Green Energy Consulting",
      description:
        "Expert consultation on renewable energy solutions and government incentives.",
    },
  ];
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          Our Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
