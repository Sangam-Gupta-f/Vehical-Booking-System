import React from 'react';

function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="lg:flex justify-between items-center px-6 lg:px-20 py-12">
        <div className="max-w-lg">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Book Logistics Vehicles
          </h1>
          <p className="text-gray-300 text-lg mb-6">Anytime, Anywhere</p>
          <button type="button" onClick={() => window.location.href = "/check-vehicle"} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition">
            Book Vehicle
          </button>
        </div>
        <div className="mt-8 lg:mt-0">
          <img
            className="w-72 h-72 object-cover rounded-xl shadow-lg"
            src="https://images.pexels.com/photos/29057942/pexels-photo-29057942.jpeg"
            alt="car"
          />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="lg:flex justify-between items-center px-6 lg:px-20 py-12 bg-gray-800 rounded-t-3xl">
        <div className="max-w-lg">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            We provide the best logistics services with a wide range of vehicles
            to choose from. Our services are reliable, affordable, and available 24/7.
          </p>
        </div>
        <div className="mt-8 lg:mt-0">
          <img
            className="w-72 h-72 object-cover rounded-xl shadow-lg"
            src="https://images.pexels.com/photos/13734379/pexels-photo-13734379.jpeg"
            alt="logistics"
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
