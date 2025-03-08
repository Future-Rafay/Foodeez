'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Mock data for demonstration
const MOCK_RESTAURANTS = [
  {
    id: 1,
    name: 'Taste of Italy',
    cuisine: 'Italian',
    rating: 4.8,
    reviews: 243,
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    location: 'Downtown',
    specialties: ['Pizza', 'Pasta', 'Tiramisu']
  },
  {
    id: 2,
    name: 'Spice Garden',
    cuisine: 'Indian',
    rating: 4.6,
    reviews: 187,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    location: 'Midtown',
    specialties: ['Curry', 'Tandoori', 'Naan']
  },
  {
    id: 3,
    name: 'Sushi Master',
    cuisine: 'Japanese',
    rating: 4.9,
    reviews: 312,
    image: 'https://images.unsplash.com/photo-1579027989536-b7b1f875659b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    location: 'Riverside',
    specialties: ['Sushi', 'Ramen', 'Tempura']
  },
  {
    id: 4,
    name: 'Burger Joint',
    cuisine: 'American',
    rating: 4.5,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    location: 'Westside',
    specialties: ['Burgers', 'Fries', 'Milkshakes']
  },
  {
    id: 5,
    name: 'Taco Fiesta',
    cuisine: 'Mexican',
    rating: 4.7,
    reviews: 203,
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
    location: 'Southside',
    specialties: ['Tacos', 'Burritos', 'Guacamole']
  },
  {
    id: 6,
    name: 'Golden Dragon',
    cuisine: 'Chinese',
    rating: 4.4,
    reviews: 178,
    image: 'https://images.unsplash.com/photo-1525648199074-cee30ba79a4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    location: 'Chinatown',
    specialties: ['Dim Sum', 'Peking Duck', 'Fried Rice']
  }
];

const CUISINES = ['All', 'Italian', 'Indian', 'Japanese', 'American', 'Mexican', 'Chinese'];
const LOCATIONS = ['All', 'Downtown', 'Midtown', 'Riverside', 'Westside', 'Southside', 'Chinatown'];

export default function DiscoverPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');

  // Filter restaurants based on search and filters
  const filteredRestaurants = MOCK_RESTAURANTS.filter(restaurant => {
    const matchesSearch = 
      restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      restaurant.specialties.some(specialty => specialty.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCuisine = selectedCuisine === 'All' || restaurant.cuisine === selectedCuisine;
    const matchesLocation = selectedLocation === 'All' || restaurant.location === selectedLocation;
    
    return matchesSearch && matchesCuisine && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Search Header */}
      <section className="bg-primary-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white sm:text-4xl">
              Discover Delicious Food Near You
            </h1>
            <p className="mt-3 text-lg text-primary-100">
              Find your favorite restaurants, dishes, and local specialties
            </p>
          </div>
          
          <div className="mt-8 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow">
                <input
                  type="text"
                  placeholder="Search for restaurants, dishes, or cuisines..."
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button className="bg-secondary-900 text-white px-6 py-3 rounded-lg hover:bg-secondary-800 transition-colors">
                Search
              </button>
            </div>
            
            <div className="mt-4 flex flex-wrap gap-2">
              <div className="bg-white rounded-full px-4 py-2 text-sm">
                <span className="text-secondary-600 mr-2">Cuisine:</span>
                <select 
                  className="bg-transparent focus:outline-none text-secondary-900"
                  value={selectedCuisine}
                  onChange={(e) => setSelectedCuisine(e.target.value)}
                >
                  {CUISINES.map(cuisine => (
                    <option key={cuisine} value={cuisine}>{cuisine}</option>
                  ))}
                </select>
              </div>
              
              <div className="bg-white rounded-full px-4 py-2 text-sm">
                <span className="text-secondary-600 mr-2">Location:</span>
                <select 
                  className="bg-transparent focus:outline-none text-secondary-900"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                >
                  {LOCATIONS.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Results Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-secondary-900 mb-6">
            {filteredRestaurants.length} {filteredRestaurants.length === 1 ? 'Restaurant' : 'Restaurants'} Found
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRestaurants.map((restaurant, index) => (
              <motion.div
                key={restaurant.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all"
              >
                <div className="relative h-48">
                  <Image
                    src={restaurant.image}
                    alt={restaurant.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-sm font-medium text-secondary-900">
                    ⭐ {restaurant.rating}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-secondary-900">{restaurant.name}</h3>
                      <p className="text-secondary-600">{restaurant.cuisine} • {restaurant.location}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <p className="text-sm text-secondary-600 mb-2">Specialties:</p>
                    <div className="flex flex-wrap gap-2">
                      {restaurant.specialties.map(specialty => (
                        <span 
                          key={specialty} 
                          className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-xs"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-6 flex justify-between items-center">
                    <span className="text-sm text-secondary-600">{restaurant.reviews} reviews</span>
                    <Link
                      href={`/restaurants/${restaurant.id}`}
                      className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredRestaurants.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-secondary-600">No restaurants found matching your criteria.</p>
              <p className="mt-2 text-secondary-500">Try adjusting your filters or search term.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Popular Searches Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-secondary-900 mb-6">
            Popular Searches
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Pizza', 'Sushi', 'Burgers', 'Tacos', 'Curry', 'Pasta', 'Desserts', 'Breakfast'].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-secondary-50 rounded-lg p-4 text-center cursor-pointer hover:bg-secondary-100 transition-colors"
                onClick={() => setSearchTerm(item)}
              >
                <p className="font-medium text-secondary-900">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 