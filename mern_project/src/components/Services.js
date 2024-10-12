import React from 'react';
import { Box } from '@mui/material';
import '../App.css'; 

const ThreeBoxes = () => {
  return (
    <div>
      <div className='font-text1 text-white xs:text-xl xl:text-4xl text-center mt-5'><b>Service Spectrum</b></div>
      <div className="flex justify-center mt-3">
        <Box className='mt-4 mx-1 box1' component="section" sx={{ p: 2, border: '1px solid grey', width: '300px', height: '200px', '@media (max-width: 640px)': { width: '100px', height: '150px' }, '@media (max-width: 375px)': { width: '80px', height: '100px' } }}>
        <p className="custom-webkit2 xs:text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-3xl xs:mt-0 xs:ml-0 text-center mt-10  font-bold text-purple-700">
            Create Your Dream Wedding Today!</p>
        </Box>
        <Box className='mt-4 mx-1 box2' component="section" sx={{ p: 2, border: '1px solid grey', width: '300px', height: '200px', '@media (max-width: 640px)': { width: '100px', height: '150px' }, '@media (max-width: 375px)': { width: '80px', height: '100px' } }}>
        <p className=" custom-webkit2 xs:text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-3xl xs:mt-0 xs:ml-0 text-center mt-10 text-lg font-bold text-purple-700">
            Cheers to Another Year of Memories</p>
        </Box>
        <Box className='mt-4 mx-1 box3' component="section" sx={{ p: 2, border: '1px solid grey', width: '300px', height: '200px', '@media (max-width: 640px)': { width: '100px', height: '150px' }, '@media (max-width: 375px)': { width: '80px', height: '100px' } }}>
        <p className=" custom-webkit2 xs:text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-3xl xs:mt-0 xs:ml-0  text-center mt-10 text-lg font-bold text-purple-700">
            Welcome New Arrival with Joy</p>
        </Box>
      </div>

      {/* Second row */}
      <div className="flex justify-center">
        <Box className='mt-4 mx-1 box4' component="section" sx={{ p: 2, border: '1px solid grey', width: '300px', height: '200px', '@media (max-width: 640px)': { width: '100px', height: '150px' }, '@media (max-width: 375px)': { width: '80px', height: '100px' } }}>
        <p className=" custom-webkit2 xs:text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-3xl xs:mt-0 xs:ml-0 text-center  mt-10 text-lg font-bold text-purple-700">Celebrate Love with Joyous Gatherings</p>
        </Box>
        <Box className='mt-4 mx-1 box5' component="section" sx={{ p: 2, border: '1px solid grey', width: '300px', height: '200px', '@media (max-width: 640px)': { width: '100px', height: '150px' }, '@media (max-width: 375px)': { width: '80px', height: '100px' } }}>
        <p className=" custom-webkit2 xs:text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-3xl xs:mt-0 xs:ml-0 text-center mt-10 text-lg font-bold text-purple-700">
          Live Music,live Moments!</p>
        </Box>
        <Box className='mt-4 mx-1 box6' component="section" sx={{ p: 2, border: '1px solid grey', width: '300px', height: '200px', '@media (max-width: 640px)': { width: '100px', height: '150px' }, '@media (max-width: 375px)': { width: '80px', height: '100px' } }}>
        <p className=" custom-webkit2 xs:text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-3xl xs:mt-0 xs:ml-0 text-center mt-10 text-lg font-bold text-purple-700">Honoring a Life, Sharing Comfort</p>
        </Box>
      </div>
    </div>
  );
};

export default ThreeBoxes;
