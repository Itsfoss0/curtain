import { motion } from 'framer-motion';
import { Calendar, CreditCard, Clock, Users } from 'lucide-react';

export default function FeatureSection () {
  return (
    <>
      <section id='features' className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4 max-w-6xl'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
              Everything You Need in One Place
            </h2>
            <p className='mt-4 text-xl text-gray-600 max-w-3xl mx-auto'>
              Our platform combines scheduling, booking, and payment processing
              to create a seamless experience.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className='bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow'
              >
                <div className='w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6'>
                  {feature.icon}
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                  {feature.title}
                </h3>
                <p className='text-gray-600'>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const features = [
  {
    icon: <Calendar className='h-6 w-6 text-indigo-600' />,
    title: 'Smart Scheduling',
    description:
      'Intelligent calendar management that prevents double bookings and optimizes your availability.'
  },
  {
    icon: <CreditCard className='h-6 w-6 text-indigo-600' />,
    title: 'Seamless Payments',
    description:
      'Accept payments instantly with our integrated payment system. Support for all major payment methods.'
  },
  {
    icon: <Clock className='h-6 w-6 text-indigo-600' />,
    title: 'Automated Reminders',
    description:
      'Reduce no-shows with customizable email and SMS reminders sent at the perfect time.'
  },
  {
    icon: <Users className='h-6 w-6 text-indigo-600' />,
    title: 'Client Management',
    description:
      "Keep track of your clients' details and booking history in one centralized database."
  },
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6 text-indigo-600'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
        />
      </svg>
    ),
    title: 'Advanced Analytics',
    description:
      'Gain insights into your business with detailed reports on bookings, revenue, and client behavior.'
  },
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6 text-indigo-600'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'
        />
      </svg>
    ),
    title: 'Customizable Booking Pages',
    description:
      'Create branded booking pages that reflect your business identity and enhance client trust.'
  }
];
