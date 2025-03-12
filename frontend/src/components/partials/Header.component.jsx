import { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';

export default function Header () {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
        }`}
      >
        <div className='container mx-auto px-4 flex justify-between items-center'>
          <div className='flex items-center space-x-2'>
            <Calendar className='h-6 w-6 text-indigo-600' />
            <span className='font-bold text-xl text-gray-900'>
              ScheduleFlow
            </span>
          </div>
          <div className='hidden md:flex items-center space-x-10'>
            <a
              href='#features'
              className='text-gray-600 hover:text-indigo-600 transition-colors'
            >
              Features
            </a>
            <a
              href='#pricing'
              className='text-gray-600 hover:text-indigo-600 transition-colors'
            >
              Pricing
            </a>
            <a
              href='#testimonials'
              className='text-gray-600 hover:text-indigo-600 transition-colors'
            >
              Testimonials
            </a>
          </div>
          <div className='flex items-center space-x-4'>
            <button className='hidden md:block px-4 py-2 rounded-md text-gray-700 hover:text-indigo-600 transition-colors'>
              Log in
            </button>
            <button className='px-4 py-2 rounded-md bg-indigo-600 text-black hover:bg-indigo-700 transition-colors shadow-md'>
              Get Started
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
