import React from 'react';
import { Check } from 'lucide-react';

interface Plan {
  name: string;
  price: number;
  features: string[];
  recommended?: boolean;
}

const SubscriptionPage: React.FC = () => {
  const plans: Plan[] = [
    {
      name: 'Basic',
      price: 9.99,
      features: ['Access to basic trends', 'Limited AI analysis', '100 AI credits per month'],
    },
    {
      name: 'Pro',
      price: 19.99,
      features: ['Access to all trends', 'Advanced AI analysis', '500 AI credits per month', 'Priority support'],
      recommended: true,
    },
    {
      name: 'Enterprise',
      price: 49.99,
      features: ['Custom trend reports', 'Unlimited AI analysis', 'Unlimited AI credits', '24/7 dedicated support'],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Subscription Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div key={plan.name} className={`bg-white rounded-lg shadow-md p-6 ${plan.recommended ? 'border-2 border-indigo-600' : ''}`}>
            {plan.recommended && (
              <span className="bg-indigo-600 text-white px-2 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                Recommended
              </span>
            )}
            <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
            <p className="text-4xl font-bold mb-6">${plan.price}<span className="text-lg font-normal text-gray-600">/month</span></p>
            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="text-green-500 mr-2" size={20} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className={`w-full py-2 rounded-md ${plan.recommended ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'} font-semibold`}>
              {plan.recommended ? 'Start Free Trial' : 'Choose Plan'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPage;