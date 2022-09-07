import React from 'react';
import './App.css';
import axios from 'axios';

function App() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

const addPhotos = (evt) => {
  evt.preventDefault();
  axios ({
    method: 'POST',
    urll: '/gallery',
    data: {
      path: photoPath,
      description: photoDescription,
      likes: photoLikes
    }
  }).then(response => {
    console.log('in GET response');
  }).catch(error => {
    console.log(error);
    alert('Somthing wend wrong.');
  });
} // addPhotos
export default App;
