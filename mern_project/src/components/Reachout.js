import React from 'react';
import { faAddressCard, faMapMarkerAlt, faHome, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Mail from './Mail';

const Contact = () => {
  return (
    <div>
      <div className="text-3xl text-white text-center mt-5">Reach Out Us!</div>
    <div className="flex flex-col lg:flex-row justify-center items-center">
      <div className="lg:w-1/2 lg:mr-6">
        
        <p className='xs:text-lg xs:py-2 sm:text-center sm:text-2xl lg:text-left text-white text-2xl text-left 
        lg:mt-5 lg:text-xl lg:p-2'>
          <FontAwesomeIcon icon={faHome} className='px-2' />Aakash's Eventify</p>
        <p className='xs:text-lg xs:py-2 sm:text-center sm:text-2xl lg:text-left text-white text-2xl text-left 
        lg:text-xl lg:p-2'>
          <FontAwesomeIcon icon={faMapMarkerAlt} className='px-2' />Velammal Engineering College, Chennai-66</p>
        <p className='xs:text-lg xs:py-2 sm:text-center sm:text-2xl lg:text-left text-white text-2xl text-left 
        lg:text-xl lg:p-2'>
          <FontAwesomeIcon icon={faAddressCard} className='px-2' />
          Contact: +91 9884345409</p>
        <p className='xs:text-lg xs:py-2 sm:text-center sm:text-2xl lg:text-left text-white text-2xl text-left 
        lg:text-xl lg:p-2'>
          <FontAwesomeIcon icon={faEnvelope} className='px-2' />aakashevify@gmail.com</p>
      </div>
      <div className="lg:w-1/2 lg:p-4">
        <iframe
          className="w-full md:w-96 xl:w-full h-48 lg:h-80"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.1843359258173!2d80.18898687484466!3d13.150769687181315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5264a10c856599%3A0xac3348f41097ba7f!2sVelammal%20Engineering%20College!5e0!3m2!1sen!2sin!4v1714680161435!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
        ></iframe>
        
      </div>
    </div>

    <div className='mail'>
      <Mail />
    </div>
    </div>
  );
};

export default Contact;