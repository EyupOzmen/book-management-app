import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const BookForm = (props) => {
   console.log('form', props.book);
   const [book, setBook] = useState(() => {
      return {
         id: props.book ? props.book.id : '',
         bookname: props.book ? props.book.bookname : '',
         author: props.book ? props.book.author : '',
         quantity: props.book ? props.book.quantity : '',
         price: props.book ? props.book.price : '',
         createDate: props.book ? props.book.createDate : '',
         updateDate: props.book ? props.book.updateDate : '',
      };
   });

   const [errorMsg, setErrorMsg] = useState('');
   let { bookname, author, price, quantity } = book;

   const handleOnSubmit = (event) => {
      event.preventDefault();
      let values = [bookname, author, price, quantity];
      let errorMsg = '';

      const allFieldsFilled = values.every((field) => {
         const value = `${field}`.trim();
         return value !== '' && value !== '0';
      });

      if (allFieldsFilled) {
         quantity = parseInt(quantity);
         price = parseFloat(price);
         let book = {
            bookname,
            author,
            quantity,
            price,
         };
         props.handleOnSubmit(book);
      } else {
         errorMsg = 'Please fill out all the fields.';
      }
      setErrorMsg(errorMsg);
   };

   const handleInputChange = (event) => {
      const { name, value } = event.target;
      switch (name) {
         case 'quantity':
            if (value === '' || parseInt(value) === +value) {
               setBook((prevState) => ({
                  ...prevState,
                  [name]: value,
               }));
            }
            break;
         case 'price':
            if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
               setBook((prevState) => ({
                  ...prevState,
                  [name]: value,
               }));
            }
            break;
         default:
            setBook((prevState) => ({
               ...prevState,
               [name]: value,
            }));
      }
   };

   return (
      <div className="main-form">
         {errorMsg && <p className="errorMsg">{errorMsg}</p>}
         <Form onSubmit={handleOnSubmit}>
            <Form.Group controlId="name">
               <Form.Label>Book Name</Form.Label>
               <Form.Control
                  className="input-control"
                  type="text"
                  name="bookname"
                  value={bookname}
                  placeholder="Enter name of book"
                  onChange={handleInputChange}
               />
            </Form.Group>
            <Form.Group controlId="author">
               <Form.Label>Book Author</Form.Label>
               <Form.Control
                  className="input-control"
                  type="text"
                  name="author"
                  value={author}
                  placeholder="Enter name of author"
                  onChange={handleInputChange}
               />
            </Form.Group>
            <Form.Group controlId="quantity">
               <Form.Label>Quantity</Form.Label>
               <Form.Control
                  className="input-control"
                  type="number"
                  name="quantity"
                  value={quantity}
                  placeholder="Enter available quantity"
                  onChange={handleInputChange}
               />
            </Form.Group>
            <Form.Group controlId="price">
               <Form.Label>Book Price</Form.Label>
               <Form.Control
                  className="input-control"
                  type="text"
                  name="price"
                  value={price}
                  placeholder="Enter price of book"
                  onChange={handleInputChange}
               />
            </Form.Group>
            <Button
               onClick={props.refetch}
               variant="primary"
               type="submit"
               className="submit-btn"
            >
               Submit
            </Button>
         </Form>
      </div>
   );
};

export default BookForm;
