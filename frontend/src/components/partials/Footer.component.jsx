export default function Footer () {
  return (
    <>
      <footer className='bg-gray-800 text-white py-12'>
        <div className='container mx-auto px-4 text-center'>
          <p>&copy; 2023 ScheduleFlow. All rights reserved.</p>
          <div className='mt-4 space-x-6'>
            <a href='/privacy' className='hover:text-blue-400'>
              Privacy Policy
            </a>
            <a href='/terms' className='hover:text-blue-400'>
              Terms of Service
            </a>
            <a href='/contact' className='hover:text-blue-400'>
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
