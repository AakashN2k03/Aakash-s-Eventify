import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";
import Subgallery from "./SubGallery";
import '../App.css';
import "swiper/swiper-bundle.min.css";

// Initialize Swiper core components
SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

const SwiperCoverflow = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('https://aakash-s-eventify-backend.onrender.com/images');
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="Imgslider bg-black pt-2">
      <div className="text-center text-white text-4xl">
        Recent works
      </div>
      <Swiper
        navigation
        pagination={{ clickable: true }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false
        }}
        slidesPerView={2}
        centeredSlides
        className="relative"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <img
              src={image.imageUrl}
              alt={image.name}
              className="object-cover h-64 w-full rounded-lg md:h-96"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="subgallery">
        <Subgallery />
      </div>
    </div>
  );
};

export default SwiperCoverflow;
