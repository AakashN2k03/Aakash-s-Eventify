import React from 'react';
import { useNavigate } from 'react-router-dom';
import gallery from '../images/gallery1.jpeg';
import '../App.css';

const Gallery = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/imgslider');
  };

  return (
    <div className="flex flex-col items-center justify-center md:flex-row">
      {/* Adjusting image size for xs and md screens */}
      <img
        src={gallery}
        alt="Gallery"
        className="h-64 md:h-80 w-64 md:w-96 mt-5 md:ml-5"
      />
      <p className="text-white xs:text-xl font-cursive mt-5 text-3xl md:mr-5 md:px-5 text-center md:text-left">
        Explore our stunning collection in the gallery<br />
        and discover the magic of our past events!
        <br />
        <button
          onClick={handleClick}
          className="click_btn text-white mt-10 text-green px-4 py-2 rounded-md shadow-md hover:shadow-lg transition duration-300"
        >
          Click Me!
        </button>
      </p>
    </div>
  );
};

export default Gallery;
