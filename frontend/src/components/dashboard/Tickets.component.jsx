import QuickSummary from './QuickSummary.component';

export default function TicketsContent () {
  return (
    <>
      <div className='space-y-6'>
        <QuickSummary />

        <div className='flex justify-between items-center mb-4'>
          <div>
            <h2 className='text-2xl font-bold'>Tickets</h2>
            <p className='text-gray-500 text-sm'>
              Manage ticket types and pricing
            </p>
          </div>
          <button className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center'>
            <span className='mr-2'>+</span> Create New Ticket
          </button>
        </div>

        <div className='bg-white rounded-lg shadow overflow-hidden'>
          <div className='p-4 border-b flex justify-between items-center'>
            <div className='flex space-x-2'>
              <input
                type='search'
                placeholder='Search tickets...'
                className='border border-gray-300 rounded-lg px-3 py-2 text-sm'
              />
              <select className='border border-gray-300 rounded-lg px-3 py-2 text-sm'>
                <option>All Events</option>
                <option>Tech Conference 2025</option>
                <option>Workshop Series</option>
              </select>
            </div>
            <div>
              <button className='text-gray-500 hover:text-gray-700 px-2 py-1 rounded text-sm'>
                Export
              </button>
            </div>
          </div>

          <table className='min-w-full'>
            <thead>
              <tr className='bg-gray-50 text-xs text-gray-500 uppercase'>
                <th className='text-left py-3 px-4 font-medium'>Ticket Name</th>
                <th className='text-left py-3 px-4 font-medium'>Event</th>
                <th className='text-left py-3 px-4 font-medium'>Price</th>
                <th className='text-left py-3 px-4 font-medium'>Available</th>
                <th className='text-left py-3 px-4 font-medium'>Sales End</th>
                <th className='text-left py-3 px-4 font-medium'>Status</th>
                <th className='text-left py-3 px-4 font-medium'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((item) => (
                <tr key={item} className='border-t hover:bg-gray-50'>
                  <td className='py-3 px-4'>
                    <div className='font-medium'>VIP Pass</div>
                    <div className='text-xs text-gray-500'>
                      Full access + exclusive events
                    </div>
                  </td>
                  <td className='py-3 px-4'>Tech Conference 2025</td>
                  <td className='py-3 px-4'>${299 - item * 10}</td>
                  <td className='py-3 px-4'>
                    <div className='w-24 bg-gray-200 rounded-full h-2'>
                      <div
                        className='bg-blue-600 h-2 rounded-full'
                        style={{ width: `${(48 / 50) * 100}%` }}
                      />
                    </div>
                    <div className='text-xs mt-1'>48/50</div>
                  </td>
                  <td className='py-3 px-4 text-sm'>March 10, 2025</td>
                  <td className='py-3 px-4'>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        item % 3 === 0
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-green-100 text-green-800'
                      }`}
                    >
                      {item % 3 === 0 ? 'Limited' : 'On Sale'}
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
                            d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
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
