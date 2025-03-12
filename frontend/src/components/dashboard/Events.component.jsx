import QuickSummary from './QuickSummary.component';

export default function EventsContent () {
  return (
    <>
      <div className='space-y-6'>
        <QuickSummary />

        <div className='flex justify-between items-center mb-4'>
          <div>
            <h2 className='text-2xl font-bold'>Events</h2>
            <p className='text-gray-500 text-sm'>
              Manage your events and sessions
            </p>
          </div>
          <button className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center'>
            <span className='mr-2'>+</span> Create New Event
          </button>
        </div>

        <div className='bg-white rounded-lg shadow overflow-hidden'>
          <div className='p-4 border-b flex justify-between items-center'>
            <div className='flex space-x-2'>
              <input
                type='search'
                placeholder='Search events...'
                className='border border-gray-300 rounded-lg px-3 py-2 text-sm'
              />
              <select className='border border-gray-300 rounded-lg px-3 py-2 text-sm'>
                <option>All Events</option>
                <option>Active</option>
                <option>Draft</option>
                <option>Completed</option>
              </select>
            </div>
            <div className='flex space-x-2'>
              <button className='text-gray-500 hover:text-gray-700 px-2 py-1 text-sm'>
                Filter
              </button>
              <button className='text-gray-500 hover:text-gray-700 px-2 py-1 text-sm'>
                Sort
              </button>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className='bg-white border rounded-lg overflow-hidden hover:shadow-md transition-shadow'
              >
                <div className='h-32 bg-gradient-to-r from-blue-400 to-indigo-500 relative'>
                  {item % 3 === 0 && (
                    <span className='absolute top-2 right-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded'>
                      Featured
                    </span>
                  )}
                </div>
                <div className='p-4'>
                  <div className='flex justify-between'>
                    <h3 className='font-bold'>Tech Conference 2025</h3>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        item % 2 === 0
                          ? 'bg-green-100 text-green-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {item % 2 === 0 ? 'Active' : 'Upcoming'}
                    </span>
                  </div>
                  <p className='text-gray-600 text-sm mt-1'>
                    March 15-17, 2025
                  </p>
                  <p className='text-gray-600 text-sm'>San Francisco, CA</p>
                  <div className='mt-3 pt-3 border-t flex justify-between items-center'>
                    <span className='text-sm'>
                      {142 - item * 10} Registrations
                    </span>
                    <div>
                      <button className='text-blue-600 hover:text-blue-800 text-sm mr-2'>
                        Edit
                      </button>
                      <button className='text-blue-600 hover:text-blue-800 text-sm'>
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className='p-4 border-t flex justify-center'>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
