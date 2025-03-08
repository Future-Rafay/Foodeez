'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function BusinessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 md:pr-12">
              <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-5xl md:text-6xl">
                <span className="block">Grow Your</span>
                <span className="block text-primary-600">Restaurant Business</span>
              </h1>
              <p className="mt-6 text-lg text-secondary-600 max-w-3xl">
                Foodeez empowers restaurants and food service providers by giving them visibility, digital tools, and marketing opportunities. Join our platform to enhance your brand and increase your revenue.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/business/register"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-8"
                >
                  Register Your Restaurant
                </Link>
                <Link
                  href="#benefits"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 md:py-4 md:text-lg md:px-8"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="mt-10 md:mt-0 md:w-1/2">
              <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Restaurant owner using tablet"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-secondary-900 sm:text-4xl">
              How Foodeez Works for Restaurants
            </h2>
            <p className="mt-4 text-lg text-secondary-600 max-w-3xl mx-auto">
              Join our platform in three simple steps and start growing your business
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mt-4">Register Your Business</h3>
              <p className="mt-4 text-secondary-600">
                Create your restaurant profile with menu items, photos, and business details. It only takes a few minutes to get started.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mt-4">Reach Food Lovers</h3>
              <p className="mt-4 text-secondary-600">
                Get discovered by thousands of hungry customers searching for food in your area. Showcase your specialties and unique offerings.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mt-4">Grow Your Business</h3>
              <p className="mt-4 text-secondary-600">
                Increase visibility, gain reviews, and boost customer visits. Use our analytics to understand your customers better.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-secondary-900 sm:text-4xl">
              Benefits for Restaurants
            </h2>
            <p className="mt-4 text-lg text-secondary-600 max-w-3xl mx-auto">
              Discover how Foodeez can help your restaurant thrive in the digital age
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Increased Visibility",
                description: "Get discovered by new customers searching for food in your area.",
                icon: "🔍"
              },
              {
                title: "Digital Menus with NFC",
                description: "Offer contactless menus through NFC technology for a modern dining experience.",
                icon: "📱"
              },
              {
                title: "Customer Reviews",
                description: "Build trust with verified customer reviews and respond to feedback.",
                icon: "⭐"
              },
              {
                title: "Marketing Tools",
                description: "Promote special offers, events, and seasonal dishes to attract more customers.",
                icon: "📢"
              },
              {
                title: "Business Analytics",
                description: "Gain insights into customer preferences and optimize your offerings.",
                icon: "📊"
              },
              {
                title: "Reservation Management",
                description: "Manage table reservations and reduce no-shows with automated reminders.",
                icon: "📅"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-secondary-900">{benefit.title}</h3>
                <p className="mt-2 text-secondary-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-secondary-900 sm:text-4xl">
              What Restaurant Owners Say
            </h2>
            <p className="mt-4 text-lg text-secondary-600 max-w-3xl mx-auto">
              Hear from restaurant owners who have grown their business with Foodeez
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                quote: "Since joining Foodeez, we've seen a 30% increase in new customers. The digital menu feature has been a game-changer for us.",
                name: "Maria Rodriguez",
                restaurant: "Taste of Mexico"
              },
              {
                quote: "The analytics tools help us understand what dishes are most popular and when our busy periods are. It's transformed how we run our business.",
                name: "James Chen",
                restaurant: "Asian Fusion Bistro"
              },
              {
                quote: "As a small family restaurant, we needed more visibility. Foodeez has helped us reach new customers we never would have found otherwise.",
                name: "Sarah Johnson",
                restaurant: "Hometown Grill"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-secondary-50 p-6 rounded-xl"
              >
                <p className="italic text-secondary-700">"{testimonial.quote}"</p>
                <div className="mt-4 flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center">
                      <span className="text-primary-700 font-bold">{testimonial.name[0]}</span>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-secondary-900">{testimonial.name}</p>
                    <p className="text-sm text-secondary-500">{testimonial.restaurant}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to grow your restaurant business?
          </h2>
          <p className="mt-4 text-lg text-primary-100 max-w-3xl mx-auto">
            Join thousands of restaurants already using Foodeez to attract new customers and increase revenue.
          </p>
          <div className="mt-8">
            <Link
              href="/business/register"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-white hover:bg-primary-50 md:py-4 md:text-lg md:px-8"
            >
              Register Your Restaurant
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 