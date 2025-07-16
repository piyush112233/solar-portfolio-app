import React, { useState } from "react";
import { Sun, Phone, Mail, MapPin } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  // const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  const handlePhoneClick = () => {
    window.location.href = "tel:+919664405815"; // 📞 call link
  };

  const handleMailClick = () => {
    window.location.href = "mailto:solar@example.com"; // 📧 email link
  };

  const handleLocationClick = () => {
    window.open(
      "https://www.google.com/maps?q=World+Trade+Park,+Jawahar+Lal+Nehru+Marg,+D-Block,+Malviya+Nagar,+Jaipur,+Rajasthan+302017",
      "_blank"
    );
  };
  const handleWhatsappClick = () => {
    const phone = "919664405815";
    const message = `*Hello Sir/Madam*, 

      I just visited your *Solar Services* website and I am really interested in your offerings.

      Please share more details regarding:
        - Rooftop Solar Installation 
        - Pricing and Packages 
        - Government Subsidies & Support 

      Looking forward to connecting with your team. 

      Thanks & Regards`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank"); // 📲 WhatsApp
  };
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <Sun className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold">SolarTech Pro</span>
          </div>
          <p className="text-gray-400 mb-6">
            Leading the solar revolution with innovative renewable energy
            solutions.
          </p>
          <div className="flex justify-center gap-4 mt-4 mb-4">
            <Phone
              onClick={handlePhoneClick}
              className="w-6 h-6 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors"
            />
            <Mail
              onClick={handleMailClick}
              className="w-6 h-6 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors"
            />
            <MapPin
              onClick={handleLocationClick}
              className="w-6 h-6 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors"
            />
            <FontAwesomeIcon
              icon={faWhatsapp}
              onClick={handleWhatsappClick}
              className="w-6 h-6 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors"
            />
          </div>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-400">
              &copy; 2024 SolarTech Pro. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
