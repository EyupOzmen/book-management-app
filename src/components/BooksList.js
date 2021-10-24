import React, { useContext } from 'react';
import _ from 'lodash';
import Book from './Book';
import BooksContext from '../context/BooksContext';

const BooksList = () => {
   const { books, setBooks, deleteBook, loading } = useContext(BooksContext);

   const handleRemoveBook = (id) => {
      setBooks(books.filter((book) => book.id !== id));
      deleteBook(id);
   };

   return (
      <>
         <div className="book-list">
            {loading ? (
               <div>Loading...</div>
            ) : !_.isEmpty(books) ? (
               books.map((book) => (
                  <Book
                     key={book.id}
                     {...book}
                     handleRemoveBook={handleRemoveBook}
                  />
               ))
            ) : (
               <p className="message">
                  No books available. Please add some books.
               </p>
            )}
         </div>
      </>
   );
};

export default BooksList;
