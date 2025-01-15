"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Data } from "@/app/data/books";


const booksData   = Data 

const BookPage = () => {
  const { category, book } = useParams(); // Fetch category and book slug from URL
  const books = booksData[category as string]; // Fetch books for the given category

  // Match book using slugified title
  const selectedBook = books?.find(
    (b) => b.title.toLowerCase().replace(/\s+/g, "-") === book
  );

  if (!selectedBook) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-700">
        <h1 className="text-2xl font-bold mb-4">Book not found</h1>
        <Link
          href={`/categories/${category}`}
          className="text-blue-500 hover:underline"
        >
          Back to {category} category
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen mt-12 bg-gray-100 py-8 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Book Cover */}
          <div className="bg-gray-200 p-6">
            <img
              src={selectedBook.cover}
              alt={selectedBook.title}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Book Details */}
          <div className="p-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {selectedBook.title}
            </h1>
            <p className="text-lg text-gray-600 mb-2">
              <strong>Author:</strong> {selectedBook.author}
            </p>
            <p className="text-xl text-green-600 font-semibold mb-4">
              ${selectedBook.price.toFixed(2)}
            </p>
            <p className="text-gray-700 mb-6">{selectedBook.description}</p>

            {/* Buttons */}
            <div className="flex gap-4">
              <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 transition duration-200 shadow-lg">
                Add to Cart
              </button>
              <button className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 focus:ring-4 focus:ring-green-300 transition duration-200 shadow-lg">
                Buy Now
              </button>
            </div>

            <Link
              href={`/categories/${category}`}
              className="inline-block mt-6 text-blue-500 hover:underline"
            >
              Back to {category} category
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
