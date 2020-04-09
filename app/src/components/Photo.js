// jshint esversion: 9
import React from 'react';

const Photo = (props) => (
  <li>
    <img src={props.url} key={props.key} alt={props.alt}/>
  </li>
);

export default Photo;