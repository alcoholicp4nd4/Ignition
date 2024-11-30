import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';

const cars = [
  {
    id: 1,
    name: "Mercedes-Benz S-Class",
    price: 89900,
    year: 2023,
    mileage: 1500,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "BMW M4 Competition",
    price: 74900,
    year: 2023,
    mileage: 2800,
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Porsche 911 GT3",
    price: 169900,
    year: 2023,
    mileage: 500,
    image: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    name: "Audi RS e-tron GT",
    price: 139900,
    year: 2023,
    mileage: 1200,
    image: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80"
  }
];

const Inventory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState('all');

  const filteredCars = cars.filter(car => {
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = priceFilter === 'all' 
      ? true 
      : priceFilter === 'under100k' 
        ? car.price < 100000 
        : car.price >= 100000;
    return matchesSearch && matchesPrice;
  });

  return (
    <div className="py-8 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8 text-white">Our Inventory</h1>
        
        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search vehicles..."
              className="w-full pl-10 pr-4 py-2 bg-primary-dark border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <select
              className="pl-10 pr-8 py-2 bg-primary-dark border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent appearance-none text-white"
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
            >
              <option value="all">All Prices</option>
              <option value="under100k">Under $100,000</option>
              <option value="over100k">Over $100,000</option>
            </select>
          </div>
        </div>
        
        {/* Car Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map(car => (
            <div key={car.id} className="bg-primary-dark rounded-lg shadow-lg overflow-hidden">
              <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2 text-white">{car.name}</h2>
                <div className="mb-4">
                  <p className="text-gray-400">Year: {car.year}</p>
                  <p className="text-gray-400">Mileage: {car.mileage.toLocaleString()} miles</p>
                  <p className="text-primary font-bold mt-2">${car.price.toLocaleString()}</p>
                </div>
                <button className="w-full bg-gradient-primary text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inventory;