'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-5xl md:text-6xl">
              About <span className="text-primary-600">Foodeez</span>
            </h1>
            <p className="mt-6 text-xl text-secondary-600 max-w-3xl mx-auto">
              A Food Discovery, Visit, Order & Review Portal empowering restaurants and food lovers alike.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-secondary-900">Our Mission</h2>
              <p className="mt-4 text-lg text-secondary-600">
                At Foodeez, we're on a mission to transform how people discover and experience food. We believe that great food experiences should be accessible to everyone, and that local restaurants deserve the tools and visibility to thrive in the digital age.
              </p>
              <p className="mt-4 text-lg text-secondary-600">
                We're building a platform that connects food lovers with amazing culinary experiences, while empowering restaurants with digital tools, visibility, and marketing opportunities to grow their business.
              </p>
            </div>
            <div className="mt-10 md:mt-0 md:w-1/2">
              <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Restaurant dining experience"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-secondary-900">How Foodeez Works</h2>
            <p className="mt-4 text-lg text-secondary-600 max-w-3xl mx-auto">
              Connecting food lovers with amazing restaurants and culinary experiences
            </p>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center text-primary-600 mb-12">For Food Lovers</h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-8 rounded-xl shadow-md"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6 text-3xl">
                  🔍
                </div>
                <h4 className="text-xl font-bold text-secondary-900">Search Your Favorite Food</h4>
                <p className="mt-4 text-secondary-600">
                  Find dishes based on location, season, or cuisine. Discover exactly what you're craving.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-8 rounded-xl shadow-md"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6 text-3xl">
                  🍽️
                </div>
                <h4 className="text-xl font-bold text-secondary-900">Discover Restaurants</h4>
                <p className="mt-4 text-secondary-600">
                  Browse ratings, menus, and seasonal specialties. Find the perfect dining spot.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-8 rounded-xl shadow-md"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6 text-3xl">
                  ⭐
                </div>
                <h4 className="text-xl font-bold text-secondary-900">Enjoy & Share</h4>
                <p className="mt-4 text-secondary-600">
                  Visit the restaurant, order food, and leave a review to help others discover great food.
                </p>
              </motion.div>
            </div>

            <h3 className="text-2xl font-bold text-center text-primary-600 mb-12 mt-20">For Restaurants & Food Providers</h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-8 rounded-xl shadow-md"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6 text-3xl">
                  📝
                </div>
                <h4 className="text-xl font-bold text-secondary-900">Register Your Business</h4>
                <p className="mt-4 text-secondary-600">
                  List your restaurant, food services, or seasonal specialties on our platform.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-8 rounded-xl shadow-md"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6 text-3xl">
                  👥
                </div>
                <h4 className="text-xl font-bold text-secondary-900">Reach Food Lovers</h4>
                <p className="mt-4 text-secondary-600">
                  Get discovered by a broad audience searching for food in your area.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-8 rounded-xl shadow-md"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6 text-3xl">
                  📈
                </div>
                <h4 className="text-xl font-bold text-secondary-900">Grow Your Business</h4>
                <p className="mt-4 text-secondary-600">
                  Increase visibility, gain reviews, and boost customer visits with our platform.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-secondary-900">Key Features</h2>
            <p className="mt-4 text-lg text-secondary-600 max-w-3xl mx-auto">
              What makes Foodeez special
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-2xl">
                📱
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary-900">NFC-Enabled Digital Menus</h3>
                <p className="mt-2 text-secondary-600">
                  Restaurants can offer contactless menus through NFC technology, enhancing the dining experience and reducing physical menu costs.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-2xl">
                📍
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary-900">Location-Based Discovery</h3>
                <p className="mt-2 text-secondary-600">
                  Find restaurants and food options near you with our precise location-based search functionality.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-2xl">
                🍂
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary-900">Seasonal Specialties</h3>
                <p className="mt-2 text-secondary-600">
                  Discover limited-time seasonal dishes and local delicacies in your area, helping you experience unique culinary offerings.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-2xl">
                📊
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary-900">Business Analytics</h3>
                <p className="mt-2 text-secondary-600">
                  Restaurants get powerful insights to understand customer preferences and optimize their offerings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-secondary-900">Our Team</h2>
            <p className="mt-4 text-lg text-secondary-600 max-w-3xl mx-auto">
              Meet the passionate food lovers behind Foodeez
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Johnson",
                role: "Founder & CEO",
                bio: "Former restaurant owner with a passion for connecting people through food experiences."
              },
              {
                name: "Maria Rodriguez",
                role: "Head of Restaurant Relations",
                bio: "15 years in the restaurant industry, focused on helping restaurants thrive in the digital age."
              },
              {
                name: "David Chen",
                role: "Chief Technology Officer",
                bio: "Tech innovator specializing in location-based services and digital menu solutions."
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <div className="w-24 h-24 bg-primary-100 rounded-full mx-auto flex items-center justify-center text-3xl mb-4">
                  {member.name[0]}
                </div>
                <h3 className="text-xl font-bold text-secondary-900">{member.name}</h3>
                <p className="text-primary-600 font-medium">{member.role}</p>
                <p className="mt-4 text-secondary-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 