// app/categories/[category]/page.tsx
"use client";
import { useParams } from 'next/navigation';
import Link from 'next/link';

interface Book {
  title: string;
  author: string;
  price: number;
  description: string;
  cover: string;
}

const booksData: Record<string, Book[]> = {
  nonfiction: [
    {
      title: 'Sapiens',
      author: 'Yuval Noah Harari',
      price: 14.99,
      description: 'A brief history of humankind, examining our origins and evolution.',
      cover: 'https://covers.openlibrary.org/b/isbn/0062316117-L.jpg'
    },
    {
      title: 'Educated',
      author: 'Tara Westover',
      price: 13.99,
      description: 'A memoir about a young woman who leaves her survivalist family and earns a PhD.',
      cover: 'https://covers.openlibrary.org/b/isbn/0399590501-L.jpg'
    },
    {
      title: 'The Immortal Life of Henrietta Lacks',
      author: 'Rebecca Skloot',
      price: 15.99,
      description: 'The story of Henrietta Lacks and her immortal cells that changed science forever.',
      cover: 'https://covers.openlibrary.org/b/isbn/1400052181-L.jpg'
    },
    {
      title: 'Unbroken',
      author: 'Laura Hillenbrand',
      price: 11.99,
      description: 'The story of Louis Zamperini, a WWII pilot and former Olympic runner.',
      cover: 'https://covers.openlibrary.org/b/isbn/0812974492-L.jpg'
    },
    {
      title: 'The Wright Brothers',
      author: 'David McCullough',
      price: 12.99,
      description: 'A biography of the Wright brothers and their journey to invent the airplane.',
      cover: 'https://covers.openlibrary.org/b/isbn/1476728755-L.jpg'
    },
    {
      title: 'The Warmth of Other Suns',
      author: 'Isabel Wilkerson',
      price: 14.50,
      description: 'An account of the migration of African Americans to the Northern and Western U.S.',
      cover: 'https://covers.openlibrary.org/b/isbn/0679444327-L.jpg'
    }
  ],
  fiction: [
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      price: 10.99,
      description: 'A story of the mysteriously wealthy Jay Gatsby and his love for Daisy Buchanan.',
      cover: 'https://covers.openlibrary.org/b/isbn/0743273567-L.jpg'
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      price: 12.99,
      description: 'A novel of warmth and humor despite dealing with serious issues of race and injustice.',
      cover: 'https://covers.openlibrary.org/b/isbn/0061120081-L.jpg'
    },
    {
      title: '1984',
      author: 'George Orwell',
      price: 9.99,
      description: 'A dystopian novel that explores themes of totalitarianism, surveillance, and identity.',
      cover: 'https://covers.openlibrary.org/b/isbn/0451524934-L.jpg'
    },
    {
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      price: 8.99,
      description: 'A classic novel of manners that critiques the British landed gentry of the early 19th century.',
      cover: 'https://covers.openlibrary.org/b/isbn/0141439513-L.jpg'
    },
    {
      title: 'Moby Dick',
      author: 'Herman Melville',
      price: 11.99,
      description: 'The voyage of the whaling ship Pequod, commanded by Captain Ahab on his quest to capture Moby Dick.',
      cover: 'https://covers.openlibrary.org/b/isbn/0142437247-L.jpg'
    },
    {
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      price: 10.50,
      description: 'A young man named Holden Caulfield narrates the story of his teenage life in New York City.',
      cover: 'https://covers.openlibrary.org/b/isbn/0316769487-L.jpg'
    }
  ],
  science: [
    {
      title: 'A Brief History of Time',
      author: 'Stephen Hawking',
      price: 10.99,
      description: 'An exploration of the universe’s big questions by physicist Stephen Hawking.',
      cover: 'https://covers.openlibrary.org/b/isbn/0553380168-L.jpg'
    },
    {
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      price: 9.99,
      description: 'A look at evolution through the perspective of genes as the main unit of selection.',
      cover: 'https://covers.openlibrary.org/b/isbn/0192860925-L.jpg'
    },
    {
      title: 'Astrophysics for People in a Hurry',
      author: 'Neil deGrasse Tyson',
      price: 12.99,
      description: 'A quick guide to understanding the universe’s most complex concepts.',
      cover: 'https://covers.openlibrary.org/b/isbn/0393609391-L.jpg'
    },
    {
      title: 'Cosmos',
      author: 'Carl Sagan',
      price: 13.99,
      description: 'An accessible journey through the universe and humanity’s place in it.',
      cover: 'https://covers.openlibrary.org/b/isbn/0345331354-L.jpg'
    },
    {
      title: 'The Gene',
      author: 'Siddhartha Mukherjee',
      price: 11.99,
      description: 'A comprehensive history of the gene and its role in human identity.',
      cover: 'https://covers.openlibrary.org/b/isbn/147673352X-L.jpg'
    },
    {
      title: 'The Emperor of All Maladies',
      author: 'Siddhartha Mukherjee',
      price: 14.50,
      description: 'An exploration of cancer and its history through human civilization.',
      cover: 'https://covers.openlibrary.org/b/isbn/1439170916-L.jpg'
    }
  ],
  history: [
    {
      title: 'The Guns of August',
      author: 'Barbara W. Tuchman',
      price: 13.99,
      description: 'A historical account of the events leading up to World War I.',
      cover: 'https://covers.openlibrary.org/b/isbn/034538623X-L.jpg'
    },
    {
      title: 'The Rise and Fall of the Third Reich',
      author: 'William L. Shirer',
      price: 16.99,
      description: 'A detailed account of Nazi Germany and World War II.',
      cover: 'https://covers.openlibrary.org/b/isbn/1451651686-L.jpg'
    },
    {
      title: '1776',
      author: 'David McCullough',
      price: 14.99,
      description: 'The story of the American Revolution and its impact on the world.',
      cover: 'https://covers.openlibrary.org/b/isbn/0743226712-L.jpg'
    },
    {
      title: 'Team of Rivals',
      author: 'Doris Kearns Goodwin',
      price: 15.99,
      description: 'An exploration of Abraham Lincoln and his cabinet during the Civil War.',
      cover: 'https://covers.openlibrary.org/b/isbn/0743270754-L.jpg'
    },
    {
      title: 'The Silk Roads',
      author: 'Peter Frankopan',
      price: 12.99,
      description: 'A new history of the world through the lens of the Silk Roads.',
      cover: 'https://covers.openlibrary.org/b/isbn/1101912375-L.jpg'
    },
    {
      title: 'Genghis Khan and the Making of the Modern World',
      author: 'Jack Weatherford',
      price: 11.50,
      description: 'The story of Genghis Khan’s empire and its impact on the modern world.',
      cover: 'https://covers.openlibrary.org/b/isbn/0609809644-L.jpg'
    }
  ],
  biography: [
    {
      title: 'Steve Jobs',
      author: 'Walter Isaacson',
      price: 14.99,
      description: 'The life story of Apple co-founder Steve Jobs.',
      cover: 'https://covers.openlibrary.org/b/isbn/1451648537-L.jpg'
    },
    {
      title: 'Alexander Hamilton',
      author: 'Ron Chernow',
      price: 15.99,
      description: 'The biography of Alexander Hamilton, a founding father of the United States.',
      cover: 'https://covers.openlibrary.org/b/isbn/0143034758-L.jpg'
    },
    {
      title: 'Becoming',
      author: 'Michelle Obama',
      price: 12.99,
      description: 'A memoir by the former First Lady, reflecting on her life and career.',
      cover: 'https://covers.openlibrary.org/b/isbn/1524763136-L.jpg'
    },
    {
      title: 'The Diary of a Young Girl',
      author: 'Anne Frank',
      price: 8.99,
      description: 'The diary of Anne Frank, a young Jewish girl hiding during WWII.',
      cover: 'https://covers.openlibrary.org/b/isbn/0553296981-L.jpg'
    },
    {
      title: 'Einstein: His Life and Universe',
      author: 'Walter Isaacson',
      price: 13.99,
      description: 'The biography of physicist Albert Einstein and his contributions to science.',
      cover: 'https://covers.openlibrary.org/b/isbn/0743264738-L.jpg'
    },
    {
      title: 'The Wright Brothers',
      author: 'David McCullough',
      price: 10.50,
      description: 'The story of Wilbur and Orville Wright and their invention of the airplane.',
      cover: 'https://covers.openlibrary.org/b/isbn/1476728755-L.jpg'
    }
  ],
  fantasy:[{
    title: 'Harry Potter and the Sorcerer\'s Stone',
    author: 'J.K. Rowling',
    price: 9.99,
    description: 'A young boy discovers he is a wizard and attends a magical school, embarking on his first adventure.',
    cover: 'https://covers.openlibrary.org/b/isbn/059035342X-L.jpg'
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    price: 8.99,
    description: 'A hobbit named Bilbo Baggins is swept into an epic quest to reclaim the lost Dwarf Kingdom of Erebor.',
    cover: 'https://covers.openlibrary.org/b/isbn/0345339681-L.jpg'
  },
  {
    title: 'The Name of the Wind',
    author: 'Patrick Rothfuss',
    price: 12.99,
    description: 'The story of Kvothe, a gifted young man who grows up to become a legendary figure.',
    cover: 'https://covers.openlibrary.org/b/isbn/0756404746-L.jpg'
  },
  {
    title: 'A Game of Thrones',
    author: 'George R.R. Martin',
    price: 10.99,
    description: 'Noble families vie for control of the Iron Throne as winter looms and dark forces gather.',
    cover: 'https://covers.openlibrary.org/b/isbn/0553103547-L.jpg'
  },
  {
    title: 'Mistborn: The Final Empire',
    author: 'Brandon Sanderson',
    price: 11.99,
    description: 'A band of rebels tries to overthrow a dark lord in a world where ash falls from the sky and mist dominates the night.',
    cover: 'https://covers.openlibrary.org/b/isbn/076531178X-L.jpg'
  },
  {
    title: 'The Way of Kings',
    author: 'Brandon Sanderson',
    price: 13.99,
    description: 'The first book in the Stormlight Archive series, following the lives of soldiers, kings, and a scholar in a world torn by war.',
    cover: 'https://covers.openlibrary.org/b/isbn/0765326353-L.jpg'
  },
  {
    title: 'The Lies of Locke Lamora',
    author: 'Scott Lynch',
    price: 9.50,
    description: 'A fantasy novel following a gang of thieves known as the Gentleman Bastards as they plan a complex heist.',
    cover: 'https://covers.openlibrary.org/b/isbn/0553804677-L.jpg'
  },
  {
    title: 'The Blade Itself',
    author: 'Joe Abercrombie',
    price: 10.99,
    description: 'The first book in the First Law Trilogy, featuring a world of violence, dark magic, and morally ambiguous characters.',
    cover: 'https://covers.openlibrary.org/b/isbn/0575079797-L.jpg'
  },
  {
    title: 'The Fellowship of the Ring',
    author: 'J.R.R. Tolkien',
    price: 9.99,
    description: 'The first part of The Lord of the Rings, where a group of heroes set out to destroy a powerful ring.',
    cover: 'https://covers.openlibrary.org/b/isbn/0345339703-L.jpg'
  },
  {
    title: 'Good Omens',
    author: 'Neil Gaiman & Terry Pratchett',
    price: 8.99,
    description: 'An angel and a demon team up to prevent the apocalypse in this humorous fantasy tale.',
    cover: 'https://covers.openlibrary.org/b/isbn/0060853980-L.jpg'
  }]

  // More categories can go here
};

const CategoryPage = () => {
  const { category } = useParams();
  const books = booksData[category as string] || [];
 

  return (
    <section className="container mx-auto py-8 px-4">
      <h2 className="text-4xl font-serif text-center font-bold mb-6 text-gray-800 capitalize">{category}  Books</h2>

      {books.length > 0 ? (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 p-6 md:p-10 bg-gradient-to-b from-gray-50 to-gray-100">
        {books.map((book, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg hover:shadow-2xl transform transition-transform duration-300 ease-in-out hover:scale-105 p-5 flex flex-col"
          >
            <div className="relative overflow-hidden rounded-md mb-5 shadow-sm">
              <img
                src={book.cover}
                alt={book.title}
                className="w-full h-64 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 truncate hover:text-blue-600 transition-colors duration-300">
              {book.title}
            </h3>
            <p className="text-gray-600 text-sm mt-1 italic">by {book.author}</p>
            <p className="text-gray-500 text-sm mt-3 line-clamp-3">{book.description}</p>
            <p className="text-green-600 font-bold text-lg mt-4">${book.price}</p>
            <Link
              href={`/books/${book.title.replace(/\s+/g, '-').toLowerCase()}`}
              className="mt-auto pt-3 text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300"
            >
              View Details
            </Link>
          </div>
        
      
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No books found in this category.</p>
      )}
    </section>
  );
};

export default CategoryPage;
