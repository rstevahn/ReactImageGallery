// jshint esversion: 9
import React from 'react';
import Search from './Search.js';
import Nav from './Nav.js';

// The Header is static and contains the search form and the navigation links

const Header = () => (
  <header>
    <h1>Robert's Flickr Image Search</h1>            
    <Search />
    <Nav />
  </header>
);

export default Header;