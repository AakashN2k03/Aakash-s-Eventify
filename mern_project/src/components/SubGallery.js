import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Fetch images from your backend
    fetch("http://localhost:3000/gallery")
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  const openLightbox = (index) => {
    setSelectedImage(images[index].imageUrl);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const showNextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex].imageUrl);
    setCurrentIndex(nextIndex);
  };

  const showPrevImage = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex].imageUrl);
    setCurrentIndex(prevIndex);
  };

  return (
    <div className="bg-black pt-5">
      <div className="text-center mt-5 text-3xl text-white">
        OUR COLLECTIONS
      </div>

      <div className="container mt-5 mx-auto p-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className={`relative overflow-hidden cursor-pointer ${
                index % 5 === 0 ? "col-span-2 row-span-2" : ""
              }`}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={image.imageUrl}
                alt={image.name}
                className="object-cover w-full h-full"
                onClick={() => openLightbox(index)}
              />
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div className="relative">
                <button
                  className="absolute top-0 right-0 m-4 text-white text-2xl font-bold"
                  onClick={closeLightbox}
                >
                  &times;
                </button>
                <motion.img
                  key={selectedImage}
                  src={selectedImage}
                  alt="Selected"
                  className="max-w-full max-h-full"
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
                <button
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 text-white text-2xl"
                  onClick={showPrevImage}
                >
                  &larr;
                </button>
                <button
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 text-white text-2xl"
                  onClick={showNextImage}
                >
                  &rarr;
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Gallery;
