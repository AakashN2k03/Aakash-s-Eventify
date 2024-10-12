import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      timeLeft = {
        hours: hours < 10 ? '0' + hours : hours,
        minutes: minutes < 10 ? '0' + minutes : minutes,
        seconds: seconds < 10 ? '0' + seconds : seconds
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className='countdown xs:h-80 px-7 h-auto lg: w-112 md:h-80 w-full md:w-112 mx-auto flex flex-col justify-center items-center'>
      <div className='font-text3 text-center mt-12'>
        <div className='text-xxl'>
          {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
        </div>
        <div className='booknow sm:mb-5 md:mt-12 lg:mt-13 xl:mt-12'>
          <button 
            className='xs:text-xl xl:text-lg md:text-lg sm:text-lg sm:w-20 sm:h-8 md:w-28 md:h-10 lg:w-36 lg:h-12 xl:w-40 xl:h-14'
          >
            Book Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
