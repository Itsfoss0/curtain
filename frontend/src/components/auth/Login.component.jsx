import { useState } from 'react';
import { Calendar, ArrowRight, Eye, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';

export function LoginComponent () {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', formData);
  };

  return (
    <div className='flex min-h-screen bg-gray-50'>
      {/* Left Side - Login Form */}
      <div className='w-full lg:w-1/2 flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-md'
        >
          <div className='text-center'>
            <div className='flex justify-center'>
              <Calendar className='h-8 w-8 text-indigo-600' />
            </div>
            <h2 className='mt-4 text-3xl font-bold text-gray-900'>Welcome back</h2>
            <p className='mt-2 text-sm text-gray-600'>
              Sign in to your ScheduleFlow account
            </p>
          </div>

          <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
            <div className='space-y-4'>
              <div>
                <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                  Email address
                </label>
                <div className='mt-1'>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    autoComplete='email'
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className='appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
                    placeholder='you@example.com'
                  />
                </div>
              </div>

              <div>
                <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
                  Password
                </label>
                <div className='mt-1 relative'>
                  <input
                    id='password'
                    name='password'
                    type={showPassword ? 'text' : 'password'}
                    autoComplete='current-password'
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                    className='appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
                    placeholder='••••••••'
                  />
                  <button
                    type='button'
                    className='absolute inset-y-0 right-0 pr-3 flex items-center'
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword
                      ? (
                        <EyeOff className='h-5 w-5 text-gray-400' />
                        )
                      : (
                        <Eye className='h-5 w-5 text-gray-400' />
                        )}
                  </button>
                </div>
              </div>
            </div>

            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <input
                  id='remember-me'
                  name='rememberMe'
                  type='checkbox'
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
                />
                <label htmlFor='remember-me' className='ml-2 block text-sm text-gray-700'>
                  Remember me
                </label>
              </div>

              <div className='text-sm'>
                <a href='/auth/forgot' className='font-medium text-indigo-600 hover:text-indigo-500'>
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='group relative w-full flex justify-center py-3 px-4 border border-transparent rounded-lg text-black bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors shadow-md'
              >
                Sign in <ArrowRight className='ml-2 h-5 w-5' />
              </button>
            </div>
          </form>

          <div className='text-center mt-4'>
            <p className='text-sm text-gray-600'>
              No have an account?{' '}
              <a href='/auth/register' className='font-medium text-indigo-600 hover:text-indigo-500'>
                Sign up now
              </a>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Right Side - Image and Text */}
      <div className='hidden lg:flex w-1/2 bg-indigo-50 justify-center items-center relative overflow-hidden'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='absolute inset-0 bg-gradient-to-br from-indigo-500/30 to-purple-600/30'
        />
        <div className='z-10 text-center max-w-lg px-6'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Calendar className='h-16 w-16 text-indigo-600 mx-auto mb-6' />
            <h3 className='text-3xl font-bold text-gray-900 mb-4'>
              Streamline Your Event Management
            </h3>
            <p className='text-lg text-gray-700 mb-6'>
              Log in to manage your events and view your calender all in one place.
            </p>
            <div className='relative w-full h-64 rounded-xl overflow-hidden shadow-xl'>
              <div className='absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-20' />
              <div className='relative rounded-2xl bg-white shadow-xl overflow-hidden'>
                <img
                  src='/preview.png'
                  alt='Dashboard Preview'
                  className='w-full h-auto'
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;
