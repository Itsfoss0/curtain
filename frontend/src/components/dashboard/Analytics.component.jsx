import DashboardHeader from './DashboardHeader.component';

export default function AnalyticsContent () {
  return (
    <>
      <DashboardHeader />
      <div className='space-y-6 mt-4'>
        <div className='flex justify-between items-center mb-4'>
          <div>
            <h2 className='text-2xl font-bold'>Analytics</h2>
            <p className='text-gray-500 text-sm'>
              View performance data and insights
            </p>
          </div>
          <div className='flex space-x-2'>
            <select className='border border-gray-300 rounded-lg px-3 py-2 text-sm'>
              <option>Last 30 days</option>
              <option>Last 3 months</option>
              <option>Last 6 months</option>
              <option>Year to date</option>
              <option>All time</option>
            </select>
            <button className='border border-gray-300 hover:bg-gray-50 px-3 py-2 rounded-lg text-sm'>
              Export Report
            </button>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div className='bg-white p-6 rounded-lg shadow'>
            <div className='flex justify-between items-center mb-4'>
              <h3 className='text-lg font-semibold'>Total Revenue</h3>
              <span className='text-green-600 flex items-center text-sm'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-4 w-4 mr-1'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 10l7-7m0 0l7 7m-7-7v18'
                  />
                </svg>
                12%
              </span>
            </div>
            <div className='text-3xl font-bold mb-1'>$24,750</div>
            <p className='text-gray-500 text-sm'>
              Compared to $22,105 last period
            </p>
            <div className='mt-4 h-16 bg-gray-100 rounded flex items-end'>
              <div className='w-1/12 h-4 bg-blue-300 rounded-sm mx-1' />
              <div className='w-1/12 h-6 bg-blue-400 rounded-sm mx-1' />
              <div className='w-1/12 h-8 bg-blue-400 rounded-sm mx-1' />
              <div className='w-1/12 h-5 bg-blue-300 rounded-sm mx-1' />
              <div className='w-1/12 h-10 bg-blue-500 rounded-sm mx-1' />
              <div className='w-1/12 h-12 bg-blue-600 rounded-sm mx-1' />
              <div className='w-1/12 h-9 bg-blue-500 rounded-sm mx-1' />
              <div className='w-1/12 h-14 bg-blue-700 rounded-sm mx-1' />
              <div className='w-1/12 h-12 bg-blue-600 rounded-sm mx-1' />
              <div className='w-1/12 h-16 bg-blue-700 rounded-sm mx-1' />
            </div>
          </div>
          <div className='bg-white p-6 rounded-lg shadow'>
            <div className='flex justify-between items-center mb-4'>
              <h3 className='text-lg font-semibold'>Registrations</h3>
              <span className='text-green-600 flex items-center text-sm'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-4 w-4 mr-1'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  x{' '}
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 10l7-7m0 0l7 7m-7-7v18'
                  />
                </svg>
                8%
              </span>
            </div>
            <div className='text-3xl font-bold mb-1'>389</div>
            <p className='text-gray-500 text-sm'>Compared to 360 last period</p>
            <div className='mt-4 h-16 bg-gray-100 rounded flex items-end'>
              <div className='w-1/12 h-4 bg-green-300 rounded-sm mx-1' />
              <div className='w-1/12 h-6 bg-green-400 rounded-sm mx-1' />
              <div className='w-1/12 h-8 bg-green-400 rounded-sm mx-1' />
              <div className='w-1/12 h-5 bg-green-300 rounded-sm mx-1' />
              <div className='w-1/12 h-10 bg-green-500 rounded-sm mx-1' />
              <div className='w-1/12 h-12 bg-green-600 rounded-sm mx-1' />
              <div className='w-1/12 h-9 bg-green-500 rounded-sm mx-1' />
              <div className='w-1/12 h-14 bg-green-700 rounded-sm mx-1' />
              <div className='w-1/12 h-12 bg-green-600 rounded-sm mx-1' />
              <div className='w-1/12 h-16 bg-green-700 rounded-sm mx-1' />
            </div>
          </div>
          <div className='bg-white p-6 rounded-lg shadow'>
            <div className='flex justify-between items-center mb-4'>
              <h3 className='text-lg font-semibold'>Conversion Rate</h3>
              <span className='text-green-600 flex items-center text-sm'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-4 w-4 mr-1'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 10l7-7m0 0l7 7m-7-7v18'
                  />
                </svg>
                5%
              </span>
            </div>
            <div className='text-3xl font-bold mb-1'>68%</div>
            <p className='text-gray-500 text-sm'>Compared to 63% last period</p>
            <div className='mt-4 h-16 bg-gray-100 rounded flex items-end'>
              <div className='w-1/12 h-4 bg-purple-300 rounded-sm mx-1' />
              <div className='w-1/12 h-6 bg-purple-400 rounded-sm mx-1' />
              <div className='w-1/12 h-8 bg-purple-400 rounded-sm mx-1' />
              <div className='w-1/12 h-5 bg-purple-300 rounded-sm mx-1' />
              <div className='w-1/12 h-10 bg-purple-500 rounded-sm mx-1' />
              <div className='w-1/12 h-12 bg-purple-600 rounded-sm mx-1' />
              <div className='w-1/12 h-9 bg-purple-500 rounded-sm mx-1' />
              <div className='w-1/12 h-14 bg-purple-700 rounded-sm mx-1' />
              <div className='w-1/12 h-12 bg-purple-600 rounded-sm mx-1' />
              <div className='w-1/12 h-16 bg-purple-700 rounded-sm mx-1' />
            </div>
          </div>
        </div>

        <div className='bg-white p-6 rounded-lg shadow'>
          <div className='flex justify-between items-center mb-4'>
            <h3 className='text-lg font-semibold'>Event Performance</h3>
            <select className='border border-gray-300 rounded-lg px-3 py-2 text-sm'>
              <option>Last 30 days</option>
              <option>Last 3 months</option>
              <option>Last 6 months</option>
              <option>Year to date</option>
              <option>All time</option>
            </select>
          </div>
          <div className='h-64 bg-gray-100 rounded-lg' />
        </div>
      </div>
    </>
  );
}
