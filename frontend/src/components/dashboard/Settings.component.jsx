import DashboardHeader from './DashboardHeader.component';

export default function SettingsContent () {
  return (
    <>
      <DashboardHeader />
      <div className='space-y-6 mt-4'>
        <div className='flex justify-between items-center mb-4'>
          <div>
            <h2 className='text-2xl font-bold'>Settings</h2>
            <p className='text-gray-500 text-sm'>
              Manage your account and preferences
            </p>
          </div>
        </div>

        <div className='bg-white rounded-lg shadow overflow-hidden'>
          <div className='p-4 border-b'>
            <h3 className='text-lg font-semibold'>Account Settings</h3>
          </div>
          <div className='p-4'>
            <div className='space-y-4'>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='font-medium'>Email Address</p>
                  <p className='text-gray-500 text-sm'>admin@example.com</p>
                </div>
                <button className='text-blue-600 hover:text-blue-800 text-sm'>
                  Change
                </button>
              </div>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='font-medium'>Password</p>
                  <p className='text-gray-500 text-sm'>
                    Last changed 3 months ago
                  </p>
                </div>
                <button className='text-blue-600 hover:text-blue-800 text-sm'>
                  Change
                </button>
              </div>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='font-medium'>Two-Factor Authentication</p>
                  <p className='text-gray-500 text-sm'>Disabled</p>
                </div>
                <button className='text-blue-600 hover:text-blue-800 text-sm'>
                  Enable
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-white rounded-lg shadow overflow-hidden'>
          <div className='p-4 border-b'>
            <h3 className='text-lg font-semibold'>Notification Preferences</h3>
          </div>
          <div className='p-4'>
            <div className='space-y-4'>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='font-medium'>Email Notifications</p>
                  <p className='text-gray-500 text-sm'>
                    Receive updates via email
                  </p>
                </div>
                <input type='checkbox' className='rounded' defaultChecked />
              </div>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='font-medium'>Push Notifications</p>
                  <p className='text-gray-500 text-sm'>
                    Receive updates on your device
                  </p>
                </div>
                <input type='checkbox' className='rounded' />
              </div>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='font-medium'>SMS Notifications</p>
                  <p className='text-gray-500 text-sm'>
                    Receive updates via SMS
                  </p>
                </div>
                <input type='checkbox' className='rounded' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
