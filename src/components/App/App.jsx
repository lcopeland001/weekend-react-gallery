import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';


function App() {
  let [galleryArray, setGalleryArray] = useState([]);

  useEffect(() => {
    console.log('useEffect - page load');
    fetchPhotos();
  }, []);

  const fetchPhotos = () => {
    axios({
      method: 'GET',
      url: '/gallery',
    }).then(response => {
      setGalleryArray(response.data);
    }).catch(error => {
      console.log(error);
      alert('Something went wrong!');
    });
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
          <GalleryList galleryArray={galleryArray}/>
      </div>
    );
}

export default App;

