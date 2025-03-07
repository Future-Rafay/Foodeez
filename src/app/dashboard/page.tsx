'use client';

import { useState } from 'react';
import { Plus, TrendingUp, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface Business {
  id: string;
  name: string;
  type: string;
  status: 'active' | 'pending' | 'inactive';
  metrics: {
    views: number;
    leads: number;
    rating: number;
  };
}

const mockBusinesses: Business[] = [
  {
    id: '1',
    name: 'Tech Solutions Inc',
    type: 'Technology',
    status: 'active',
    metrics: {
      views: 1200,
      leads: 45,
      rating: 4.8,
    },
  },
  {
    id: '2',
    name: 'Green Foods Market',
    type: 'Retail',
    status: 'active',
    metrics: {
      views: 850,
      leads: 32,
      rating: 4.5,
    },
  },
  // Add more mock businesses as needed
];

export default function DashboardPage() {
  const [businesses] = useState<Business[]>(mockBusinesses);

  const stats = [
    {
      name: 'Total Views',
      value: businesses.reduce((sum, b) => sum + b.metrics.views, 0),
      icon: TrendingUp,
    },
    {
      name: 'Total Leads',
      value: businesses.reduce((sum, b) => sum + b.metrics.leads, 0),
      icon: Users,
    },
    {
      name: 'Average Rating',
      value: (
        businesses.reduce((sum, b) => sum + b.metrics.rating, 0) / businesses.length
      ).toFixed(1),
      icon: Star,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-secondary-900">Dashboard</h1>
        <Button>
          <Plus className="w-5 h-5 mr-2" />
          Add Business
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.name}
              className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200"
            >
              <div className="flex items-center">
                <div className="p-2 bg-primary-100 rounded-lg">
                  <Icon className="h-6 w-6 text-primary-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-secondary-600">{stat.name}</p>
                  <p className="text-2xl font-semibold text-secondary-900">{stat.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Businesses Grid */}
      <div className="bg-white rounded-lg shadow-sm border border-secondary-200">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-secondary-900">Your Businesses</h2>
          <p className="mt-1 text-sm text-secondary-600">
            Manage and monitor all your registered businesses
          </p>
        </div>

        <div className="border-t border-secondary-200">
          {businesses.map((business, index) => (
            <div
              key={business.id}
              className={`p-6 ${
                index !== businesses.length - 1 ? 'border-b border-secondary-200' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-secondary-900">
                    {business.name}
                  </h3>
                  <p className="mt-1 text-sm text-secondary-600">{business.type}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="text-sm font-medium text-secondary-900">
                      {business.metrics.views.toLocaleString()} views
                    </p>
                    <p className="text-sm text-secondary-600">
                      {business.metrics.leads} leads
                    </p>
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      business.status === 'active'
                        ? 'bg-green-100 text-green-800'
                        : business.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {business.status.charAt(0).toUpperCase() + business.status.slice(1)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 