"use client";
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';

const bestsellers = [
  {
    id:1,
    title: 'The Guns of August',
    author: 'Barbara W. Tuchman',
    cover: 'https://covers.openlibrary.org/b/isbn/034538623X-L.jpg',
    price: `30.00`,
    description: 'A historical account of the events leading up to World War I.',
    category:`history`,
  },
  {
    id:2,
    title: 'Genghis Khan and the Making of the Modern World',
    author: 'Jack Weatherford',
    cover: 'https://covers.openlibrary.org/b/isbn/0609809644-L.jpg',
    price: "11.50",
    description: 'The story of Genghis Khan’s empire and its impact on the modern world.',
    category:`history`,
  },
  {
    id:3,
    title: 'Einstein His Life and Universe',
    author: 'Walter Isaacson',
    price: "13.99",
    description: 'The biography of physicist Albert Einstein and his contributions to science.',
    cover: 'https://covers.openlibrary.org/b/isbn/0743264738-L.jpg',
    category:`biography`,
  },
  {
    id:4,
    title: 'A Game of Thrones',
    author: 'George R.R. Martin',
    price: "10.99",
    description: 'Noble families vie for control of the Iron Throne as winter looms and dark forces gather.',
    cover: 'https://covers.openlibrary.org/b/isbn/0553103547-L.jpg',
    category:`fantasy`,
  },
  {
    id:5,
    title: 'Good Omens',
    author: 'Neil Gaiman & Terry Pratchett',
    price:" 8.99",
    description: 'An angel and a demon team up to prevent the apocalypse in this humorous fantasy tale.',
    cover: 'https://covers.openlibrary.org/b/isbn/0060853980-L.jpg',
    category:`history`,
  },
  {
    id:6,
    title: 'The Fellowship of the Ring',
    author: 'J.R.R. Tolkien',
    price: "9.99",
    description: 'The first part of The Lord of the Rings, where a group of heroes set out to destroy a powerful ring.',
    cover: 'https://covers.openlibrary.org/b/isbn/0345339703-L.jpg'
  },
  {
    id:7,
    title: 'Steve Jobs',
    author: 'Walter Isaacson',
    price: "14.99",
    description: 'The life story of Apple co-founder Steve Jobs.',
    cover: 'https://covers.openlibrary.org/b/isbn/1451648537-L.jpg',
    category:"biography"
  },
  {
    id:8,
    title: 'Harry Potter and the Sorcerer\'s Stone',
    author: 'J.K. Rowling',
    price: "9.99",
    description: 'A young boy discovers he is a wizard and attends a magical school, embarking on his first adventure.',
    cover: 'https://covers.openlibrary.org/b/isbn/059035342X-L.jpg',
    category:"fantasy"
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
        <div className="relative w-full h-full">
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
          <Link href={`/categories/${book.category}/${book.title.replace(/\s+/g, '-').toLowerCase()}`}>
            <p className="text-blue-500 mt-4 inline-block hover:underline">Buy Here</p>
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
