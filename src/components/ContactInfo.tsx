import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Shield,
  Clock,
  Award,
  Users,
  CheckCircle,
} from "lucide-react";

export default function ResponsiveContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "residential",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus("success");
      setIsSubmitting(false);

      // Hide success message after 3 seconds
      setTimeout(() => {
        setSubmitStatus("");
      }, 3000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 via-white to-yellow-50 relative overflow-hidden"
    >
      {/* Background decorative elements - adjusted for mobile */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-32 h-32 sm:w-64 sm:h-64 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-40 h-40 sm:w-80 sm:h-80 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-600 via-yellow-500 to-orange-500 bg-clip-text text-transparent px-2">
            Get Your Free Quote
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Transform your home with clean, renewable solar energy. Our experts
            are ready to help you save money and protect the environment.
          </p>

          {/* Stats - Mobile optimized */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600">
                500+
              </div>
              <div className="text-xs sm:text-sm text-gray-500">
                Happy Customers
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-yellow-600">
                2-3
              </div>
              <div className="text-xs sm:text-sm text-gray-500">
                Days Installation
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-green-600">
                25
              </div>
              <div className="text-xs sm:text-sm text-gray-500">
                Years Warranty
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-100 relative order-2 lg:order-1">
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>

              <div className="mb-6 sm:mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-800">
                  Start Your Solar Journey
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Fill out the form below and our solar experts will contact you
                  within 24 hours
                </p>
              </div>

              {/* Success Message */}
              <div className="relative">
                {submitStatus === "success" && (
                  <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300 p-4">
                    <div className="bg-green-100 border border-green-300 text-green-800 px-6 py-4 rounded-xl shadow-xl text-base sm:text-lg font-medium text-center w-full max-w-md">
                      ✅ Thank you! We'll contact you within 24 hours.
                    </div>
                  </div>
                )}

                <div className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 focus:outline-none text-sm sm:text-base"
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
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 focus:outline-none text-sm sm:text-base"
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
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 focus:outline-none text-sm sm:text-base"
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
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 focus:outline-none text-sm sm:text-base"
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
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 focus:outline-none text-sm sm:text-base"
                      placeholder="Tell us about your energy needs, roof size, monthly electricity bill, etc."
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-yellow-500 text-white py-3 sm:py-4 rounded-xl font-semibold shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 text-sm sm:text-base"
                  >
                    {isSubmitting ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    ) : (
                      <>
                        <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>Get Free Quote</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Info & Features */}
            <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
              {/* Contact Info Card */}
              <div className="bg-gradient-to-r from-blue-600 to-yellow-500 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white shadow-2xl">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="bg-white bg-opacity-20 rounded-full p-2 sm:p-3 flex-shrink-0">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-base sm:text-lg">
                        Call Us Now
                      </div>
                      <div className="opacity-90 text-base sm:text-lg break-all">
                        +91 96644 05815
                      </div>
                      <div className="opacity-75 text-xs sm:text-sm">
                        Available 24/7
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="bg-white bg-opacity-20 rounded-full p-2 sm:p-3 flex-shrink-0">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-base sm:text-lg">
                        Email Support
                      </div>
                      <div className="opacity-90 text-sm sm:text-base break-all">
                        dakshsolarpower0102@gmail.com
                      </div>
                      <div className="opacity-75 text-xs sm:text-sm">
                        Quick response guaranteed
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="bg-white bg-opacity-20 rounded-full p-2 sm:p-3 flex-shrink-0">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-base sm:text-lg">
                        Visit Our Office
                      </div>
                      <div className="opacity-90 text-sm sm:text-base">
                        SNO 28/RSM/100 RHB, SECTOR 28, Pratap Nager
                      </div>
                      <div className="opacity-90 text-sm sm:text-base">
                        Jaipur, Rajasthan 302001
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100">
                  <div className="bg-blue-100 rounded-full p-2 sm:p-3 w-fit mb-3 sm:mb-4">
                    <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  </div>
                  <h4 className="font-bold text-base sm:text-lg mb-2">
                    25-Year Warranty
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Comprehensive warranty on all solar panels and installations
                  </p>
                </div>

                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100">
                  <div className="bg-yellow-100 rounded-full p-2 sm:p-3 w-fit mb-3 sm:mb-4">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" />
                  </div>
                  <h4 className="font-bold text-base sm:text-lg mb-2">
                    Quick Installation
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Professional installation completed in just 2-3 days
                  </p>
                </div>

                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100">
                  <div className="bg-green-100 rounded-full p-2 sm:p-3 w-fit mb-3 sm:mb-4">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                  </div>
                  <h4 className="font-bold text-base sm:text-lg mb-2">
                    Government Subsidy
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Complete assistance with government subsidy applications
                  </p>
                </div>

                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100">
                  <div className="bg-purple-100 rounded-full p-2 sm:p-3 w-fit mb-3 sm:mb-4">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                  </div>
                  <h4 className="font-bold text-base sm:text-lg mb-2">
                    Expert Support
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    24/7 customer support and maintenance services
                  </p>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100">
                <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800">
                  Why Choose Solar Tech Pro?
                </h4>
                <div className="space-y-2 sm:space-y-3">
                  {[
                    "Free site inspection & energy audit",
                    "Customized solar solutions for your needs",
                    "Premium quality panels with high efficiency",
                    "Professional certified installers",
                    "Post-installation monitoring & support",
                    "Flexible financing options available",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm sm:text-base">
                        {feature}
                      </span>
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
