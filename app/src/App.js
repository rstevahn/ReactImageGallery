// jshint esversion: 9
import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import './css/index.css';
import Header from './components/Header.js';
import Quote from './components/Quote.js';
import PhotoContainer from './components/PhotoContainer.js';
import NotFound from './components/NotFound.js';

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={ Quote }/>
        <Route exact path="/:search" component={ PhotoContainer } />
        <Route component={ NotFound } />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
