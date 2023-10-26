import React, { useState, useEffect} from 'react';
import BookCard from './BookCard';

interface Book {
  id: number;
  title: string;
  author: string;
  category: string;
  price: number;
  quantity: number;
  sub_category: string;
  description: string;
  image: string;
}

const BookList = () => {
  const [books, setBooks] = useState<Book[]>([]);
  // Create an array to represent the number of books
  const numBooks = 30;

  useEffect(() => {
    fetch('http://localhost:8080/api/allBooks')
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
      <div className="m-3 flex flex-wrap mx-auto justify-center">
      {books.map(book => (
          <div key={book.id} className="max-w-sm min-w-[280px] mx-1 my-3">
            <BookCard 
              title={book.title} 
              price={book.price} 
              imageUrl={book.image} 
              author={book.author}
              description={book.description}
              />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
