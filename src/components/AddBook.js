import React, { useContext } from 'react';
import BookForm from './BookForm';
import BooksContext from '../context/BooksContext';

const AddBook = ({ history }) => {
   const { books, setBooks, insertBook, refetch } = useContext(BooksContext);

   const handleOnSubmit = (book) => {
      console.log(book);
      insertBook(book);
      setBooks([book, ...books]);

      history.push('/');
   };

   return (
      <>
         <BookForm
            refetch={() => refetch({})}
            handleOnSubmit={handleOnSubmit}
         />
      </>
   );
};

export default AddBook;
