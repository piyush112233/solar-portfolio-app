import React, { useState } from "react";
import { Phone, Mail, MapPin, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.phone && formData.message) {
      alert("Thank you!");
      window.location.href = "/thank-you";
    } else {
      alert("Please fill all fields.");
    }
  };

  return (
    <section className="min-h-screen py-20 px-4 bg-gradient-to-br from-yellow-100 to-orange-100">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-xl shadow space-y-4">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Form</h2>
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleInputChange} className="w-full border border-gray-300 rounded px-4 py-2" />
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleInputChange} className="w-full border border-gray-300 rounded px-4 py-2" />
          <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleInputChange} className="w-full border border-gray-300 rounded px-4 py-2" />
          <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleInputChange} className="w-full border border-gray-300 rounded px-4 py-2" rows={4} />
          <button onClick={handleSubmit} className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600">Submit</button>
        </div>

        <div className="space-y-8">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-6 text-white rounded-xl shadow">
            <h3 className="text-2xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3"><Phone /><span>+91 98765 43210</span></div>
              <div className="flex items-center gap-3"><Mail /><span>info@solartechpro.com</span></div>
              <div className="flex items-center gap-3"><MapPin /><span>123 Solar Street, Jaipur, Rajasthan</span></div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow space-y-3">
            <h3 className="text-xl font-bold text-gray-800">Why Choose Us?</h3>
            <div className="flex items-center gap-3 text-gray-700"><CheckCircle className="text-green-500" />Free site inspection & consultation</div>
            <div className="flex items-center gap-3 text-gray-700"><CheckCircle className="text-green-500" />Quick installation in 1-2 days</div>
            <div className="flex items-center gap-3 text-gray-700"><CheckCircle className="text-green-500" />Government subsidy assistance</div>
            <div className="flex items-center gap-3 text-gray-700"><CheckCircle className="text-green-500" />24/7 customer support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
