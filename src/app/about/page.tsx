'use client';

import Image from 'next/image';
import { Users, Target, Shield, Award } from 'lucide-react';

const stats = [
  { label: 'Active Businesses', value: '10,000+' },
  { label: 'Countries', value: '25+' },
  { label: 'Team Members', value: '100+' },
  { label: 'Customer Satisfaction', value: '98%' },
];

const values = [
  {
    icon: Target,
    name: 'Mission-Driven',
    description:
      'Our mission is to empower businesses of all sizes to thrive in the digital age by providing them with the tools and support they need to succeed.',
  },
  {
    icon: Users,
    name: 'Customer-Focused',
    description:
      'We put our customers first, constantly innovating and improving our platform based on their feedback and needs.',
  },
  {
    icon: Shield,
    name: 'Trust & Security',
    description:
      'We maintain the highest standards of security and privacy, ensuring your business data is always protected.',
  },
  {
    icon: Award,
    name: 'Excellence',
    description:
      'We strive for excellence in everything we do, from our platform features to our customer support.',
  },
];

const team = [
  {
    name: 'John Smith',
    role: 'CEO & Co-founder',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
  },
  {
    name: 'Sarah Johnson',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
  },
  {
    name: 'Michael Chen',
    role: 'Head of Product',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
  },
  {
    name: 'Emily Davis',
    role: 'Head of Customer Success',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-secondary-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              About BusinessHub
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-300">
              We're on a mission to revolutionize how businesses manage their online presence.
              Founded in 2023, we've helped thousands of businesses grow and succeed in the
              digital world.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-secondary-600">{stat.label}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-secondary-900">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Values Section */}
      <div className="bg-secondary-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              These core values guide everything we do, from product development to customer
              support.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div key={value.name} className="flex flex-col items-center text-center">
                    <div className="mb-6 rounded-lg bg-primary-100 p-4">
                      <Icon className="h-6 w-6 text-primary-600" />
                    </div>
                    <dt className="text-lg font-semibold leading-7 text-secondary-900">
                      {value.name}
                    </dt>
                    <dd className="mt-4 text-base leading-7 text-secondary-600">
                      {value.description}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Meet Our Leadership Team
            </h2>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              Our experienced team is dedicated to helping businesses succeed in the digital
              age.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {team.map((person) => (
              <div key={person.name} className="text-center">
                <div className="relative mx-auto h-56 w-56 rounded-full overflow-hidden">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-6 text-lg font-semibold leading-7 tracking-tight text-secondary-900">
                  {person.name}
                </h3>
                <p className="text-base leading-6 text-secondary-600">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 