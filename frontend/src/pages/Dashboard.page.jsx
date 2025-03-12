import { useState } from 'react';
import EventsContent from '../components/dashboard/Events.component';
import TicketsContent from '../components/dashboard/Tickets.component';
import SettingsContent from '../components/dashboard/Settings.component';
import CouponsContent from '../components/dashboard/Coupons.component';
import RegistrationsContent from '../components/dashboard/Registration.component';
import AnalyticsContent from '../components/dashboard/Analytics.component';
import {
  Calendar,
  Ticket,
  ClipboardList,
  Tag,
  BarChart,
  Settings,
  ChevronLeft,
  ChevronRight,
  LogOut,
  User
} from 'lucide-react';

const Dashboard = () => {
  const [activeMenuItem, setActiveMenuItem] = useState('events');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const mainMenuItems = [
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'tickets', label: 'Tickets', icon: Ticket },
    { id: 'registrations', label: 'Registrations', icon: ClipboardList },
    { id: 'coupons', label: 'Coupon Codes', icon: Tag },
    { id: 'analytics', label: 'Analytics', icon: BarChart },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const profileMenuItems = [
    {
      id: 'profile',
      label: 'John Doe',
      subLabel: 'john.doe@example.com',
      icon: User
    },
    { id: 'logout', label: 'Logout', icon: LogOut, isLogout: true }
  ];

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const handleLogout = () => {
    console.log('Logging out...');
  };

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
      <div
        className={`bg-white shadow-lg transition-all duration-300 ${
          isSidebarCollapsed ? 'w-16' : 'w-64'
        }`}
      >
        <div className='p-4 border-b flex items-center justify-between'>
          {!isSidebarCollapsed && (
            <h1 className='text-xl font-bold'>Event Manager</h1>
          )}
          <button
            onClick={toggleSidebar}
            className='p-1 rounded-lg hover:bg-gray-100 text-gray-600'
            aria-label={
              isSidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'
            }
          >
            {isSidebarCollapsed
              ? (
                <ChevronRight size={20} />
                )
              : (
                <ChevronLeft size={20} />
                )}
          </button>
        </div>

        <div className='p-4'>
          {/* Main menu section */}
          <ul className='space-y-2'>
            {mainMenuItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveMenuItem(item.id)}
                    className={`w-full flex items-center ${
                      isSidebarCollapsed ? 'justify-center' : 'space-x-2 px-4'
                    } py-2 rounded-lg ${
                      activeMenuItem === item.id
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    title={isSidebarCollapsed ? item.label : ''}
                  >
                    <Icon size={isSidebarCollapsed ? 20 : 18} />
                    {!isSidebarCollapsed && <span>{item.label}</span>}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* User profile and logout section - now closer to settings */}
          <div className='mt-6 pt-6 border-t'>
            <ul className='space-y-2'>
              {profileMenuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.id}>
                    <button
                      onClick={item.isLogout ? handleLogout : () => {}}
                      className={`w-full flex items-center ${
                        isSidebarCollapsed ? 'justify-center' : 'space-x-2 px-4'
                      } py-2 rounded-lg ${
                        item.isLogout
                          ? 'text-red-600 hover:bg-red-50'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                      title={isSidebarCollapsed ? item.label : ''}
                    >
                      <Icon size={isSidebarCollapsed ? 20 : 18} />
                      {!isSidebarCollapsed && (
                        <div className='text-left'>
                          <span>{item.label}</span>
                          {item.subLabel && (
                            <p className='text-xs text-gray-500'>
                              {item.subLabel}
                            </p>
                          )}
                        </div>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className='flex-1 p-8 overflow-y-auto'>{renderContent()}</div>
    </div>
  );
};

export default Dashboard;
