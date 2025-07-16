import React from "react";
import { CheckCircle } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Daksh SolarTech India
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* LEFT SIDE */}
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-800">
                Leading Solar Innovation
              </h3>
              <p className="text-lg text-gray-600 mb-4">
                With over 5 years of experience in the solar industry, Daksh
                Solar has been at the forefront of renewable energy solutions in
                India. We specialize in designing, installing, and maintaining
                solar panel systems that maximize energy efficiency and cost
                savings.
              </p>

              <p className="text-lg text-gray-600 mb-6">
                <strong>Daksh Solar</strong> is proudly backed by{" "}
                <strong>Sawhney Electricals Works</strong>, a
                government-recognized <em>"A" Class Contractor</em> under JDA,
                Jaipur. With over 20 years of proven experience in the
                electrical and infrastructure domain, and a valid GST number (
                <strong>08BALPS2939G1Z9</strong>), our parent company adds a
                legacy of trust, compliance, and quality to every project we
                deliver.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">
                    Certified solar installation experts
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">
                    Premium quality panels and equipment
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">
                    25-year performance warranty
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">
                    Complete end-to-end service
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">
                    Backed by Govt. Registered Electrical Contractor
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop"
                alt="Solar team"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6 rounded-2xl shadow-lg">
                <div className="text-2xl font-bold">ISO 9001</div>
                <div className="text-sm">Certified Company</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
