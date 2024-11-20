"use client";
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';

const bestsellers = [
    {
        id: 1,
        title: 'The Art of Coding',
        author: 'John Doe',
        cover: 'data:image/jpeg;base64,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',
        price: '24.99',
        description: 'Explore the world of programming through an expert lens.',
      },
      {
        id: 2,
        title: 'Design Patterns in JavaScript',
        author: 'Jane Smith',
        cover: 'https://picsum.photos/400/600?random=2',
        price: '29.99',
        description: 'A guide to mastering design patterns in JavaScript.',
      },
      {
        id: 3,
        title: 'Advanced React Techniques',
        author: 'Alice Johnson',
        cover: 'https://picsum.photos/400/600?random=3',
        price: '34.99',
        description: 'Take your React skills to the next level.',
      },
      {
        id: 4,
        title: 'CSS for Pros',
        author: 'Mark Thompson',
        cover: 'https://picsum.photos/400/600?random=4',
        price: '19.99',
        description: 'A complete CSS guide from beginner to pro.',
      },
      {
        id: 5,
        title: 'Python for Data Science',
        author: 'Emily White',
        cover: 'https://picsum.photos/400/600?random=5',
        price: '39.99',
        description: 'Python programming for data science and machine learning.',
      },
      {
        id: 6,
        title: 'Machine Learning Essentials',
        author: 'Paul Brown',
        cover: 'https://picsum.photos/400/600?random=6',
        price: '49.99',
        description: 'A guide to the fundamentals of machine learning.',
      },
      {
        id: 7,
        title: 'Mastering TypeScript',
        author: 'Laura King',
        cover: 'https://picsum.photos/400/600?random=7',
        price: '27.99',
        description: 'Enhance your JavaScript skills with TypeScript.',
      },
      {
        id: 8,
        title: 'Effective DevOps',
        author: 'Samuel Green',
        cover: 'https://picsum.photos/400/600?random=8',
        price: '42.99',
        description: 'Streamline development processes with DevOps.',
      },
];

const BestsellersPage = () => {
  return (
    <>
    <Header/>
    <div className="bg-gray-900 py-16 px-4 ">
  <h1 className="text-4xl font-bold text-center text-yellow-500 mb-12">Bestsellers</h1>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-lg mx-auto ">
    {bestsellers.map((book) => (
      <div
        key={book.id}
        className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border-2 border-transparent transform transition-all duration-300 hover:scale-105 relative group"
      >
        <div className="relative w-full h-64">
          <Image
            src={book.cover}
            alt={book.title}
            style={{ objectFit: 'cover' }}
            className="rounded-t-lg"
            width={400}
            height={600}
          />
        </div>
        {/* Overlay for book details */}
        <div className="absolute inset-0 bg-gray-900 bg-opacity-90 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-center items-center">
          <h3 className="text-2xl font-semibold mb-2">{book.title}</h3>
          <p className="text-gray-400 mb-2">by {book.author}</p>
          <p className="text-gray-500 text-sm mb-4 text-center">{book.description}</p>
          <p className="text-yellow-500 font-bold text-lg">${book.price}</p>
          <Link href={`/books/${book.title.replace(/\s+/g, '-').toLowerCase()}`}>
            <p className="text-blue-500 mt-4 inline-block hover:underline">View Details</p>
          </Link>
        </div>
      </div>
    ))}
  </div>
</div>
</>
  );
};

export default BestsellersPage;
