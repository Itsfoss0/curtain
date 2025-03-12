import React, { useState } from 'react';

const Dashboard = () => {
  const [activeMenuItem, setActiveMenuItem] = useState('events');

  const menuItems = [
    { id: 'events', label: 'Events', icon: '📅' },
    { id: 'tickets', label: 'Tickets', icon: '🎫' },
    { id: 'registrations', label: 'Registrations', icon: '📝' },
    { id: 'coupons', label: 'Coupon Codes', icon: '🏷️' },
    { id: 'analytics', label: 'Analytics', icon: '📊' },
    { id: 'settings', label: 'Settings', icon: '⚙️' }
  ];

  const EventsContent = () => (
    <div className='space-y-4'>
      <div className='flex justify-between items-center'>
        <h2 className='text-2xl font-bold'>Events</h2>
        <button className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded'>
          Create New Event
        </button>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className='bg-white p-4 rounded shadow'>
            <div className='flex justify-between'>
              <h3 className='font-bold'>Tech Conference 2025</h3>
              <span className='text-green-600 text-sm font-medium'>Active</span>
            </div>
            <p className='text-gray-600 text-sm mt-1'>March 15-17, 2025</p>
            <p className='text-gray-600 text-sm'>San Francisco, CA</p>
            <div className='flex justify-between items-center mt-4'>
              <span className='text-sm'>142 Registrations</span>
              <button className='text-blue-600 hover:text-blue-800 text-sm'>Manage</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const TicketsContent = () => (
    <div className='space-y-4'>
      <div className='flex justify-between items-center'>
        <h2 className='text-2xl font-bold'>Tickets</h2>
        <button className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded'>
          Create New Ticket
        </button>
      </div>

      <table className='min-w-full bg-white'>
        <thead>
          <tr className='bg-gray-100'>
            <th className='text-left py-3 px-4'>Ticket Name</th>
            <th className='text-left py-3 px-4'>Event</th>
            <th className='text-left py-3 px-4'>Price</th>
            <th className='text-left py-3 px-4'>Available</th>
            <th className='text-left py-3 px-4'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3].map((item) => (
            <tr key={item} className='border-b'>
              <td className='py-3 px-4'>VIP Pass</td>
              <td className='py-3 px-4'>Tech Conference 2025</td>
              <td className='py-3 px-4'>$299</td>
              <td className='py-3 px-4'>48/50</td>
              <td className='py-3 px-4'>
                <button className='text-blue-600 hover:text-blue-800 mr-2'>Edit</button>
                <button className='text-red-600 hover:text-red-800'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const RegistrationsContent = () => (
    <div className='space-y-4'>
      <h2 className='text-2xl font-bold'>Registrations</h2>

      <div className='bg-white p-4 rounded shadow'>
        <div className='flex justify-between items-center mb-4'>
          <div className='flex space-x-4'>
            <input
              type='search'
              placeholder='Search registrants...'
              className='border p-2 rounded'
            />
            <select className='border p-2 rounded'>
              <option>All Events</option>
              <option>Tech Conference 2025</option>
              <option>Workshop Series</option>
            </select>
          </div>
          <button className='bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded'>
            Export CSV
          </button>
        </div>

        <table className='min-w-full'>
          <thead>
            <tr className='bg-gray-100'>
              <th className='text-left py-3 px-4'>Name</th>
              <th className='text-left py-3 px-4'>Email</th>
              <th className='text-left py-3 px-4'>Event</th>
              <th className='text-left py-3 px-4'>Ticket</th>
              <th className='text-left py-3 px-4'>Status</th>
              <th className='text-left py-3 px-4'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4].map((item) => (
              <tr key={item} className='border-b'>
                <td className='py-3 px-4'>Jane Doe</td>
                <td className='py-3 px-4'>jane@example.com</td>
                <td className='py-3 px-4'>Tech Conference 2025</td>
                <td className='py-3 px-4'>VIP Pass</td>
                <td className='py-3 px-4'>
                  <span className='bg-green-100 text-green-800 text-xs px-2 py-1 rounded'>Confirmed</span>
                </td>
                <td className='py-3 px-4'>
                  <button className='text-blue-600 hover:text-blue-800 mr-2'>View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const CouponsContent = () => (
    <div className='space-y-4'>
      <div className='flex justify-between items-center'>
        <h2 className='text-2xl font-bold'>Coupon Codes</h2>
        <button className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded'>
          Create New Coupon
        </button>
      </div>

      <div className='bg-white p-4 rounded shadow'>
        <table className='min-w-full'>
          <thead>
            <tr className='bg-gray-100'>
              <th className='text-left py-3 px-4'>Code</th>
              <th className='text-left py-3 px-4'>Discount</th>
              <th className='text-left py-3 px-4'>Valid For</th>
              <th className='text-left py-3 px-4'>Expiry</th>
              <th className='text-left py-3 px-4'>Uses</th>
              <th className='text-left py-3 px-4'>Status</th>
              <th className='text-left py-3 px-4'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3].map((item) => (
              <tr key={item} className='border-b'>
                <td className='py-3 px-4'>SPRING25</td>
                <td className='py-3 px-4'>25%</td>
                <td className='py-3 px-4'>All Events</td>
                <td className='py-3 px-4'>April 30, 2025</td>
                <td className='py-3 px-4'>12/100</td>
                <td className='py-3 px-4'>
                  <span className='bg-green-100 text-green-800 text-xs px-2 py-1 rounded'>Active</span>
                </td>
                <td className='py-3 px-4'>
                  <button className='text-blue-600 hover:text-blue-800 mr-2'>Edit</button>
                  <button className='text-red-600 hover:text-red-800'>Disable</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const AnalyticsContent = () => (
    <div className='space-y-4'>
      <h2 className='text-2xl font-bold'>Analytics</h2>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div className='bg-white p-4 rounded shadow'>
          <h3 className='text-lg font-semibold mb-2'>Total Revenue</h3>
          <p className='text-3xl font-bold'>$24,750</p>
          <p className='text-green-600 text-sm'>↑ 12% from last month</p>
        </div>
        <div className='bg-white p-4 rounded shadow'>
          <h3 className='text-lg font-semibold mb-2'>Registrations</h3>
          <p className='text-3xl font-bold'>389</p>
          <p className='text-green-600 text-sm'>↑ 8% from last month</p>
        </div>
        <div className='bg-white p-4 rounded shadow'>
          <h3 className='text-lg font-semibold mb-2'>Active Events</h3>
          <p className='text-3xl font-bold'>5</p>
          <p className='text-gray-600 text-sm'>2 upcoming this month</p>
        </div>
      </div>

      <div className='bg-white p-4 rounded shadow h-64 flex items-center justify-center'>
        <p className='text-gray-500'>Charts and detailed analytics would appear here</p>
      </div>
    </div>
  );

  const SettingsContent = () => (
    <div className='space-y-4'>
      <h2 className='text-2xl font-bold'>Settings</h2>

      <div className='bg-white p-6 rounded shadow space-y-6'>
        <div>
          <h3 className='text-lg font-semibold mb-4'>General Settings</h3>
          <div className='space-y-4'>
            <div>
              <label className='block text-sm font-medium mb-1'>Company Name</label>
              <input
                type='text'
                value='EventPro Inc.'
                className='border p-2 rounded w-full'
              />
            </div>
            <div>
              <label className='block text-sm font-medium mb-1'>Email Address</label>
              <input
                type='email'
                value='contact@eventpro.example'
                className='border p-2 rounded w-full'
              />
            </div>
            <div>
              <label className='block text-sm font-medium mb-1'>Time Zone</label>
              <select className='border p-2 rounded w-full'>
                <option>America/New_York (GMT-5)</option>
                <option>America/Chicago (GMT-6)</option>
                <option>America/Los_Angeles (GMT-8)</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <h3 className='text-lg font-semibold mb-4'>Payment Integration</h3>
          <div className='space-y-4'>
            <div>
              <label className='block text-sm font-medium mb-1'>Payment Provider</label>
              <select className='border p-2 rounded w-full'>
                <option>Stripe</option>
                <option>PayPal</option>
                <option>Square</option>
              </select>
            </div>
            <div>
              <label className='block text-sm font-medium mb-1'>API Key</label>
              <input
                type='password'
                value='************'
                className='border p-2 rounded w-full'
              />
            </div>
          </div>
        </div>

        <button className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded'>
          Save Changes
        </button>
      </div>
    </div>
  );

  const contentComponents = {
    events: <EventsContent />,
    tickets: <TicketsContent />,
    registrations: <RegistrationsContent />,
    coupons: <CouponsContent />,
    analytics: <AnalyticsContent />,
    settings: <SettingsContent />
  };

  return (
    <div className='flex h-screen bg-gray-100'>
      {/* Sidebar */}
      <div className='w-64 bg-gray-800 text-white'>
        <div className='p-4 border-b border-gray-700'>
          <h1 className='text-xl font-bold'>Events Manager</h1>
        </div>
        <nav className='p-2'>
          <ul>
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveMenuItem(item.id)}
                  className={`w-full text-left flex items-center p-3 rounded my-1 ${
                    activeMenuItem === item.id
                      ? 'bg-blue-600'
                      : 'hover:bg-gray-700'
                  }`}
                >
                  <span className='mr-3'>{item.icon}</span>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className='absolute bottom-0 w-64 p-4 border-t border-gray-700'>
          <div className='flex items-center'>
            <div className='w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mr-2'>
              A
            </div>
            <div>
              <p className='text-sm font-medium'>Admin User</p>
              <p className='text-xs text-gray-400'>admin@example.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className='flex-1 overflow-auto'>
        <header className='bg-white shadow'>
          <div className='p-4 flex justify-between items-center'>
            <h2 className='text-xl'>{menuItems.find(item => item.id === activeMenuItem)?.label}</h2>
            <div className='flex space-x-2'>
              <button className='p-2 rounded hover:bg-gray-100'>
                🔔
              </button>
              <button className='p-2 rounded hover:bg-gray-100'>
                ❓
              </button>
            </div>
          </div>
        </header>
        <main className='p-6'>
          {contentComponents[activeMenuItem]}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
