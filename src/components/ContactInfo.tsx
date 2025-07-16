import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Send,
  Clock,
  Shield,
  Award,
  Users,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    serviceType: "residential",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const emial = formData ? formData.email : "";
    const Name = formData ? formData.name : "";
    const phone = formData ? formData.phone : "";
    const serviceType = formData ? formData.serviceType : "";
    const message = formData ? formData.message : "";

    console.log({ emial, Name, phone, serviceType, message });

    try {
      // 👉 If you're saving to backend, do that here (axios/fetch etc.)
      // await axios.post("/api/save-lead", formData);

      // Simulate network delay (2 sec)
      await new Promise((res) => setTimeout(res, 2000));

      setSubmitStatus("success");

      setFormData({
        name: "",
        phone: "",
        email: "",
        serviceType: "residential",
        message: "",
      });

      // Auto-hide success message
      setTimeout(() => {
        setSubmitStatus("");
      }, 5000);
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-blue-50 via-white to-yellow-50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
            Get Your Free Quote
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your home with clean, renewable solar energy. Our experts
            are ready to help you save money and protect the environment.
          </p>
          <div className="mt-8 flex justify-center space-x-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-sm text-gray-500">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600">2-3</div>
              <div className="text-sm text-gray-500">Days Installation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">25</div>
              <div className="text-sm text-gray-500">Years Warranty</div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 relative">
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>

              <div className="mb-8">
                <h3 className="text-3xl font-bold mb-2 text-gray-800">
                  Start Your Solar Journey
                </h3>
                <p className="text-gray-600">
                  Fill out the form below and our solar experts will contact you
                  within 24 hours
                </p>
              </div>

              {/* <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 focus:outline-none transition-all duration-300"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 focus:outline-none transition-all duration-300"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 focus:outline-none transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Type
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 focus:outline-none transition-all duration-300"
                  >
                    <option value="residential">Residential Solar</option>
                    <option value="commercial">Commercial Solar</option>
                    <option value="industrial">Industrial Solar</option>
                    <option value="maintenance">Maintenance & Repair</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 focus:outline-none transition-all duration-300"
                    placeholder="Tell us about your energy needs, roof size, monthly electricity bill, etc."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-yellow-500 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Get Free Quote</span>
                    </>
                  )}
                </button>

                {submitStatus === "success" && (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-green-700 text-center">
                    ✅ Thank you! We'll contact you within 24 hours.
                  </div>
                )}
              </div> */}
              {/* ✅ SUCCESS MESSAGE */}
              <div className="relative">
                {submitStatus === "success" && (
                  <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300">
                    <div className="bg-green-100 border border-green-300 text-green-800 px-6 py-4 rounded-xl shadow-xl text-lg font-medium text-center w-[90%] max-w-md">
                      ✅ Thank you! We'll contact you within 24 hours.
                    </div>
                  </div>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 focus:outline-none transition-all duration-300"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 focus:outline-none transition-all duration-300"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 focus:outline-none transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Service Type
                      </label>
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 focus:outline-none transition-all duration-300"
                      >
                        <option value="residential">Residential Solar</option>
                        <option value="commercial">Commercial Solar</option>
                        <option value="industrial">Industrial Solar</option>
                        <option value="maintenance">
                          Maintenance & Repair
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Project Details
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 focus:outline-none transition-all duration-300"
                        placeholder="Tell us about your energy needs, roof size, monthly electricity bill, etc."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-yellow-500 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Get Free Quote</span>
                        </>
                      )}
                    </button>

                    {submitStatus === "success" && (
                      <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-green-700 text-center">
                        ✅ Thank you! We'll contact you within 24 hours.
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>

            {/* Contact Info & Features */}
            <div className="space-y-8">
              {/* Contact Info Card */}
              <div className="bg-gradient-to-r from-blue-600 to-yellow-500 rounded-3xl p-8 text-white shadow-2xl">
                <h3 className="text-3xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-white bg-opacity-20 rounded-full p-3">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-lg">Call Us Now</div>
                      <div className="opacity-90 text-lg">+91 96644 05815</div>
                      <div className="opacity-75 text-sm">Available 24/7</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-white bg-opacity-20 rounded-full p-3">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-lg">Email Support</div>
                      <div className="opacity-90 text-lg">
                        dakshsolarpower0102@gmail.com
                      </div>
                      <div className="opacity-75 text-sm">
                        Quick response guaranteed
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-white bg-opacity-20 rounded-full p-3">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-lg">
                        Visit Our Office
                      </div>
                      <div className="opacity-90 text-lg">
                        SNO 28/RSM/100 RHB, SECTOR 28, Pratap Nager
                      </div>
                      <div className="opacity-90 text-lg">
                        Jaipur, Rajasthan 302001
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="bg-blue-100 rounded-full p-3 w-fit mb-4">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">25-Year Warranty</h4>
                  <p className="text-gray-600 text-sm">
                    Comprehensive warranty on all solar panels and installations
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="bg-yellow-100 rounded-full p-3 w-fit mb-4">
                    <Clock className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">Quick Installation</h4>
                  <p className="text-gray-600 text-sm">
                    Professional installation completed in just 2-3 days
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="bg-green-100 rounded-full p-3 w-fit mb-4">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">Government Subsidy</h4>
                  <p className="text-gray-600 text-sm">
                    Complete assistance with government subsidy applications
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="bg-purple-100 rounded-full p-3 w-fit mb-4">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">Expert Support</h4>
                  <p className="text-gray-600 text-sm">
                    24/7 customer support and maintenance services
                  </p>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h4 className="text-2xl font-bold mb-4 text-gray-800">
                  Why Choose Solar Tech Pro?
                </h4>
                <div className="space-y-3">
                  {[
                    "Free site inspection & energy audit",
                    "Customized solar solutions for your needs",
                    "Premium quality panels with high efficiency",
                    "Professional certified installers",
                    "Post-installation monitoring & support",
                    "Flexible financing options available",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
