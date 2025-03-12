export default function QuickSummary () {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mb-6'>
        <div className='bg-white rounded-lg shadow p-4 border-l-4 border-blue-500'>
          <p className='text-sm text-gray-500 font-medium'>Total Events</p>
          <p className='text-2xl font-bold'>12</p>
          <p className='text-xs text-green-600 mt-1'>↑ 2 this month</p>
        </div>
        <div className='bg-white rounded-lg shadow p-4 border-l-4 border-purple-500'>
          <p className='text-sm text-gray-500 font-medium'>
            Active Registrations
          </p>
          <p className='text-2xl font-bold'>389</p>
          <p className='text-xs text-green-600 mt-1'>↑ 8% from last month</p>
        </div>
        <div className='bg-white rounded-lg shadow p-4 border-l-4 border-green-500'>
          <p className='text-sm text-gray-500 font-medium'>Revenue</p>
          <p className='text-2xl font-bold'>$24,750</p>
          <p className='text-xs text-green-600 mt-1'>↑ 12% from last month</p>
        </div>
        <div className='bg-white rounded-lg shadow p-4 border-l-4 border-yellow-500'>
          <p className='text-sm text-gray-500 font-medium'>Conversion Rate</p>
          <p className='text-2xl font-bold'>68%</p>
          <p className='text-xs text-gray-500 mt-1'>Last 30 days</p>
        </div>
      </div>
    </>
  );
}
