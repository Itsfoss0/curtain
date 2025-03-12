export default function ProfileDropdown () {
  return (
    <>
      <div className='absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg border border-gray-200 z-10'>
        <div className='p-4 border-b border-gray-100'>
          <p className='text-gray-500 text-sm'>johndoe@gmail.com</p>
        </div>
        <div className='py-2'>
          <a href='#' className='flex items-center px-4 py-3 hover:bg-gray-50'>
            <svg
              className='h-5 w-5 mr-3'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M4 21V19C4 16.7909 5.79086 15 8 15H16C18.2091 15 20 16.7909 20 19V21'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            <span>My profile</span>
          </a>
          <a href='#' className='flex items-center px-4 py-3 hover:bg-gray-50'>
            <svg
              className='h-5 w-5 mr-3'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect
                x='3'
                y='5'
                width='18'
                height='14'
                rx='2'
                stroke='currentColor'
                strokeWidth='2'
              />
              <path d='M3 10H21' stroke='currentColor' strokeWidth='2' />
            </svg>
            <span>My plan</span>
          </a>
          <a href='#' className='flex items-center px-4 py-3 hover:bg-gray-50'>
            <svg
              className='h-5 w-5 mr-3'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M19.4 15C19.1277 15.8031 19.2894 16.6718 19.8321 17.3377C20.375 18.0037 20.2478 19.0001 19.8 19.4L18.4 20.8C17.9999 21.2418 17.0036 21.3746 16.3376 20.8317C15.6716 20.2888 14.8031 20.1276 14 20.4C13.2126 20.6645 12.6685 21.352 12.6685 22.1876C12.6685 23.0232 11.9999 23.6988 11.1646 23.6988H9.83539C9.00009 23.6988 8.33539 23.0232 8.33539 22.1876C8.33539 21.352 7.79128 20.6645 7.00387 20.4C6.20069 20.1276 5.33217 20.2888 4.66622 20.8317C4.00027 21.3746 3.00387 21.2418 2.60387 20.8L1.20387 19.4C0.761866 19.0001 0.634628 18.0037 1.17751 17.3377C1.72039 16.6718 1.88214 15.8031 1.60974 15C1.34528 14.2125 0.657866 13.6683 -0.177779 13.6683C-1.01342 13.6683 -1.68894 12.9999 -1.68894 12.1646V10.8354C-1.68894 10.0001 -1.01342 9.33539 -0.177779 9.33539C0.657866 9.33539 1.34528 8.79128 1.60974 8.00387C1.88214 7.20069 1.72039 6.33217 1.17751 5.66622C0.634628 5.00027 0.761866 4.00387 1.20387 3.60387L2.60387 2.20387C3.00387 1.76187 4.00027 1.63463 4.66622 2.17751C5.33217 2.72039 6.20069 2.88214 7.00387 2.60974C7.79128 2.34528 8.33539 1.65787 8.33539 0.822222C8.33539 -0.0134235 9.00009 -0.688942 9.83539 -0.688942H11.1646C11.9999 -0.688942 12.6646 -0.0134235 12.6646 0.822222C12.6646 1.65787 13.2087 2.34528 13.9961 2.60974C14.7993 2.88214 15.6678 2.72039 16.3338 2.17751C16.9997 1.63463 17.9961 1.76187 18.3961 2.20387L19.7961 3.60387C20.2381 4.00387 20.3704 5.00027 19.8275 5.66622C19.2846 6.33217 19.1229 7.20069 19.3953 8.00387C19.6597 8.79128 20.3471 9.33539 21.1822 9.33539C22.0174 9.33539 22.6929 10.0001 22.6929 10.8354V12.1646C22.6929 12.9999 22.0174 13.6646 21.1822 13.6646C20.3471 13.6646 19.6597 14.2087 19.4 15Z'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            <span>Settings</span>
          </a>
          <a href='#' className='flex items-center px-4 py-3 hover:bg-gray-50'>
            <svg
              className='h-5 w-5 mr-3'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M4 8H9'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M4 12H11'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M4 16H8'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M13 16.0001L15.4143 13.5858C15.7889 13.2112 16.2964 13.0001 16.8284 13.0001H18.5C19.3284 13.0001 20 13.6716 20 14.5001V18.5001C20 19.3285 19.3284 20.0001 18.5 20.0001H14.5C13.6716 20.0001 13 19.3285 13 18.5001V16.0001Z'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M16 12.9999V6.49988C16 5.67145 16.6716 4.99988 17.5 4.99988H18.5C19.3284 4.99988 20 5.67145 20 6.49988V10.4999C20 11.3283 19.3284 11.9999 18.5 11.9999H16Z'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            <span>Plugins & Integrations</span>
          </a>
        </div>
      </div>
    </>
  );
}
