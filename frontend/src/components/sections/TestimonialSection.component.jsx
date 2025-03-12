import { motion } from 'framer-motion';

export default function Testimonials () {
  return (
    <>
      <section id='testimonials' className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4 max-w-6xl'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
              What Our Customers Say
            </h2>
            <p className='mt-4 text-xl text-gray-600 max-w-3xl mx-auto'>
              Don&lsquo;t just take our word for it. Here&apos;s what people are
              saying about ScheduleFlow.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className='bg-white p-8 rounded-xl shadow-md'
              >
                <div className='flex items-center mb-4'>
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className='h-5 w-5 text-yellow-400'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                  ))}
                </div>
                <p className='text-gray-600 mb-6'>{testimonial.quote}</p>
                <div className='flex items-center'>
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className='h-10 w-10 rounded-full mr-3'
                  />
                  <div>
                    <p className='font-medium text-gray-900'>
                      {testimonial.name}
                    </p>
                    <p className='text-gray-600 text-sm'>{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const testimonials = [
  {
    quote:
      "ScheduleFlow has completely transformed how I manage my consultancy. No more back-and-forth emails to schedule meetings, and I get paid instantly. It's saved me hours every week.",
    name: 'Sarah Kiprotich',
    role: 'Business Consultant',
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce'
  },
  {
    quote:
      'The payment process is seamless and secure. I love how easy it is to manage my bookings and payments in one place.',
    name: 'Jane Mwende',
    role: 'Freelancer',
    avatar: 'https://images.unsplash.com/photo-1512361436605-a484bdb34b5f'
  },
  {
    quote:
      'I love the calendar integration feature! It syncs perfectly with my existing tools.',
    name: 'Mike Mutua',
    role: 'Small Business Owner',
    avatar: 'https://images.unsplash.com/photo-1605980776566-0486c3ac7617'
  }
];
