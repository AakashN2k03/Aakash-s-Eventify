import React from 'react';
import { FaEnvelope, FaPhoneAlt, } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className=" mt-5 bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0">
          <h4 className="text-xl font-bold mb-2 text-purple-500">Other Branches</h4>
          <p>Kolathur</p>
          <p>AnnaNagar</p>
          <p>Mogappair</p>
          <p>Broadway</p>
        </div>
        <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0">
          <h4 className="text-xl font-bold mb-2 text-purple-500">Services</h4>
          <p>About us</p>
          <p>Free transportation</p>
          <p>Customer Service</p>
          <p>More Services</p>
        </div>
        <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0">
          <h4 className="text-xl font-bold mb-2 text-purple-500">Upcoming Events</h4>
          <p>Yuvan Concert</p>
          <p>VJ Antony Concert</p>
          <p>Ipl SeatMaster</p>
          <p>Bachelor Party</p>
        </div>
        <div className="w-full md:w-1/4 px-4">
        <h4 className="text-xl font-bold mb-2 text-purple-500">More queries</h4>
         
          <div className="flex items-center mb-2">
            <FaEnvelope className="mr-2" />eventify@gmail.com
          </div>
            
          <div className="flex items-center mb-2">
            <FaPhoneAlt className="mr-2" />+91 9884343409
          </div>
          <div className="flex items-center">
            <FaPhoneAlt className="mr-2" />+91 7010814509
          </div>
        </div>
      </div>
      <div>
        <h1 className='text-center mt-4 text-lg'>Copyright © 2024 Eventify. All rights reserved.
            </h1>
            <h1 className='text-center mt-1 text-lg'>The content of this website is protected by copyright laws.
            </h1>
      </div>
    </div>
  )
}

export default Footer;
