// jshint esversion: 9
import React from 'react';
import Photo from './Photo.js';
import NoResults from './NoResults.js';

// this component takes the search results and returns either a list of photos or 
// a friendly error message

const PhotoList = props => {
  const results = props.data;
  let photos; // the photo list items or the friendly error message

  if (results.length) { // success, map the data into image elements
    photos = results.map(photo => 
      <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
              alt={`${photo.title}`}
              key={photo.id} />);
  } else { // display a friendly 'no search results' message
    photos = <NoResults />
  }

  return(
    <div className="photo-container">
      <h2>Results for '{props.search}'</h2>
      <ul>
        {photos}
      </ul>
    </div>        
)
}

export default PhotoList;