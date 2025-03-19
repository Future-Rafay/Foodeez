'use client';

import { Check } from 'lucide-react';
import { Button } from '@/components/core/Button';

const tiers = [
  {
    name: 'Starter',
    price: '$29',
    billing: 'per month',
    description: 'Perfect for small businesses just getting started',
    features: [
      'Up to 3 business profiles',
      'Basic analytics',
      'Email support',
      'Standard integrations',
      'Basic SEO tools',
    ],
    cta: 'Start with Starter',
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '$79',
    billing: 'per month',
    description: 'Best for growing businesses',
    features: [
      'Up to 10 business profiles',
      'Advanced analytics',
      'Priority email & chat support',
      'Advanced integrations',
      'Advanced SEO tools',
      'Custom branding',
      'Team collaboration',
    ],
    cta: 'Go Professional',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: '$199',
    billing: 'per month',
    description: 'For large organizations with multiple businesses',
    features: [
      'Unlimited business profiles',
      'Enterprise analytics',
      '24/7 priority support',
      'Custom integrations',
      'Enterprise SEO suite',
      'White-label solution',
      'Advanced team management',
      'API access',
      'Custom reporting',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-32 pt-16 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl">
              Simple, transparent pricing
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              Choose the perfect plan for your business. All plans include a 14-day free trial.
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="relative isolate -mt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-3xl ${
                  tier.highlighted
                    ? 'bg-primary-600 text-white ring-1 ring-primary-500'
                    : 'bg-white ring-1 ring-secondary-200'
                } p-8 shadow-lg`}
              >
                <div className="mb-8">
                  <h3
                    className={`text-lg font-semibold leading-8 ${
                      tier.highlighted ? 'text-white' : 'text-secondary-900'
                    }`}
                  >
                    {tier.name}
                  </h3>
                  <p
                    className={`mt-4 text-sm leading-6 ${
                      tier.highlighted ? 'text-primary-100' : 'text-secondary-600'
                    }`}
                  >
                    {tier.description}
                  </p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span
                      className={`text-4xl font-bold tracking-tight ${
                        tier.highlighted ? 'text-white' : 'text-secondary-900'
                      }`}
                    >
                      {tier.price}
                    </span>
                    <span
                      className={`text-sm font-semibold leading-6 ${
                        tier.highlighted ? 'text-primary-100' : 'text-secondary-600'
                      }`}
                    >
                      {tier.billing}
                    </span>
                  </p>
                </div>

                <div className="mt-2 space-y-4 flex-grow">
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex gap-x-3">
                      <Check
                        className={`h-6 w-5 flex-none ${
                          tier.highlighted ? 'text-white' : 'text-primary-600'
                        }`}
                      />
                      <span
                        className={`text-sm leading-6 ${
                          tier.highlighted ? 'text-primary-100' : 'text-secondary-600'
                        }`}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Button
                  className="mt-8"
                  variant={tier.highlighted ? 'secondary' : 'primary'}
                  fullWidth
                >
                  {tier.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-secondary-200">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-secondary-900">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-secondary-200">
            <div className="pt-6">
              <dt className="text-lg font-semibold leading-7 text-secondary-900">
                What&apos;s included in the free trial?
              </dt>
              <dd className="mt-2 text-base leading-7 text-secondary-600">
                During your 14-day free trial, you&apos;ll have access to all features in the Professional plan. No credit card required.
              </dd>
            </div>
            <div className="pt-6">
              <dt className="text-lg font-semibold leading-7 text-secondary-900">
                Can I switch plans later?
              </dt>
              <dd className="mt-2 text-base leading-7 text-secondary-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
              </dd>
            </div>
            <div className="pt-6">
              <dt className="text-lg font-semibold leading-7 text-secondary-900">
                Do you offer custom solutions?
              </dt>
              <dd className="mt-2 text-base leading-7 text-secondary-600">
                Yes, our Enterprise plan can be customized to meet your specific needs. Contact our sales team to discuss your requirements.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
} 