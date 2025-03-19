'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Input } from '@/components/core/Input';
import { Button } from '@/components/core/Button';

const offices = [
  {
    city: 'New York',
    address: '123 Business Avenue, New York, NY 10001',
    phone: '+1 (555) 123-4567',
    email: 'ny@businesshub.com',
    hours: 'Mon-Fri 9:00 AM - 6:00 PM EST',
  },
  {
    city: 'London',
    address: '456 Enterprise Street, London, UK SW1A 1AA',
    phone: '+44 20 7123 4567',
    email: 'london@businesshub.com',
    hours: 'Mon-Fri 9:00 AM - 6:00 PM GMT',
  },
  {
    city: 'Singapore',
    address: '789 Innovation Road, Singapore 018956',
    phone: '+65 6789 0123',
    email: 'singapore@businesshub.com',
    hours: 'Mon-Fri 9:00 AM - 6:00 PM SGT',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // TODO: Implement form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative isolate bg-secondary-900">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Contact Us
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-300">
              Have questions? We're here to help. Get in touch with our team.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-secondary-900">Send us a message</h2>
            <p className="mt-4 text-lg text-secondary-600">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <Input
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <Input
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <Input
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-secondary-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border border-secondary-300 px-4 py-2 text-secondary-900 shadow-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>

              <Button type="submit" isLoading={isLoading}>
                Send Message
              </Button>

              {isSuccess && (
                <div className="rounded-md bg-green-50 p-4">
                  <p className="text-sm text-green-800">
                    Thank you for your message. We'll get back to you soon!
                  </p>
                </div>
              )}
            </form>
          </div>

          {/* Office Locations */}
          <div>
            <h2 className="text-2xl font-bold text-secondary-900">Our Offices</h2>
            <p className="mt-4 text-lg text-secondary-600">
              Visit us at one of our office locations around the world.
            </p>

            <div className="mt-8 space-y-12">
              {offices.map((office) => (
                <div
                  key={office.city}
                  className="rounded-lg bg-secondary-50 p-6 shadow-sm"
                >
                  <h3 className="text-xl font-semibold text-secondary-900">
                    {office.city}
                  </h3>
                  <div className="mt-4 space-y-3">
                    <div className="flex items-start">
                      <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-secondary-600" />
                      <p className="ml-3 text-secondary-600">{office.address}</p>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 flex-shrink-0 text-secondary-600" />
                      <p className="ml-3 text-secondary-600">{office.phone}</p>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 flex-shrink-0 text-secondary-600" />
                      <p className="ml-3 text-secondary-600">{office.email}</p>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 flex-shrink-0 text-secondary-600" />
                      <p className="ml-3 text-secondary-600">{office.hours}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 