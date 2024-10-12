import React, { useState } from 'react';
import emblem from '../images/square-a.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram,faFacebook,faYoutube  } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../App.css';  
import CountdownTimer from './Countdown';
import Gallery from './Gallery';
import Services from './Services';
import Billing from './Billing';
import Contact from './Reachout';
import Review from './Review';
import Footer from './Footer';



function Navbar() {
  const targetDate = new Date('2025-12-30T00:00:00');
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='bg-black'>
    <div className="home bg-cover bg-center h-screen relative">
      <div className="py-5 ml-5 flex justify-center items-center sm:justify-start sm:items-start">
  <img src={emblem} alt="Flaticon Icon" className="h-10 w-10 bg-white text-white-500" />
</div>

      <div className="bg-transparent absolute top-0 left-0 right-0 z-50 max-w-screen-md mx-auto"> {/* Set background to transparent */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="hidden sm:block">
                <div id= 'home' className="ml-10 flex items-baseline space-x-4"> 
                  <a href="#home" className="text-white px-3 py-2 rounded-md text-sm font-medium"> {/* Removed background color */}
                    Home
                  </a>
                  <a href="#service" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Service
                  </a>
                  <a href="#gallery" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Gallery
                  </a>
                 
                  <a href="#billing" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Billing
                  </a>
                  <a href="#contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Contact us
                  </a>
                  <a href="#more info" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    More info
                  </a>
                </div>
              </div>
            </div>
           
            
          </div>
        </div>
        <div className="text-center custom-webkit sm:mt-5 md:mt-5 md:text-2xl lg:mt-5 lg:text-3xl xl:text-3xl">
        Welcome to Eventify, your one-stop solution for organizing memorable events! Whether it's a corporate gathering, a wedding celebration, or a community event, we've got you covered.
          </div>
          <div className='icons flex justify-center md:justify-center lg:justify-center  sm:justify-start space-x-4 mt-4'>
        <a href='https://www.instagram.com/thanioruvan147/?igsh=Y3F1b3E4bWZleWZy' className='text-white' ><FontAwesomeIcon icon={faInstagram} className="fa-fw w-10 lg:text-xl" /></a>
        <a href='https://www.youtube.com/watch?v=k2D7hNxpoaM' className='text-white'><FontAwesomeIcon icon={faFacebook} className="w-10 lg:text-xl" /></a>
        <a href='https://www.youtube.com/watch?v=k2D7hNxpoaM' className='text-white'><FontAwesomeIcon icon={faYoutube} className="w-10 lg:text-xl" /></a>
        <a href='mailto:aakofficial007.com' className='text-white'><FontAwesomeIcon icon={faEnvelope} className="w-10 lg:text-xl" /></a>

        </div>

        <div className=" px-5 font-text1 custom-webkit1  md:mt-5 md:text-2xl lg:mt-5 lg:text-2xl xl:text-2xl">
        Exciting News! Vijay Antony's Concert is Officially Posted!
         🎵 Let the Countdown Begin! Secure Your Spot and Get Ready for an Unforgettable Experience!
        </div>
        <div className='coundown_timer font-text1   text-center mt-5 text-white'>
        <CountdownTimer targetDate={targetDate} />
        </div>
      </div>
    </div>

    <div id='service' className='services text-xxl'>
         <Services />
    </div>

    <div id='gallery' className='swiper'>
      <div className='gallery text-white text-3xl text-center mt-8' >
      <i>wanna look to our gallery?</i>
      </div >
      <Gallery />
    </div>

    <div id='billing' className='map'>
       <Billing />
    </div>

    <div id='contact' className='contact'>
      <Contact />
    </div>

    <div className='review'>
      <Review />
    </div>

   
    
    <div className='footer'>
     <Footer />
    </div>

    

    </div>
  );
}

export default Navbar;
