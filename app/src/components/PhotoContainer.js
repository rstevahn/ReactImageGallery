// jshint esversion: 9
import React, { Component } from 'react';
import PhotoList from './PhotoList.js';
import axios from 'axios';

class PhotoContainer extends Component {    
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true
    };
  } 
  componentDidMount() {
    const path = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=fff6b8d3e92fae46c6f96afa918492e5&tags=${this.props.match.params.search}&per_page=24&format=json&nojsoncallback=1`;
    axios.get(path)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo,
          loading: false
        })
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);   
      })
  }
  render() {    
    return (
      <div className="photo-container">
          {
            (this.state.loading)
             ? <p>Loading...</p>
             : <PhotoList data={this.state.photos.photo} />
          }          
      </div>
    );
  };
}

export default PhotoContainer;