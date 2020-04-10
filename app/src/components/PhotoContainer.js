// jshint esversion: 9
import React, { Component } from 'react';
import PhotoList from './PhotoList.js';
import axios from 'axios';
import apiKey from '../config.js';

// PhotoContainer is the app's only stateful component

class PhotoContainer extends Component {  
  
  // the constructor sets loading to true, which will result in the initial display of a loading message
  // while we fetch the initial data

  constructor() {
    super();
    this.state = {
      photos: [],
      search: null,
      loading: true
    };
  }

  // Use axios to retrieve the data for the provided search term
  // using the Flickr photo search API. Once we have the data,
  // reset the 'loading' flag so that the new content will be rendered.

  loadData(search) {
    const path = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`;
    return (
      axios.get(path)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo,
          search: search,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);   
      })
    );

  } 
  
  // this will be called the first time through. just load the data

  componentDidMount() {
    const search = this.props.match.params.search;
    this.loadData(search);
  }

  // this will be called the second and subsequent times through.
  // if the search term has changed, set the state to 'loading' and
  // fetch the new data. The loading message will be displayed until
  // the data is loaded.

  componentDidUpdate(prevProps) {
    const search = this.props.match.params.search;
    if (search !== prevProps.match.params.search) {
      this.setState({loading: true});
      this.loadData(search);
    }
  }

  // render either a loading message or the content

  render() {    
    return (
      <React.Fragment>
        {
          (this.state.loading)
            ? <p>Loading...</p>
            : <PhotoList data={this.state.photos} search={this.state.search} />
        }          
      </React.Fragment>          
    );
  };
}

export default PhotoContainer;