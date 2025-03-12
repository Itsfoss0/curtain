import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PricingSection () {
  return (
    <>
      <section id='pricing' className='py-20'>
        <div className='container mx-auto px-4 max-w-6xl'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
              Simple, Transparent Pricing
            </h2>
            <p className='mt-4 text-xl text-gray-600 max-w-3xl mx-auto'>
              Choose the plan that works best for you. All plans include our
              core features.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow ${
                  plan.isPopular ? 'scale-105 relative z-10' : ''
                }`}
              >
                {plan.isPopular && (
                  <div className='bg-indigo-600 text-white text-center text-sm font-medium py-1'>
                    MOST POPULAR
                  </div>
                )}
                <div className='p-8'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-4'>
                    {plan.name}
                  </h3>
                  <div className='flex items-baseline mb-6'>
                    <span className='text-4xl font-bold text-gray-900'>
                      {plan.price}
                    </span>
                    <span className='text-gray-600 ml-2'>/month</span>
                  </div>
                  <p className='text-gray-600 mb-6'>{plan.description}</p>
                  <ul className='space-y-3 mb-8'>
                    {plan.features.map((feature, i) => (
                      <li key={i} className='flex items-start'>
                        <Check className='h-5 w-5 text-green-500 mr-2 mt-0.5' />
                        <span className='text-gray-600'>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 rounded-lg ${
                      plan.isPopular
                        ? 'bg-indigo-600 text-black hover:bg-indigo-700'
                        : 'border border-indigo-600 text-indigo-600 hover:bg-indigo-50'
                    } transition-colors shadow-md`}
                  >
                    {plan.isPopular ? 'Get Started' : 'Choose Plan'}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const pricingPlans = [
  {
    name: 'Starter',
    price: '190',
    description:
      'Perfect for individuals and small businesses just getting started.',
    features: [
      'Up to 50 bookings per month',
      'Email reminders',
      'Basic analytics',
      '1 calendar integration'
    ],
    isPopular: false
  },
  {
    name: 'Professional',
    price: '490',
    description: 'Ideal for growing businesses with regular booking needs.',
    features: [
      'Unlimited bookings',
      'Email & SMS reminders',
      'Advanced analytics',
      'Multiple calendar integrations',
      'Custom booking page'
    ],
    isPopular: true
  },
  {
    name: 'Enterprise',
    price: 's990',
    description: 'For larger organizations with advanced requirements.',
    features: [
      'Everything in Professional',
      'Priority support',
      'Multiple team members',
      'API access',
      'White-labeling'
    ],
    isPopular: false
  }
];
