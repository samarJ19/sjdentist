import React, { useState } from 'react';
import Hero from './Hero';
import Services from './Services';
import Technology from './Technology';
import Testimonials from './Testimonial';
import Feedback from './Feedback';
import BookingModal from './BookingModal';

const Home = () => {
  // State to control modal visibility
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  
  // NEW: State to hold the data coming from Hero
  const [bookingData, setBookingData] = useState({ name: '', phone: '' });

  // Handler for opening the modal with data
  const handleOpenBooking = (data) => {
    // If data exists (came from Hero), set it. Otherwise default to empty.
    if (data) {
      setBookingData(data);
    } else {
      setBookingData({ name: '', phone: '' });
    }
    setIsBookingOpen(true);
  };

  return (
    <>
      {/* 1. Pass the handler to Hero */}
      <Hero onBookClick={handleOpenBooking} />
      
      <Services />
      <Technology />
      <Testimonials />
      <Feedback />
      
      {/* 2. Pass the stored data down to the Modal */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        preFilledData={bookingData} // <--- The new prop
      />
    </>
  );
};

export default Home;