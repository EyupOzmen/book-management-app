import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter';
import { AppProvider } from './context/BooksContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

ReactDOM.render(
   <AppProvider>
      <AppRouter />
   </AppProvider>,
   document.getElementById('root')
);
