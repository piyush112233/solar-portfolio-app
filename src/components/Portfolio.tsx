export default function Portfolio() {
  const projects = [
    {
      title: "Modern Villa Installation",
      capacity: "25 kW",
      savings: "₹2.5L/year",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&h=300&fit=crop",
    },
    {
      title: "Commercial Complex",
      capacity: "100 kW",
      savings: "₹8L/year",
      image:
        "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=500&h=300&fit=crop",
    },
    {
      title: "Industrial Plant",
      capacity: "500 kW",
      savings: "₹35L/year",
      image:
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=500&h=300&fit=crop",
    },
    {
      title: "Residential Complex",
      capacity: "75 kW",
      savings: "₹5L/year",
      image:
        "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=500&h=300&fit=crop",
    },
    {
      title: "Shopping Mall",
      capacity: "200 kW",
      savings: "₹15L/year",
      image:
        "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=500&h=300&fit=crop",
    },
    {
      title: "Educational Institute",
      capacity: "150 kW",
      savings: "₹12L/year",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop",
    },
  ];
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Our Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {project.title}
                </h3>
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                    {project.capacity}
                  </span>
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold">
                    {project.savings}
                  </span>
                </div>
                <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
