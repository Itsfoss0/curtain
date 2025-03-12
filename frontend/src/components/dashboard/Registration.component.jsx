import QuickSummary from './QuickSummary.component';

export default function RegistrationsContent () {
  return (
    <>
      <div className='space-y-6'>
        <QuickSummary />

        <div className='flex justify-between items-center mb-4'>
          <div>
            <h2 className='text-2xl font-bold'>Registrations</h2>
            <p className='text-gray-500 text-sm'>
              Manage attendee registrations
            </p>
          </div>
          <div className='flex space-x-2'>
            <button className='border border-gray-300 hover:bg-gray-50 px-3 py-2 rounded-lg text-sm flex items-center'>
              <span className='mr-1'>↓</span> Import
            </button>
            <button className='bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg text-sm flex items-center'>
              <span className='mr-1'>↑</span> Export CSV
            </button>
          </div>
        </div>

        <div className='bg-white rounded-lg shadow overflow-hidden'>
          <div className='p-4 border-b flex flex-wrap gap-2'>
            <input
              type='search'
              placeholder='Search registrants...'
              className='border border-gray-300 rounded-lg px-3 py-2 text-sm flex-grow'
            />
            <select className='border border-gray-300 rounded-lg px-3 py-2 text-sm'>
              <option>All Events</option>
              <option>Tech Conference 2025</option>
              <option>Workshop Series</option>
            </select>
            <select className='border border-gray-300 rounded-lg px-3 py-2 text-sm'>
              <option>All Statuses</option>
              <option>Confirmed</option>
              <option>Pending</option>
              <option>Cancelled</option>
            </select>
            <button className='bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg text-sm'>
              Filters
            </button>
          </div>

          <table className='min-w-full'>
            <thead>
              <tr className='bg-gray-50 text-xs text-gray-500 uppercase'>
                <th className='text-left py-3 px-4 font-medium'>
                  <input type='checkbox' className='rounded' />
                </th>
                <th className='text-left py-3 px-4 font-medium'>Name</th>
                <th className='text-left py-3 px-4 font-medium'>Email</th>
                <th className='text-left py-3 px-4 font-medium'>Event</th>
                <th className='text-left py-3 px-4 font-medium'>Ticket</th>
                <th className='text-left py-3 px-4 font-medium'>Date</th>
                <th className='text-left py-3 px-4 font-medium'>Status</th>
                <th className='text-left py-3 px-4 font-medium'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <tr key={item} className='border-t hover:bg-gray-50'>
                  <td className='py-3 px-4'>
                    <input type='checkbox' className='rounded' />
                  </td>
                  <td className='py-3 px-4'>
                    <div className='font-medium'>Jane Doe</div>
                  </td>
                  <td className='py-3 px-4'>jane@example.com</td>
                  <td className='py-3 px-4'>Tech Conference 2025</td>
                  <td className='py-3 px-4'>VIP Pass</td>
                  <td className='py-3 px-4 text-sm'>Mar 2, 2025</td>
                  <td className='py-3 px-4'>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        item % 4 === 0
                          ? 'bg-yellow-100 text-yellow-800'
                          : item % 4 === 1
                          ? 'bg-red-100 text-red-800'
                          : 'bg-green-100 text-green-800'
                      }`}
                    >
                      {item % 4 === 0
                        ? 'Pending'
                        : item % 4 === 1
                          ? 'Cancelled'
                          : 'Confirmed'}
                    </span>
                  </td>
                  <td className='py-3 px-4'>
                    <div className='relative group'>
                      <button className='text-gray-500 hover:text-blue-600 flex items-center gap-1 text-sm'>
                        Actions <span>▾</span>
                      </button>
                      <div className='absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block'>
                        <a
                          href='#'
                          className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                        >
                          View Details
                        </a>
                        <a
                          href='#'
                          className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                        >
                          Send Email
                        </a>
                        <a
                          href='#'
                          className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                        >
                          Cancel Registration
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className='p-4 border-t flex justify-between items-center text-sm'>
            <div>Showing 1 to 6 of 389 entries</div>
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
              <button className='px-3 py-1 rounded border hover:bg-gray-50'>
                ...
              </button>
              <button className='px-3 py-1 rounded border hover:bg-gray-50'>
                65
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
