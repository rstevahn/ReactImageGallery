// jshint esversion: 9
import React from 'react';
import { NavLink } from 'react-router-dom';

// the Nav links simply reroute to a simple search URL

const Nav = () => (
    <nav className="main-nav">
        <ul>
          <li><NavLink to="/butterflies">Butterflies</NavLink></li>
          <li><NavLink to="/zebras">Zebras</NavLink></li>
          <li><NavLink to="/moonbeams">Moonbeams</NavLink></li>
          <li><NavLink to="/fairytales">Fairy Tales</NavLink></li>
        </ul>
    </nav>
  );

export default Nav;