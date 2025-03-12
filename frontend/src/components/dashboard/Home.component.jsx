import { useState } from 'react';
import DashboardHeader from './DashboardHeader.component';

export default function HomeContent () {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(11);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedFullDate, setSelectedFullDate] = useState(new Date());

  // Function to generate calendar days
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    // Create array for days of the week
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Get the first day of the month
    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Get the last day of previous month
    const daysInPrevMonth = new Date(year, month, 0).getDate();
    const firstDayIndex = firstDayOfMonth.getDay();

    const days = [];

    // Add days from previous month
    for (let i = firstDayIndex - 1; i >= 0; i--) {
      days.push({
        day: daysInPrevMonth - i,
        currentMonth: false,
        date: new Date(year, month - 1, daysInPrevMonth - i)
      });
    }

    // Add days from current month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
        currentMonth: true,
        date: new Date(year, month, i)
      });
    }

    // Add days from next month
    const remainingDays = 42 - days.length; // 6 rows * 7 days = 42
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        day: i,
        currentMonth: false,
        date: new Date(year, month + 1, i)
      });
    }

    return { daysOfWeek, days };
  };

  const { daysOfWeek, days } = generateCalendarDays();

  const formatMonth = (date) => {
    return date.toLocaleString('default', { month: 'long', year: 'numeric' });
  };

  const formatDate = (date) => {
    // Format date as "Month Day"
    return date.toLocaleString('default', { month: 'long', day: 'numeric' });
  };

  const prevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleDateSelect = (day) => {
    if (day.currentMonth) {
      setSelectedDate(day.day);
      setSelectedFullDate(day.date);
    }
  };

  return (
    <>
      <DashboardHeader />
      <div className='flex flex-col min-h-screen'>
        <main className='flex-1'>
          <div className='max-w-6xl mx-auto'>
            <div className='flex justify-between items-center p-8'>
              <h1 className='text-4xl font-bold'>Hello Janice</h1>
            </div>

            <div className='flex flex-col md:flex-row gap-8 p-8 pt-0'>
              {/* Calendar Section */}
              <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-100 w-full md:w-2/5'>
                <div className='flex items-center justify-between mb-4'>
                  <button onClick={prevMonth} className='text-indigo-600 p-2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </button>
                  <h2 className='text-xl font-medium'>
                    {formatMonth(currentMonth)}
                  </h2>
                  <button onClick={nextMonth} className='text-indigo-600 p-2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </button>
                </div>

                <div className='grid grid-cols-7 gap-2'>
                  {daysOfWeek.map((day, index) => (
                    <div
                      key={index}
                      className='text-center text-gray-500 text-sm py-2'
                    >
                      {day}
                    </div>
                  ))}

                  {days.map((day, index) => (
                    <div
                      key={index}
                      className={`text-center py-2 rounded-full cursor-pointer
                      ${!day.currentMonth ? 'text-gray-400' : 'text-gray-800'}
                      ${
                        day.day === selectedDate && day.currentMonth
                          ? 'bg-indigo-500 text-white'
                          : ''
                      }
                      hover:bg-gray-100`}
                      onClick={() => handleDateSelect(day)}
                    >
                      {day.day}
                    </div>
                  ))}
                </div>
              </div>

              {/* Dashboard Section */}
              <div className='w-full md:w-3/5'>
                <div className='flex justify-between items-center mb-6'>
                  <h2 className='text-2xl font-bold'>
                    Plans for {formatDate(selectedFullDate)}
                  </h2>
                  <div className='relative'>
                    <button
                      className='bg-gray-900 text-white px-6 py-2 rounded-lg flex items-center gap-2'
                      onClick={toggleDropdown}
                    >
                      <span>Create</span>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className={`h-5 w-5 transition-transform ${
                          showDropdown ? 'rotate-180' : ''
                        }`}
                        viewBox='0 0 20 20'
                        fill='currentColor'
                      >
                        <path
                          fillRule='evenodd'
                          d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </button>

                    {/* Dropdown Modal */}
                    {showDropdown && (
                      <div className='absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-indigo-100 z-10 overflow-hidden'>
                        <div className='py-2 px-4 border-b border-indigo-100 rounded-t-lg'>
                          <div className='w-full p-3 hover:bg-gray-50 rounded-md flex items-center gap-3 cursor-pointer'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='h-5 w-5'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8'
                              />
                            </svg>
                            <span className='font-medium'>Create campaign</span>
                          </div>

                          <div className='w-full p-3 hover:bg-gray-50 rounded-md flex items-center gap-3 cursor-pointer'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='h-5 w-5'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                              />
                            </svg>
                            <span className='font-medium'>Plan meeting</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className='text-gray-500 text-center py-6'>
                  Nothing planned for {formatDate(selectedFullDate)}
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
                  <div className='border border-gray-200 rounded-lg p-6'>
                    <div className='w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6 text-green-600'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                        />
                      </svg>
                    </div>
                    <h3 className='text-xl font-bold mb-2'>
                      Do you have new contacts to organize?
                    </h3>
                    <p className='text-gray-600 mb-6'>
                      Use segmentation to send personalized messages and
                      organize your contacts.
                    </p>
                    <a
                      href='#'
                      className='text-indigo-600 font-medium flex items-center'
                    >
                      Segment contacts
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5 ml-2'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                      >
                        <path
                          fillRule='evenodd'
                          d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </a>
                  </div>

                  <div className='border border-gray-200 rounded-lg p-6'>
                    <div className='w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6 text-green-600'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M13 7l5 5m0 0l-5 5m5-5H6'
                        />
                      </svg>
                    </div>
                    <h3 className='text-xl font-bold mb-2'>
                      Expand your reach with sign-up forms
                    </h3>
                    <p className='text-gray-600 mb-6'>
                      Grow your audience, convert website visitors to
                      subscribers, and collect valuable information.
                    </p>
                    <a
                      href='#'
                      className='text-indigo-600 font-medium flex items-center'
                    >
                      Create sign-up form
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5 ml-2'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                      >
                        <path
                          fillRule='evenodd'
                          d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
