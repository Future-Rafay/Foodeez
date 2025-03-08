'use client';

import { CustomerForm } from '@/components/forms/CustomerForm';
import { Hero } from '@/components/home/Hero';
import { CreateCustomerInput, UpdateCustomerInput } from '@/types/customer';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  const handleSubmit = async (data: CreateCustomerInput | UpdateCustomerInput) => {
    try {
      console.log(data);
      // Add your API call here
      await Promise.resolve();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Hero />
      
      {/* How It Works Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-secondary-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-secondary-900/[0.02] -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-secondary-900 tracking-tight">
              How Foodeez Works
            </h2>
            <p className="mt-6 text-xl text-secondary-600">
              Connecting food lovers with amazing restaurants and culinary experiences.
            </p>
          </motion.div>

          <div className="mt-20">
            <h3 className="text-2xl font-bold text-center text-primary-600 mb-12">For Food Lovers</h3>
            <div className="grid grid-cols-1 gap-8 md:gap-12 md:grid-cols-3">
              {/* Step 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
                    alt="Search Food"
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900">Search Your Favorite Food</h3>
                <p className="mt-4 text-lg text-secondary-600 leading-relaxed">
                  Find dishes based on location, season, or cuisine. Discover exactly what you're craving.
                </p>
              </motion.div>

              {/* Step 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Discover Restaurants"
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900">Discover Restaurants</h3>
                <p className="mt-4 text-lg text-secondary-600 leading-relaxed">
                  Browse ratings, menus, and seasonal specialties. Find the perfect dining spot.
                </p>
              </motion.div>

              {/* Step 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
                    alt="Enjoy and Share"
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900">Enjoy & Share</h3>
                <p className="mt-4 text-lg text-secondary-600 leading-relaxed">
                  Visit the restaurant, order food, and leave a review to help others discover great food.
                </p>
              </motion.div>
            </div>

            <h3 className="text-2xl font-bold text-center text-primary-600 mb-12 mt-20">For Restaurants & Food Providers</h3>
            <div className="grid grid-cols-1 gap-8 md:gap-12 md:grid-cols-3">
              {/* Step 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Register Your Business"
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900">Register Your Business</h3>
                <p className="mt-4 text-lg text-secondary-600 leading-relaxed">
                  List your restaurant, food services, or seasonal specialties on our platform.
                </p>
              </motion.div>

              {/* Step 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Reach Food Lovers"
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900">Reach Food Lovers</h3>
                <p className="mt-4 text-lg text-secondary-600 leading-relaxed">
                  Get discovered by a broad audience searching for food in your area.
                </p>
              </motion.div>

              {/* Step 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Grow Your Business"
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900">Grow Your Business</h3>
                <p className="mt-4 text-lg text-secondary-600 leading-relaxed">
                  Increase visibility, gain reviews, and boost customer visits with our platform.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 lg:py-32 bg-secondary-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
        <div className="absolute inset-0 -z-5 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1543353071-10c8ba85a904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Food background"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Powerful Features for Food Discovery
            </h2>
            <p className="mt-6 text-xl text-secondary-200">
              Explore what makes Foodeez the ultimate food discovery platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                title: "NFC-Enabled Digital Menus",
                description: "Access restaurant menus instantly with NFC technology for a seamless dining experience."
              },
              {
                title: "Location-Based Discovery",
                description: "Find the best food options near you with our precise location-based search."
              },
              {
                title: "Seasonal Specialties",
                description: "Discover limited-time seasonal dishes and local delicacies in your area."
              },
              {
                title: "Verified Reviews",
                description: "Read authentic reviews from real diners to make informed choices."
              },
              {
                title: "Business Analytics",
                description: "Restaurants get powerful insights to understand customer preferences."
              },
              {
                title: "Marketing Tools",
                description: "Restaurants can promote special offers and events to attract more customers."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-secondary-800/50 backdrop-blur-sm p-8 rounded-2xl border border-secondary-700"
              >
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-secondary-200 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-800 -skew-y-6 transform origin-top-left" />
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <Image
            src="https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Food pattern background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Ready to discover amazing food?
            </h2>
            <p className="mt-6 text-xl text-primary-100 max-w-2xl mx-auto">
              Join thousands of food lovers and restaurants already using Foodeez to connect and share culinary experiences.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/signup"
                className="inline-flex items-center justify-center bg-white text-primary-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Sign Up as Food Lover
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="/business/register"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
              >
                Register Your Restaurant
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <CustomerForm
        mode="create"
        onSubmit={handleSubmit}
      />
    </div>
  );
}
