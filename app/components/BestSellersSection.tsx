"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const books = [
  {
    id: 1,
    title: "The Art of Coding",
    author: "John Doe",
    cover: "https://picsum.photos/400/600?random=1",
    price: "24.99",
  },
  {
    id: 2,
    title: "Design Patterns in JavaScript",
    author: "Jane Smith",
    cover: "https://picsum.photos/400/600?random=2",
    price: "29.99",
  },
  {
    id: 3,
    title: "Advanced React Techniques",
    author: "Alice Johnson",
    cover: "https://picsum.photos/400/600?random=3",
    price: "34.99",
  },
  {
    id: 4,
    title: "CSS for Pros",
    author: "Mark Thompson",
    cover: "https://picsum.photos/400/600?random=4",
    price: "19.99",
  },
  {
    id: 5,
    title: "Python for Data Science",
    author: "Emily White",
    cover: "https://picsum.photos/400/600?random=5",
    price: "39.99",
  },
];

const BestSellersSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle Previous Slide
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? books.length - 1 : prevIndex - 1
    );
  };

  // Handle Next Slide
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === books.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === books.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // 2 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  // Get previous, current, and next indices
  const prevIndex = (currentIndex - 1 + books.length) % books.length;
  const nextIndex = (currentIndex + 1) % books.length;

  return (
    <div className="bg-gray-900 py-12">
      <h2 className="text-3xl font-bold text-center text-yellow-500 mb-8">
        Book BestSellers Section
      </h2>
      <div className="relative max-w-5xl mx-auto flex items-center justify-center">
        {/* Previous Slide */}
        <div className="relative w-60 h-80 mx-4 opacity-50 scale-90 transition-transform duration-300">
          <Image
            src={books[prevIndex].cover}
            alt={books[prevIndex].title}
            width={400}
            height={600}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>

        {/* Current Slide */}
        <div className="relative w-72 h-96 mx-4 group overflow-hidden rounded-lg shadow-lg">
          <Image
            src={books[currentIndex].cover}
            alt={books[currentIndex].title}
            width={400}
            height={600}
            className="rounded-lg object-cover w-full h-full"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-70 text-white flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-lg font-bold mb-2">{books[currentIndex].title}</h3>
            <p className="text-sm mb-2">by {books[currentIndex].author}</p>
            <p className="text-yellow-500 font-bold text-lg">
              ${books[currentIndex].price}
            </p>
          </div>
        </div>

        {/* Next Slide */}
        <div className="relative w-60 h-80 mx-4 opacity-50 scale-90 transition-transform duration-300">
          <Image
            src={books[nextIndex].cover}
            alt={books[nextIndex].title}
            width={400}
            height={600}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-yellow-500 text-white p-2 rounded-full hover:bg-yellow-600 transition"
          aria-label="Previous"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-yellow-500 text-white p-2 rounded-full hover:bg-yellow-600 transition"
          aria-label="Next"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default BestSellersSection;
