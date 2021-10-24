import React, { useContext } from 'react';
import BookForm from './BookForm';
import { useParams } from 'react-router-dom';
import BooksContext from '../context/BooksContext';

const EditBook = ({ history }) => {
   const { books, setBooks, updateBook, refetch } = useContext(BooksContext);
   const { id } = useParams();
   const bookToEdit = books.find((book) => book.id === parseInt(id));

   const handleOnSubmit = (book) => {
      const filteredBooks = books.filter((book) => book.id !== parseInt(id));
      let ID = parseInt(id);
      let bookUpdated = { id: ID, ...book };
      setBooks([bookUpdated, ...filteredBooks]);

      updateBook(bookUpdated);
      history.push('/');
   };

   return (
      <div>
         <BookForm
            refetch={() => refetch({})}
            book={bookToEdit}
            handleOnSubmit={handleOnSubmit}
         />
      </div>
   );
};

export default EditBook;
