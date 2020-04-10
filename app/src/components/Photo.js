// jshint esversion: 9
import React from 'react';

// return a list element containing an image element using the provided URL and alt text

const Photo = (props) => (
  <li>
    <img src={props.url} alt={props.alt}/>
  </li>
);

export default Photo;