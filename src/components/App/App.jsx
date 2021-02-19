import React from 'react';
import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';


// const fetchGallery = ();



function App() {
  const [galleryList, setGalleryList] = useState([]);

  axios({
    method: 'GET',
    url: '/gallery'
  })
  .then(response => {
    console.log(response.data, "res data")
    setGalleryList(response.data);
    console.log(galleryList);
  })
  .catch(err => {
    console.log("err", err)
  })

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <span>
        <img src="images/goat_small.jpg"/>
        <img src="images/reef_fish.jpg"/>
        <img src="images/bear.jpeg"/>
        </span>
      </div>
    );
}

export default App;
