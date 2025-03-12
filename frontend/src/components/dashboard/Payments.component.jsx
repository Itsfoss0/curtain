import { useState } from 'react';

import DashboardHeader from './DashboardHeader.component';

export default function PaymentsContent () {
  const [filter, setFilter] = useState('Last 30 days');
  const [withdrawAmount, setWithdrawAmount] = useState('');

  const paymentsLog = [
    {
      id: 1,
      date: '2023-10-01',
      amount: 1000,
      description: 'Payment for Service A'
    },
    {
      id: 2,
      date: '2023-10-05',
      amount: 1500,
      description: 'Payment for Service B'
    },
    {
      id: 3,
      date: '2023-10-10',
      amount: 2000,
      description: 'Payment for Service C'
    }
    // Add more payment entries as needed
  ];

  const totalRevenue = paymentsLog.reduce(
    (total, payment) => total + payment.amount,
    0
  );

  const handleWithdraw = () => {
    if (withdrawAmount && withdrawAmount <= totalRevenue) {
      alert(`Withdrawal of $${withdrawAmount} successful!`);
      // Implement actual withdrawal logic here
    } else {
      alert('Invalid withdrawal amount or insufficient funds.');
    }
  };

  return (
    <>
      <DashboardHeader />
      <div className='space-y-6 mt-4'>
        <div className='flex justify-between items-center mb-4'>
          <div>
            <h2 className='text-2xl font-bold'>Payments</h2>
            <p className='text-gray-500 text-sm'>
              View payments log and manage withdrawals
            </p>
          </div>
          <div className='flex space-x-2'>
            <select
              className='border border-gray-300 rounded-lg px-3 py-2 text-sm'
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option>Last 30 days</option>
              <option>Last 3 months</option>
              <option>Last 6 months</option>
              <option>Year to date</option>
              <option>All time</option>
            </select>
            <button className='bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg text-sm flex items-center'>
              <span className='mr-1'>↑</span> Export Report
            </button>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div className='bg-white p-6 rounded-lg shadow'>
            <div className='flex justify-between items-center mb-4'>
              <h3 className='text-lg font-semibold'>Total Revenue</h3>
            </div>
            <div className='text-3xl font-bold mb-1'>${totalRevenue}</div>
            <p className='text-gray-500 text-sm'>
              Total revenue generated from payments
            </p>
          </div>
          <div className='bg-white p-6 rounded-lg shadow col-span-2'>
            <div className='flex justify-between items-center mb-4'>
              <h3 className='text-lg font-semibold'>Withdraw Funds</h3>
            </div>
            <div className='flex space-x-2'>
              <input
                type='number'
                className='border border-gray-300 rounded-lg px-3 py-2 text-sm flex-grow'
                placeholder='Enter amount to withdraw'
                value={withdrawAmount}
                onChange={(e) => setWithdrawAmount(e.target.value)}
              />
              <button
                className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm'
                onClick={handleWithdraw}
              >
                Withdraw
              </button>
            </div>
          </div>
        </div>

        <div className='bg-white p-6 rounded-lg shadow'>
          <div className='flex justify-between items-center mb-4'>
            <h3 className='text-lg font-semibold'>Payments Log</h3>
            <select
              className='border border-gray-300 rounded-lg px-3 py-2 text-sm'
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option>Last 30 days</option>
              <option>Last 3 months</option>
              <option>Last 6 months</option>
              <option>Year to date</option>
              <option>All time</option>
            </select>
          </div>
          <div className='overflow-x-auto'>
            <table className='min-w-full bg-white'>
              <thead>
                <tr>
                  <th className='py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600'>
                    Date
                  </th>
                  <th className='py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600'>
                    Amount
                  </th>
                  <th className='py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600'>
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {paymentsLog.map((payment) => (
                  <tr key={payment.id}>
                    <td className='py-2 px-4 border-b border-gray-200 text-sm text-gray-700'>
                      {payment.date}
                    </td>
                    <td className='py-2 px-4 border-b border-gray-200 text-sm text-gray-700'>
                      ${payment.amount}
                    </td>
                    <td className='py-2 px-4 border-b border-gray-200 text-sm text-gray-700'>
                      {payment.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
