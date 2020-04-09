// jshint esversion: 9
import React from 'react';
import Photo from './Photo.js';
import NoResults from './NoResults.js';

const PhotoList = props => {
  const results = props.data;
  let photos;
  if (results.length) { // success
    photos = results.map(photo => 
      <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
              alt={`${photo.title}`}
              key={photo.id} />);
  } else {
    photos = <NoResults />
  }

  return(
    <div className="photo-container">
      <h2>Results for {props.search}</h2>
      <ul>
        {photos}
      </ul>
    </div>        
)
}
// http://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg

export default PhotoList;