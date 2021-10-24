import React, { useState, useEffect } from 'react';

import axios from 'axios';

const BASE_URL = 'https://localhost:44363/api';
const BooksContext = React.createContext();

export const AppProvider = ({ children }) => {
   const [books, setBooks] = useState([]);
   const [shouldRefetch, refetch] = useState();
   const [loading, setLoading] = useState(true);

   const getItemBook = (id) => {
      let data = axios
         .get(`${BASE_URL}/GetItem_Book/${id}`)
         .then((response) => response.data)
         .catch((error) => console.log(error));
      return data;
   };

   const getListBook = () => {
      let data = axios
         .get(`${BASE_URL}/GetList_Book`)
         .then((response) => response.data)
         .catch((error) => console.log(error));

      return data;
   };

   const insertBook = (book) => {
      let data = axios
         .post(`${BASE_URL}/Insert_Book`, book)
         .then((response) => response.data)
         .catch((error) => console.log(error));
      return data;
   };

   const updateBook = async (book) => {
      let data = axios
         .post(`${BASE_URL}/Update_Book`, book)
         .then((response) => response.data)
         .catch((error) => console.log(error));
      return data;
   };

   const deleteBook = (id) => {
      let data = axios
         .post(`${BASE_URL}/Delete_Book/${id}`, id)
         .then((response) => response.data)
         .catch((error) => console.log(error));
      return data;
   };

   async function fetchData() {
      let response = await getListBook();
      setBooks(response);
      setLoading(false);
   }

   useEffect(() => {
      setLoading(true);
      console.log('context fetched');
      const timer = setTimeout(() => {
         fetchData();
      }, 1000);

      return () => clearTimeout(timer);
      // eslint-disable-next-line
   }, [shouldRefetch]);

   return (
      <BooksContext.Provider
         value={{
            books,
            loading,
            setBooks,
            getItemBook,
            getListBook,
            insertBook,
            updateBook,
            deleteBook,
            fetchData,
            refetch,
         }}
      >
         {children}
      </BooksContext.Provider>
   );
};

export default BooksContext;
