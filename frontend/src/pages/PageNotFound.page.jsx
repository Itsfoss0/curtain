import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFoundPage () {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Implement search functionality or redirect to search page
    // For example: navigate(`/search?q=${searchQuery}`);
    setSearchQuery('');
  };

  return (
    <div className='flex flex-col min-h-screen'>
      {/* Top Header - Fixed at top of page */}
      <header className='w-full flex justify-between items-center py-4 px-8 border-b border-gray-200 bg-white'>
        <div className='flex items-center space-x-6'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5 mr-2'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12z'
              clipRule='evenodd'
            />
            <path d='M10 12a2 2 0 100-4 2 2 0 000 4z' />
          </svg>
          <span className='font-medium'>404 Not Found</span>
        </div>
        <div className='flex items-center space-x-6'>
          <button className='p-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </button>
          <button className='p-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className='flex-1 flex items-center justify-center bg-gray-50'>
        <div className='max-w-lg w-full mx-auto p-8'>
          <div className='text-center'>
            <h1 className='text-9xl font-bold text-indigo-500'>404</h1>
            <div className='w-24 h-1 bg-indigo-500 mx-auto my-6' />
            <h2 className='text-3xl font-bold mb-4'>Page Not Found</h2>
            <p className='text-gray-600 mb-8'>
              We can&apos;t seem to find the page you&apos;re looking for. The
              page might have been moved, deleted, or never existed in the first
              place.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center mb-8'>
              <button
                onClick={() => navigate('/')}
                className='bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 mr-2'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z'
                    clipRule='evenodd'
                  />
                </svg>
                Return Home
              </button>
              <button
                onClick={() => window.history.back()}
                className='border border-gray-300 hover:bg-gray-100 text-gray-700 font-semibold py-3 px-6 rounded-lg flex items-center justify-center'
              >
                Go Back
              </button>
            </div>

            <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-100'>
              <h3 className='text-lg font-semibold mb-4'>
                Looking for something specific?
              </h3>
              <form onSubmit={handleSearchSubmit} className='flex'>
                <input
                  type='text'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder='Search...'
                  className='flex-1 p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
                />
                <button
                  type='submit'
                  className='bg-indigo-500 hover:bg-indigo-600 text-white font-semibold p-3 rounded-r-lg'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
