import axios from 'axios';

const BASE_URL = 'https://localhost:44363/api';

export const getItemBook = (id) => {
   let data = axios
      .get(`${BASE_URL}/GetItem_Book/${id}`)
      .then((response) => response.data)
      .catch((error) => console.log(error));
   return data;
};

export const getListBook = () => {
   let data = axios
      .get(`${BASE_URL}/GetList_Book`)
      .then((response) => response.data)
      .catch((error) => console.log(error));

   return data;
};

export const insertBook = (book) => {
   console.log('Inside');
   console.log(book);
   let data = axios
      .post(`${BASE_URL}/Insert_Book`, book)
      .then((response) => response.data)
      .catch((error) => console.log(error));
   return data;
};

export const updateBook = (book) => {
   axios
      .post(`${BASE_URL}/Update_Book`, book)
      .then((response) => response.data)
      .catch((error) => console.log(error));
};

export const deleteBook = (id) => {
   axios
      .post(`${BASE_URL}/Delete_Book/${id}`, id)
      .then((response) => response.data)
      .catch((error) => console.log(error));
};
