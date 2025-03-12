import DashboardHeader from './DashboardHeader.component';

export default function CouponsContent () {
  return (
    <>
      <DashboardHeader />
      <div className='space-y-6 mt-4'>
        <div className='flex justify-between items-center mb-4'>
          <div>
            <h2 className='text-2xl font-bold'>Coupon Codes</h2>
            <p className='text-gray-500 text-sm'>
              Manage discounts and special offers
            </p>
          </div>
          <button className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center'>
            <span className='mr-2'>+</span> Create New Coupon
          </button>
        </div>

        <div className='bg-white rounded-lg shadow overflow-hidden'>
          <div className='p-4 border-b flex justify-between items-center'>
            <div className='flex space-x-2'>
              <input
                type='search'
                placeholder='Search coupons...'
                className='border border-gray-300 rounded-lg px-3 py-2 text-sm'
              />
              <select className='border border-gray-300 rounded-lg px-3 py-2 text-sm'>
                <option>All Statuses</option>
                <option>Active</option>
                <option>Expired</option>
                <option>Upcoming</option>
              </select>
            </div>
          </div>

          <table className='min-w-full'>
            <thead>
              <tr className='bg-gray-50 text-xs text-gray-500 uppercase'>
                <th className='text-left py-3 px-4 font-medium'>Code</th>
                <th className='text-left py-3 px-4 font-medium'>Discount</th>
                <th className='text-left py-3 px-4 font-medium'>Valid For</th>
                <th className='text-left py-3 px-4 font-medium'>Start Date</th>
                <th className='text-left py-3 px-4 font-medium'>Expiry</th>
                <th className='text-left py-3 px-4 font-medium'>Uses</th>
                <th className='text-left py-3 px-4 font-medium'>Status</th>
                <th className='text-left py-3 px-4 font-medium'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((item) => (
                <tr key={item} className='border-t hover:bg-gray-50'>
                  <td className='py-3 px-4 font-medium'>
                    {item === 1
                      ? 'SPRING25'
                      : item === 2
                        ? 'EARLY10'
                        : item === 3
                          ? 'WELCOME'
                          : item === 4
                            ? 'VIP50'
                            : 'STUDENT20'}
                  </td>
                  <td className='py-3 px-4'>
                    {item === 1
                      ? '25%'
                      : item === 2
                        ? '10%'
                        : item === 3
                          ? '$15 off'
                          : item === 4
                            ? '50%'
                            : '20%'}
                  </td>
                  <td className='py-3 px-4'>
                    {item % 2 === 0 ? 'Tech Conference 2025' : 'All Events'}
                  </td>
                  <td className='py-3 px-4 text-sm'>Feb 15, 2025</td>
                  <td className='py-3 px-4 text-sm'>
                    {item === 1
                      ? 'April 30, 2025'
                      : item === 2
                        ? 'March 15, 2025'
                        : item === 3
                          ? 'May 31, 2025'
                          : item === 4
                            ? 'Dec 31, 2025'
                            : 'June 30, 2025'}
                  </td>
                  <td className='py-3 px-4'>
                    <div className='text-sm'>
                      {12 + item * 5}/{item === 4 ? '∞' : 100}
                    </div>
                    {item !== 4 && (
                      <div className='w-24 bg-gray-200 rounded-full h-2 mt-1'>
                        <div
                          className='bg-blue-600 h-2 rounded-full'
                          style={{ width: `${((12 + item * 5) / 100) * 100}%` }}
                        />
                      </div>
                    )}
                  </td>
                  <td className='py-3 px-4'>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        item === 2
                          ? 'bg-red-100 text-red-800'
                          : 'bg-green-100 text-green-800'
                      }`}
                    >
                      {item === 2 ? 'Expired' : 'Active'}
                    </span>
                  </td>
                  <td className='py-3 px-4'>
                    <div className='flex space-x-2'>
                      <button className='text-gray-500 hover:text-blue-600'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-4 w-4'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
                          />
                        </svg>
                      </button>
                      <button className='text-gray-500 hover:text-red-600'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-4 w-4'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636'
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className='p-4 border-t flex justify-between items-center text-sm'>
            <div>Showing 1 to 5 of 12 entries</div>
            <div className='flex space-x-1'>
              <button className='px-3 py-1 rounded border bg-blue-50 text-blue-600'>
                1
              </button>
              <button className='px-3 py-1 rounded border hover:bg-gray-50'>
                2
              </button>
              <button className='px-3 py-1 rounded border hover:bg-gray-50'>
                3
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
