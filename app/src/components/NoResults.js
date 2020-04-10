// jshint esversion: 9
import React from 'react';

// return a simple friendly message when the search yields no results

const NoResults = () => (
  <li className="not-found">
    <h3>No Results Found</h3>
    <p>Your search did not generate any results. Please try again.</p>
  </li>
);

export default NoResults;