import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function HeroSection () {
  return (
    <>
      <section className='py-20 px-4'>
        <div className='container mx-auto max-w-6xl'>
          <div className='flex flex-col md:flex-row items-center'>
            <div className='md:w-1/2 md:pr-12'>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight'
              >
                Streamline Your{' '}
                <span className='text-indigo-600'>Event Management</span>{' '}
                Experience
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className='mt-6 text-xl text-gray-600 leading-relaxed'
              >
                The all-in-one platform for scheduling, booking, and payments.
                Save time, reduce no-shows, and get paid faster.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className='mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4'
              >
                <button className='px-8 py-4 rounded-lg bg-indigo-600 text-black font-medium hover:bg-indigo-700 transition-colors shadow-lg flex items-center justify-center'>
                  Get Started <ArrowRight className='ml-2 h-5 w-5' />
                </button>
                <button className='px-8 py-4 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors flex items-center justify-center'>
                  Watch Demo
                </button>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className='mt-12 md:mt-0 md:w-1/2'
            >
              <div className='relative'>
                <div className='absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-20' />
                <div className='relative rounded-2xl bg-white shadow-xl overflow-hidden'>
                  <img
                    src='/api/placeholder/600/400'
                    alt='Dashboard Preview'
                    className='w-full h-auto'
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
