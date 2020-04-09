// jshint esversion: 9
import React from 'react';
import Photo from './Photo.js';
import NotFound from './NotFound.js';

const PhotoList = props => {
  console.log("PhotoList props: " + props);
  debugger;
  const results = props.data;
  const {farm, server, id, secret, title} = results;
  let photos;
  if (results.length) { // success
    photos = results.map(photo => <Photo url={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`}
                                          alt={`${title}`}
                                          key={id} />);
  } else {
    photos = <NotFound />
  }

  return(
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        {photos}
      </ul>
    </div>        
)
}
// http://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg

export default PhotoList;