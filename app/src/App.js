// jshint esversion: 9
import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './css/index.css';
import Header from './components/Header.js';
import Quote from './components/Quote.js';
import PhotoContainer from './components/PhotoContainer.js';
import NotFound from './components/NotFound.js';

// The App does nothing but route to the correct component depending on the URL provided

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Helmet>
        <title>Flickr Search</title>
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={ Quote }/>                   {/* home page */}
        <Route exact path="/:search" component={ PhotoContainer } />  {/* any simple search URL */}
        <Route component={ NotFound } />                              {/* any complex URL */}
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
