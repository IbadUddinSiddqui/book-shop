// Categories.js
import React from 'react';
import Link from 'next/link';

const categories = [
  { name: 'Fiction', icon: '📚' },
  { name: 'NonFiction', icon: '📖' },
  { name: 'Science', icon: '🔬' },
  { name: 'History', icon: '🏛️' },
  { name: 'Biography', icon: '👤' },
  { name: 'Fantasy', icon: '🐉' },
];

const Categories = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Popular Categories</h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.name} href={`/categories/${category.name.toLowerCase()}`}>
              <p className="relative p-8 bg-white rounded-lg shadow-md hover:shadow-lg hover:border-green-500 border-2 border-transparent transition duration-300">
                <span className="text-4xl">{category.icon}</span>
                <h3 className="text-xl font-semibold text-gray-700 mt-4">{category.name}</h3>
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
