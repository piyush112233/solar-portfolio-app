import React, { useState } from "react";

export default function ContactFormPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.phone && formData.message) {
      alert("Thank you for your message!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      alert("Please fill all fields.");
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 bg-gray-50">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Form</h2>
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
            rows={4}
          />
          <button
            onClick={handleSubmit}
            className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
