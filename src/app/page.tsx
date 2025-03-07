'use client';

import { CustomerForm } from '@/components/forms/CustomerForm';
import { Hero } from '@/components/home/Hero';
import { CreateCustomerInput } from '@/types/customer';
import { motion } from 'framer-motion';

export default function Home() {
  const handleSubmit = async (data: CreateCustomerInput) => {
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
      
      {/* Features Section */}
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
              Why Choose BusinessHub?
            </h2>
            <p className="mt-6 text-xl text-secondary-600">
              Everything you need to manage and grow your business online, all in one place.
            </p>
          </motion.div>

          <div className="mt-20 grid grid-cols-1 gap-8 md:gap-12 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-2xl font-bold text-secondary-900">Easy Management</h3>
              <p className="mt-4 text-lg text-secondary-600 leading-relaxed">
                Streamline your operations with our intuitive dashboard. Manage all your business profiles effortlessly.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-secondary-900">Growth Tools</h3>
              <p className="mt-4 text-lg text-secondary-600 leading-relaxed">
                Leverage advanced analytics and marketing tools to accelerate your business growth.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="text-2xl font-bold text-secondary-900">Secure Platform</h3>
              <p className="mt-4 text-lg text-secondary-600 leading-relaxed">
                Rest easy knowing your data is protected with state-of-the-art security measures.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 lg:py-32 bg-secondary-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Trusted by Businesses Worldwide
            </h2>
            <p className="mt-6 text-xl text-secondary-200">
              See what our customers have to say about us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                quote: "BusinessHub transformed how we manage our online presence. Couldn't be happier!",
                author: "Sarah Johnson",
                role: "CEO, TechStart"
              },
              {
                quote: "The best business management platform we've used. Simple yet powerful.",
                author: "Michael Chen",
                role: "Founder, GrowthLabs"
              },
              {
                quote: "Outstanding support and fantastic features. A game-changer for our business.",
                author: "Emma Davis",
                role: "Director, InnovateX"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-secondary-800/50 backdrop-blur-sm p-8 rounded-2xl border border-secondary-700"
              >
                <p className="text-xl text-secondary-200 italic leading-relaxed">"{testimonial.quote}"</p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary-700 flex items-center justify-center">
                    <span className="text-xl text-white">{testimonial.author[0]}</span>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-white">{testimonial.author}</p>
                    <p className="text-secondary-400">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-800 -skew-y-6 transform origin-top-left" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Ready to transform your business?
            </h2>
            <p className="mt-6 text-xl text-primary-100 max-w-2xl mx-auto">
              Join thousands of successful businesses already using BusinessHub to grow and thrive.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/signup"
                className="inline-flex items-center justify-center bg-white text-primary-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Started Now
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="/demo"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
              >
                Request Demo
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
