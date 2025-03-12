import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../../services/auth.service.js';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('input');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage('Please enter your email address');
      return;
    }

    setStatus('loading');

    try {
      const response = await authService.requestPasswordReset({ email });

      if (response.status !== 200) {
        console.error(response.data);
      }

      setStatus('success');
      setMessage(
        'If your email is registered with us, you will receive password reset instructions shortly.'
      );
    } catch (error) {
      console.log(error);
      setStatus('error');
      setMessage(
        error.response?.data?.error ||
          'An error occurred while processing your request'
      );
    }
  };

  const handleLogin = () => {
    navigate('/auth/login');
  };

  const handleContactSupport = () => {
    navigate('/support');
  };

  const handleTryAgain = () => {
    setStatus('input');
    setMessage('');
  };

  if (status === 'loading') {
    return (
      <div className='min-h-screen flex items-center justify-center bg-gray-50'>
        <div className='max-w-md w-full p-6 bg-white rounded-lg shadow-md'>
          <div className='text-center'>
            <div className='flex justify-center mb-4'>
              <svg
                className='animate-spin h-10 w-10 text-blue-500'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
              >
                <circle
                  className='opacity-25'
                  cx='12'
                  cy='12'
                  r='10'
                  stroke='currentColor'
                  strokeWidth='4'
                />
                <path
                  className='opacity-75'
                  fill='currentColor'
                  d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                />
              </svg>
            </div>
            <h2 className='text-2xl font-bold text-gray-800 mb-2'>
              Processing Your Request
            </h2>
            <p className='text-gray-600'>
              Please wait while we send the reset instructions.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (status === 'success') {
    return (
      <div className='min-h-screen flex items-center justify-center bg-gray-50'>
        <div className='max-w-md w-full p-8 bg-white rounded-lg shadow-md'>
          <div className='text-center mb-6'>
            <div className='flex justify-center mb-4'>
              <div className='rounded-full bg-green-100 p-3'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-8 w-8 text-green-500'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 13l4 4L19 7'
                  />
                </svg>
              </div>
            </div>
            <h2 className='text-2xl font-bold text-gray-800 mb-2'>
              Check Your Email
            </h2>
            <p className='text-gray-600 mb-6'>{message}</p>
            <div className='bg-gray-50 p-4 rounded-md text-left mb-6'>
              <p className='font-medium text-gray-700 mb-2'>Next steps:</p>
              <ul className='list-disc pl-5 text-gray-600 space-y-1'>
                <li>Check your inbox for the reset link</li>
                <li>Remember check your spam folder</li>
                <li>The link will expire after 2 hours</li>
              </ul>
            </div>
            <div className='space-y-3'>
              <button
                onClick={handleLogin}
                className='w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition duration-200 shadow-sm'
              >
                Return to Login
              </button>
              <button
                onClick={handleTryAgain}
                className='w-full py-2 px-4 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium rounded-md transition duration-200'
              >
                Try Different Email
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className='min-h-screen flex items-center justify-center bg-gray-50'>
        <div className='max-w-md w-full p-8 bg-white rounded-lg shadow-md'>
          <div className='text-center mb-6'>
            <div className='flex justify-center mb-4'>
              <div className='rounded-full bg-red-100 p-3'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-8 w-8 text-red-500'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
                  />
                </svg>
              </div>
            </div>
            <h2 className='text-2xl font-bold text-gray-800 mb-2'>
              Something Went Wrong
            </h2>
            <p className='text-red-600 mb-4'>{message}</p>
            <div className='space-y-3'>
              <button
                onClick={handleTryAgain}
                className='w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition duration-200 shadow-sm'
              >
                Try Again
              </button>
              <button
                onClick={handleContactSupport}
                className='w-full py-2 px-4 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium rounded-md transition duration-200'
              >
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50'>
      <div className='max-w-md w-full p-8 bg-white rounded-lg shadow-md'>
        <div className='text-center mb-6'>
          <h2 className='text-2xl font-bold text-gray-800 mb-2'>
            Forgot Your Password?
          </h2>
          <p className='text-gray-600 mb-6'>
            Enter your email address and you will recieve instructions to reset
            your password.
          </p>
          <form onSubmit={handleSubmit}>
            <div className='mb-6'>
              <label
                htmlFor='email'
                className='block text-left text-sm font-medium text-gray-700 mb-1'
              >
                Email Address
              </label>
              <input
                type='email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                required
                placeholder='your.email@example.com'
              />
              {message && (
                <p className='mt-1 text-left text-sm text-red-600'>{message}</p>
              )}
            </div>
            <div className='mb-4'>
              <button
                type='submit'
                className='w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition duration-200 shadow-sm'
              >
                Send Reset Instructions
              </button>
            </div>
          </form>
          <div className='mt-6 text-center'>
            <button
              onClick={handleLogin}
              className='text-blue-600 hover:text-blue-800 text-sm font-medium'
            >
              Return to Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
