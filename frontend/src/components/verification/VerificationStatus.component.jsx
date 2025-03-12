import { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import authService from '../../services/auth.service.js';

const VerificationStatus = () => {
  const [status, setStatus] = useState('loading');
  const [message, setMessage] = useState('');
  const [userName, setUserName] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const verificationAttempted = useRef(false);

  useEffect(() => {
    const verifyAccount = async () => {
      if (verificationAttempted.current) return;
      verificationAttempted.current = true;
      try {
        const token = new URLSearchParams(location.search).get('token');
        if (!token) {
          setStatus('error');
          setMessage('Verification token is missing');
          return;
        }
        const response = await authService.verifyUser(token, id);
        setStatus(response.data.status);
        setMessage(response.data.message);
        setUserName(response.data.userName);
        console.log(response);
      } catch (error) {
        console.log(error);
        setStatus('error');
        setMessage(
          error.response?.data?.message ||
            'An error occurred during verification'
        );
      }
    };
    verifyAccount();
  }, [id, location.search]);

  const handleLogin = () => {
    navigate('/auth/login');
  };

  const handleContactSupport = () => {
    navigate('/support');
  };

  if (status === 'loading') {
    return (
      <div className='min-h-screen flex items-center justify-center bg-gray-50'>
        <div className='max-w-md w-full p-6 bg-white rounded-lg shadow-md'>
          <div className='text-center'>
            <div className='flex justify-center mb-4'>
              <svg
                className='animate-spin h-10 w-10 text-green-500'
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
              Verifying your account...
            </h2>
            <p className='text-gray-600'>
              Please wait while we confirm your details.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50'>
      <div className='max-w-md w-full p-8 bg-white rounded-lg shadow-md'>
        {status === 'success'
          ? (
            <>
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
                  Account Verified!
                </h2>
                <p className='text-gray-600 mb-6'>
                  Congratulations,{' '}
                  <span className='font-semibold'>{userName}</span>! Your account
                  has been successfully verified. You can now log in and start
                  using our Service
                </p>
                <button
                  onClick={handleLogin}
                  className='w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition duration-200 shadow-sm'
                >
                  Log In
                </button>
              </div>
            </>
            )
          : (
            <>
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
                  Could not verify your account
                </h2>
                <p className='text-red-600 mb-4'>{message}</p>
                <div className='bg-gray-50 p-4 rounded-md text-left mb-6'>
                  <p className='font-medium text-gray-700 mb-2'>
                    Please try the following:
                  </p>
                  <ul className='list-disc pl-5 text-gray-600 space-y-1'>
                    <li>Check if your account is already verified</li>
                    <li>
                      Try copying and pasting the entire URL from your email into
                      your browser
                    </li>
                    <li>
                      Request a new verification email if your link has expired
                    </li>
                  </ul>
                </div>
                <button
                  onClick={handleContactSupport}
                  className='w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition duration-200 shadow-sm'
                >
                  Contact Support
                </button>
              </div>
            </>
            )}
      </div>
    </div>
  );
};

export default VerificationStatus;
