import { useState } from 'react';
import EventsContent from '../components/dashboard/Events.component';
import TicketsContent from '../components/dashboard/Tickets.component';
import SettingsContent from '../components/dashboard/Settings.component';
import CouponsContent from '../components/dashboard/Coupons.component';
import RegistrationsContent from '../components/dashboard/Registration.component';
import AnalyticsContent from '../components/dashboard/Analytics.component';

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

  const renderContent = () => {
    switch (activeMenuItem) {
      case 'events':
        return <EventsContent />;
      case 'tickets':
        return <TicketsContent />;
      case 'registrations':
        return <RegistrationsContent />;
      case 'coupons':
        return <CouponsContent />;
      case 'analytics':
        return <AnalyticsContent />;
      case 'settings':
        return <SettingsContent />;
      default:
        return <EventsContent />;
    }
  };

  return (
    <div className='flex min-h-screen bg-gray-100'>
      <div className='w-64 bg-white shadow-lg'>
        <div className='p-6 border-b'>
          <h1 className='text-xl font-bold'>Event Manager</h1>
        </div>
        <div className='p-4'>
          <ul className='space-y-2'>
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveMenuItem(item.id)}
                  className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg ${
                    activeMenuItem === item.id
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='flex-1 p-8 overflow-y-auto'>{renderContent()}</div>
    </div>
  );
};

export default Dashboard;
