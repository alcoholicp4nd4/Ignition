import React from 'react';
import { ArrowRight, Shield, Star, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-white">
              <h1 className="text-5xl font-bold mb-4">Discover Your Dream Car</h1>
              <p className="text-xl mb-8">Experience luxury and performance like never before</p>
              <Link
                to="/inventory"
                className="inline-flex items-center bg-gradient-primary text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                View Inventory
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Why Choose Us</h2>
            <p className="mt-4 text-xl text-gray-400">We provide the best service in the industry</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">Quality Guaranteed</h3>
              <p className="text-gray-400">All our vehicles undergo rigorous quality checks</p>
            </div>
            
            <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg text-center">
              <Star className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">Premium Selection</h3>
              <p className="text-gray-400">Handpicked luxury vehicles from top brands</p>
            </div>
            
            <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg text-center">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">24/7 Support</h3>
              <p className="text-gray-400">Round-the-clock customer service</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Cars Section */}
      <div className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Featured Vehicles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80",
                name: "Mercedes-Benz S-Class",
                price: "$89,900"
              },
              {
                image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80",
                name: "BMW M4 Competition",
                price: "$74,900"
              },
              {
                image: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80",
                name: "Porsche 911 GT3",
                price: "$169,900"
              }
            ].map((car, index) => (
              <div key={index} className="bg-primary-dark rounded-lg shadow-lg overflow-hidden">
                <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{car.name}</h3>
                  <p className="text-primary mb-4">{car.price}</p>
                  <Link
                    to="/inventory"
                    className="inline-block w-full text-center bg-gradient-primary text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;