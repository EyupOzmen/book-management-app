import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import AddBook from '../components/AddBook';
import EditBook from '../components/EditBook';
import BooksList from '../components/BooksList';

const AppRouter = () => {
   return (
      <BrowserRouter>
         <div>
            <Header />
            <div className="main-content">
               <Switch>
                  <Route component={BooksList} path="/" exact={true} />
                  <Route component={AddBook} path="/add" />
                  <Route component={EditBook} path="/edit/:id" />
                  <Route component={() => <Redirect to="/" />} />
               </Switch>
            </div>
         </div>
      </BrowserRouter>
   );
};

export default AppRouter;
