import { categories } from '../data/categories'
import Link from 'next/link';
import Image from 'next/image';

const CategoriesPage = () => {
  return (
    <div className="p-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-10">Explore Book Categories</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <div key={category.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-5 flex flex-col items-center">
            <Image
              src={category.image}
              alt={category.name}
              width={500}
              height={300}
              className="rounded-md mb-4 object-cover"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{category.name}</h2>
            <p className="text-gray-600 text-center">{category.description}</p>
            <Link href={category.link}>
              <p className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200">
                View {category.name} Books
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
