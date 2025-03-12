import React, { useState, useEffect } from 'react';

const EventsListingPage = () => {
  // Sample events data
  const [allEvents, setAllEvents] = useState([
    {
      id: 1,
      title: 'Tech Conference 2025',
      date: 'March 15-17, 2025',
      location: 'San Francisco, CA',
      description: 'Join the biggest tech conference of the year featuring keynotes from industry leaders, hands-on workshops, and networking opportunities.',
      category: 'Conference',
      price: 299,
      image: 'https://picsum.photos/200',
      tags: ['Technology', 'Networking', 'Innovation'],
      availableTickets: 142
    },
    {
      id: 2,
      title: 'Digital Marketing Workshop',
      date: 'April 5, 2025',
      location: 'New York, NY',
      description: 'Learn the latest digital marketing strategies in this intensive one-day workshop led by marketing experts.',
      category: 'Workshop',
      price: 149,
      image: 'https://picsum.photos/200',
      tags: ['Marketing', 'Digital', 'SEO'],
      availableTickets: 35
    },
    {
      id: 3,
      title: 'Music Festival',
      date: 'May 22-24, 2025',
      location: 'Austin, TX',
      description: 'Three days of amazing performances across 5 stages featuring top artists and emerging talent.',
      category: 'Festival',
      price: 199,
      image: 'https://picsum.photos/200',
      tags: ['Music', 'Entertainment', 'Arts'],
      availableTickets: 850
    },
    {
      id: 4,
      title: 'Startup Pitch Competition',
      date: 'June 10, 2025',
      location: 'Boston, MA',
      description: 'Witness innovative startups pitch their ideas to a panel of investors with a chance to win funding.',
      category: 'Competition',
      price: 79,
      image: 'https://picsum.photos/200',
      tags: ['Startup', 'Business', 'Entrepreneurship'],
      availableTickets: 200
    },
    {
      id: 5,
      title: 'Health & Wellness Retreat',
      date: 'July 7-10, 2025',
      location: 'Denver, CO',
      description: 'Rejuvenate your mind and body at this immersive wellness retreat featuring yoga, meditation, and healthy living workshops.',
      category: 'Retreat',
      price: 399,
      image: 'https://picsum.photos/200',
      tags: ['Wellness', 'Health', 'Mindfulness'],
      availableTickets: 55
    },
    {
      id: 6,
      title: 'Web Development Bootcamp',
      date: 'August 1-31, 2025',
      location: 'Virtual Event',
      description: 'Intensive month-long bootcamp to master front-end and back-end web development technologies.',
      category: 'Online Course',
      price: 999,
      image: 'https://picsum.photos/200',
      tags: ['Coding', 'Web Development', 'Virtual'],
      availableTickets: 75
    },
    {
      id: 7,
      title: 'Photography Exhibition',
      date: 'September 12-15, 2025',
      location: 'Chicago, IL',
      description: 'Explore captivating visual stories through the lenses of award-winning photographers from around the world.',
      category: 'Exhibition',
      price: 25,
      image: 'https://picsum.photos/200',
      tags: ['Photography', 'Arts', 'Culture'],
      availableTickets: 320
    },
    {
      id: 8,
      title: 'Food & Wine Festival',
      date: 'October 8-10, 2025',
      location: 'Napa Valley, CA',
      description: 'Indulge in gourmet cuisine and fine wines curated by renowned chefs and sommeliers.',
      category: 'Festival',
      price: 189,
      image: 'https://picsum.photos/200',
      tags: ['Food', 'Wine', 'Culinary'],
      availableTickets: 110
    },
    {
      id: 9,
      title: 'AI in Business Summit',
      date: 'November 20, 2025',
      location: 'Seattle, WA',
      description: 'Discover how artificial intelligence is transforming industries and creating new business opportunities.',
      category: 'Conference',
      price: 249,
      image: 'https://picsum.photos/200',
      tags: ['AI', 'Business', 'Technology'],
      availableTickets: 280
    },
    {
      id: 10,
      title: 'Holiday Craft Market',
      date: 'December 5-6, 2025',
      location: 'Portland, OR',
      description: 'Shop handcrafted gifts from local artisans and enjoy festive entertainment.',
      category: 'Market',
      price: 10,
      image: 'https://picsum.photos/200',
      tags: ['Crafts', 'Holiday', 'Shopping'],
      availableTickets: 500
    },
    {
      id: 11,
      title: "New Year's Eve Gala",
      date: 'December 31, 2025',
      location: 'Miami, FL',
      description: 'Ring in the new year with live entertainment, gourmet dining, and spectacular views.',
      category: 'Gala',
      price: 350,
      image: 'https://picsum.photos/200',
      tags: ['Celebration', 'New Year', 'Entertainment'],
      availableTickets: 150
    },
    {
      id: 12,
      title: 'Winter Sports Expo',
      date: 'January 15-17, 2026',
      location: 'Denver, CO',
      description: 'Explore the latest in winter sports equipment and apparel with demos and special guests.',
      category: 'Expo',
      price: 45,
      image: 'https://picsum.photos/200',
      tags: ['Sports', 'Winter', 'Outdoor'],
      availableTickets: 400
    }
  ]);

  // State for search and filtering
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('date');

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage, setEventsPerPage] = useState(6);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [paginatedEvents, setPaginatedEvents] = useState([]);

  // Get unique categories for filter dropdown
  const categories = ['All', ...new Set(allEvents.map(event => event.category))];

  // Filter and sort events when filters change
  useEffect(() => {
    const filtered = allEvents
      .filter(event =>
        (selectedCategory === 'All' || event.category === selectedCategory) &&
        (event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
         event.location.toLowerCase().includes(searchTerm.toLowerCase()))
      )
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'title') return a.title.localeCompare(b.title);
        // Default sort by date
        return new Date(a.date.split('-')[0]) - new Date(b.date.split('-')[0]);
      });

    setFilteredEvents(filtered);
    // Reset to first page when filters change
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, sortBy, allEvents]);

  // Update paginated events when page or filtered events change
  useEffect(() => {
    const indexOfLastEvent = currentPage * eventsPerPage;
    const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
    setPaginatedEvents(filteredEvents.slice(indexOfFirstEvent, indexOfLastEvent));
  }, [currentPage, eventsPerPage, filteredEvents]);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle category filter change
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Handle sort change
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  // Handle events per page change
  const handleEventsPerPageChange = (e) => {
    setEventsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to first page
  };

  // Calculate total pages
  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);

  // Generate page numbers array
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll to top of events section
    document.getElementById('events-section').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  // Modal state for registration
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Handle register button click
  const handleRegisterClick = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  // Handle modal close
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedEvent(null);
  };

  // Registration form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    ticketCount: 1
  });

  // Handle form input change
  const handleFormInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmitRegistration = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Registration submitted:', {
      eventId: selectedEvent.id,
      eventTitle: selectedEvent.title,
      ...formData
    });

    // Close modal and reset form
    setShowModal(false);
    setSelectedEvent(null);
    setFormData({
      name: '',
      email: '',
      ticketCount: 1
    });

    // Show success message (in a real app)
    alert('Registration successful! Check your email for confirmation.');
  };

  // Pagination UI component
  const Pagination = () => {
    // Don't show pagination if there's only one page
    if (totalPages <= 1) return null;

    // Maximum number of visible page numbers
    const maxVisiblePages = 5;

    // Calculate visible page range
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    // Adjust start page if end page is maxed out
    if (endPage === totalPages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    return (
      <div className='flex items-center justify-center mt-8 space-x-2'>
        {/* Previous page button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded ${
            currentPage === 1
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          &lt;
        </button>

        {/* First page and ellipsis */}
        {startPage > 1 && (
          <>
            <button
              onClick={() => handlePageChange(1)}
              className={`px-3 py-1 rounded ${
                currentPage === 1
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              1
            </button>
            {startPage > 2 && (
              <span className='px-2'>...</span>
            )}
          </>
        )}

        {/* Page numbers */}
        {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map(number => (
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            className={`px-3 py-1 rounded ${
              currentPage === number
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {number}
          </button>
        ))}

        {/* Last page and ellipsis */}
        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && (
              <span className='px-2'>...</span>
            )}
            <button
              onClick={() => handlePageChange(totalPages)}
              className={`px-3 py-1 rounded ${
                currentPage === totalPages
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {totalPages}
            </button>
          </>
        )}

        {/* Next page button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded ${
            currentPage === totalPages
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          &gt;
        </button>
      </div>
    );
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header */}
      <header className='bg-blue-600 text-white'>
        <div className='container mx-auto py-8 px-4'>
          <h1 className='text-3xl md:text-4xl font-bold mb-2'>Upcoming Events</h1>
          <p className='text-blue-100 mb-6'>Discover and register for exciting events in your area</p>

          {/* Search and filter bar */}
          <div className='flex flex-col md:flex-row gap-4'>
            <div className='flex-grow'>
              <input
                type='search'
                placeholder='Search events...'
                className='w-full p-3 rounded text-gray-800'
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
            <div className='flex gap-2'>
              <select
                className='p-3 rounded text-gray-800 bg-white'
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <select
                className='p-3 rounded text-gray-800 bg-white'
                value={sortBy}
                onChange={handleSortChange}
              >
                <option value='date'>Sort by Date</option>
                <option value='price-low'>Price: Low to High</option>
                <option value='price-high'>Price: High to Low</option>
                <option value='title'>Title A-Z</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className='container mx-auto py-8 px-4' id='events-section'>
        {/* Results count and pagination controls */}
        <div className='flex flex-col md:flex-row justify-between items-center mb-6'>
          <p className='text-gray-600'>
            Showing {filteredEvents.length > 0
            ? `${(currentPage - 1) * eventsPerPage + 1}-${Math.min(currentPage * eventsPerPage, filteredEvents.length)} of ${filteredEvents.length}`
            : '0'} events
          </p>
          <div className='flex items-center space-x-2 mt-2 md:mt-0'>
            <span className='text-gray-600'>Show:</span>
            <select
              value={eventsPerPage}
              onChange={handleEventsPerPageChange}
              className='border rounded p-1'
            >
              <option value='3'>3</option>
              <option value='6'>6</option>
              <option value='9'>9</option>
              <option value='12'>12</option>
            </select>
          </div>
        </div>

        {/* Events grid */}
        {paginatedEvents.length > 0
          ? (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {paginatedEvents.map(event => (
                <div key={event.id} className='bg-white rounded-lg shadow-md overflow-hidden flex flex-col'>
                  <img
                    src={event.image}
                    alt={event.title}
                    className='w-full h-48 object-cover'
                  />
                  <div className='p-6 flex-grow'>
                    <div className='flex justify-between items-start mb-2'>
                      <h2 className='text-xl font-bold'>{event.title}</h2>
                      <span className='bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded'>{event.category}</span>
                    </div>
                    <div className='mb-4'>
                      <p className='text-gray-600 mb-1'>📅 {event.date}</p>
                      <p className='text-gray-600 mb-2'>📍 {event.location}</p>
                      <p className='text-gray-700'>{event.description.length > 120 ? `${event.description.substring(0, 120)}...` : event.description}</p>
                    </div>
                    <div className='flex flex-wrap gap-1 mb-4'>
                      {event.tags.map(tag => (
                        <span key={tag} className='bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded'>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className='bg-gray-50 p-4 border-t'>
                    <div className='flex justify-between items-center'>
                      <div>
                        <p className='text-lg font-bold'>${event.price}</p>
                        <p className='text-sm text-gray-600'>{event.availableTickets} tickets left</p>
                      </div>
                      <button
                        onClick={() => handleRegisterClick(event)}
                        className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded'
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            )
          : (
            <div className='text-center py-12'>
              <p className='text-xl text-gray-600'>No events match your search criteria</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className='mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded'
              >
                Clear Filters
              </button>
            </div>
            )}

        {/* Pagination */}
        <Pagination />
      </main>

      {/* Registration Modal */}
      {showModal && selectedEvent && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4'>
          <div className='bg-white rounded-lg max-w-md w-full'>
            <div className='p-6'>
              <div className='flex justify-between items-center mb-4'>
                <h3 className='text-xl font-bold'>Register for Event</h3>
                <button
                  onClick={handleCloseModal}
                  className='text-gray-500 hover:text-gray-700'
                >
                  ✕
                </button>
              </div>

              <div className='mb-4'>
                <h4 className='font-bold'>{selectedEvent.title}</h4>
                <p className='text-gray-600'>{selectedEvent.date} • {selectedEvent.location}</p>
              </div>

              <form onSubmit={handleSubmitRegistration}>
                {/* <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-2 border rounded"
                  value={formData.name}
                  onChange={handleFormInputChange}
                />
              </div> */}

                <div className='mb-4'>
                  <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                    Phone Number
                  </label>
                  <input
                    type='phone'
                    id='email'
                    name='email'
                    required
                    className='w-full p-2 border rounded'
                    value={formData.email}
                    onChange={handleFormInputChange}
                  />
                </div>

                {/* Ticket Type Selection */}
                <div className='mb-4'>
                  <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='ticketType'>
                    Ticket Type
                  </label>
                  <select
                    id='ticketType'
                    name='ticketType'
                    className='w-full p-2 border rounded'
                    value={formData.ticketType}
                    onChange={handleFormInputChange}
                  >
                    <option value='regular'>Regular (${selectedEvent.prices?.regular || selectedEvent.price})</option>
                    <option value='vip'>VIP (${selectedEvent.prices?.vip || selectedEvent.price * 1.5})</option>
                    <option value='gate'>Gate (${selectedEvent.prices?.gate || selectedEvent.price * 1.2})</option>
                    <option value='earlyBird'>Early Bird (${selectedEvent.prices?.earlyBird || selectedEvent.price * 0.8})</option>
                  </select>
                </div>

                <div className='mb-4'>
                  <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='ticketCount'>
                    Number of Tickets
                  </label>
                  <select
                    id='ticketCount'
                    name='ticketCount'
                    className='w-full p-2 border rounded'
                    value={formData.ticketCount}
                    onChange={handleFormInputChange}
                  >
                    {[...Array(5)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1} {i === 0 ? 'ticket' : 'tickets'}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Coupon Code Field */}
                <div className='mb-6'>
                  <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='couponCode'>
                    Coupon Code
                  </label>
                  <div className='flex space-x-2'>
                    <input
                      type='text'
                      id='couponCode'
                      name='couponCode'
                      placeholder='Enter coupon code'
                      className='flex-1 p-2 border rounded'
                      value={formData.couponCode}
                      onChange={handleFormInputChange}
                    />
                    <button
                      type='button'
                      onClick={() => { console.log('Coupon applied'); }}
                      className='bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded'
                    >
                      Apply
                    </button>
                  </div>
                  {formData.couponApplied && (
                    <p className='text-green-600 text-sm mt-1'>Coupon applied successfully!</p>
                  )}
                  {formData.couponError && (
                    <p className='text-red-600 text-sm mt-1'>{formData.couponError}</p>
                  )}
                </div>

                <div className='flex justify-between items-center'>
                  <div>
                    <p className='font-bold'>
                      Total: $232
                    </p>
                    {formData.discountedPrice && (
                      <p className='text-sm text-green-600'>Discount applied</p>
                    )}
                  </div>
                  <button
                    type='submit'
                    className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded'
                  >
                    Complete Registration
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsListingPage;
