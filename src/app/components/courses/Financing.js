"use client";

import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/20/solid';

const frequencies = [
  { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
  { value: 'annually', label: 'Annually', priceSuffix: '/year' },
];

const tiers = [
  {
    name: 'Upfront Payment',
    id: 'tier-freelancer',
    href: '#',
    price: { monthly: '$19', annually: '$199' },
    description: 'The essentials to provide your best work for clients.',
    features: [
        'Get instant 25% discount', 
        'Up to 1,000 subscribers', 
        'Basic analytics', 
        '48-hour support response time'
    ],
    mostPopular: false,
  },
  {
    name: '3rd Party Plan',
    id: 'tier-startup',
    href: '#',
    price: { monthly: '$29', annually: '$299' },
    description: 'A plan that scales with your rapidly growing business.',
    features: [
      '25 products',
      'Up to 10,000 subscribers',
      'Advanced analytics',
      '24-hour support response time',
      'Marketing automations',
    ],
    mostPopular: true,
  },
  {
    name: 'Hoetzin Plan',
    id: 'tier-enterprise',
    href: '#',
    price: { monthly: '$59', annually: '$599' },
    description: 'Dedicated support and infrastructure for your company.',
    features: [
      '0% interest',
      'Unlimited subscribers',
      'Advanced analytics',
      'Marketing automations',
      'Custom reporting tools',
    ],
    mostPopular: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Financing() {
  const [frequency, setFrequency] = useState(frequencies[0].value);

  return (
    <div className="py-6 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* <h2 className="text-base/7 font-semibold text-indigo-600">Pricing</h2> */}
          <h2 className="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">Our Financing Plan Suits You</h2>
          {/* <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
            Our Financing Plan Suits You
          </p> */}
        </div>
        <p className="mx-auto mt-6 max-w-4xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
          Check out our <a href="#">Scholarships</a> at Hoetzin. You can have a scholarship along with financial plan.
        </p>
        <div className="mt-16 sm:mt-4 flex justify-center">
          <RadioGroup
            value={frequency}
            onChange={setFrequency}
            className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs/5 font-semibold ring-1 ring-secondary-lightGreen ring-inset"
          >
            {frequencies.map((option) => (
              <RadioGroup.Option
                key={option.value}
                value={option.value}
                className={({ checked }) =>
                  classNames(
                    checked ? 'bg-secondary-lightGreen text-white' : 'text-gray-500',
                    'cursor-pointer rounded-full px-2.5 py-1'
                  )
                }
              >
                {option.label}
              </RadioGroup.Option>
            ))}
          </RadioGroup>
        </div>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? 'ring-2 ring-secondary-lightGreen/80 bg-white' : 'ring-1 ring-gray-200 bg-white',
                'rounded-3xl p-8 xl:p-10 bg-white',
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3
                  id={tier.id}
                  className={classNames(
                    tier.mostPopular ? 'text-secondary-lightGreen' : 'text-gray-900',
                    'text-lg/8 font-semibold',
                  )}
                >
                  {tier.name}
                </h3>
                {tier.mostPopular ? (
                  <p className="rounded-full bg-secondary-lightGreen/10 px-2.5 py-1 text-xs/5 font-semibold text-secondary-lightGreen">
                    Most popular
                  </p>
                ) : null}
              </div>
              <p className="mt-4 text-sm/6 text-gray-600">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-semibold tracking-tight text-gray-900">
                  {tier.price[frequency]}
                </span>
                <span className="text-sm/6 font-semibold text-gray-600">
                  {frequencies.find((f) => f.value === frequency)?.priceSuffix}
                </span>
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-secondary-lightGreen text-white shadow-xs hover:bg-secondary-lightGreen/85'
                    : 'text-secondary-lightGreen/80 ring-1 ring-secondary-lightGreen/30 ring-inset hover:ring-secondary-lightGreen/50',
                  'mt-6 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-lightGreen/60',
                )}
              >
                Enrol Now
              </a>
              <ul role="list" className="mt-8 space-y-3 text-sm/6 text-gray-600 xl:mt-10">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    {/* <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-secondary-green" /> */}
                    <svg className="h-6 w-6 flex-none fill-sky-100 stroke-secondary-lightGreen stroke-2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="11" />
                        <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}