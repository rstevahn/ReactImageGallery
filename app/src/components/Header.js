// jshint esversion: 9
import React from 'react';
import Search from './Search.js';
import Nav from './Nav.js';

const Header = () => (
  <header>
    <h1>Robert's Flickr Image Search</h1>            
    <Search />
    <Nav />
  </header>
);

export default Header;