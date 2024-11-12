"use client";
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';

const bestsellers = [
    {
        id: 1,
        title: 'The Art of Coding',
        author: 'John Doe',
        cover: 'https://picsum.photos/400/600?random=1',
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
    <div className="bg-gray-900 py-16 px-4">
      <h1 className="text-4xl font-bold text-center text-yellow-500 mb-12">Bestsellers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-lg mx-auto">
        {bestsellers.map((book) => (
          <div
            key={book.id}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border-2 border-transparent hover:border-yellow-500 transform transition-all duration-300 hover:scale-105 relative group"
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
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-white">{book.title}</h3>
              <p className="text-gray-400 mb-2">by {book.author}</p>
              <p className="text-gray-500 text-sm mb-4">{book.description}</p>
              <p className="text-yellow-500 font-bold text-lg">${book.price}</p>
              <Link href={`/books/${book.title.replace(/\s+/g, '-').toLowerCase()}`}>
                <p className="text-blue-500 mt-4 inline-block hover:underline">View Details</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div></>
  );
};

export default BestsellersPage;