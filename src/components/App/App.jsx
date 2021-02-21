import React from 'react';
import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import GalleryList from '../GalleryList/GalleryList';
// import galleryItems from '../modules/gallery.data.js';

function App() {
  const [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
    fetchGuests(); //function that axios get is within
  }, []);

function fetchGuests() {
  axios({
    method: 'GET', //go grab from gallery 
    url: '/gallery'
  })
  .then(response => {
    //console.log(response.data, "res data")
    setGalleryList(response.data);
    //setGalleryItem(response.pathFor);
    //console.log(galleryList, "gall list");
  })
  .catch(err => {
    console.log("err", err)
  })
}
  //issues getting galleryList
  // into the return
////////////////////////////////////////////////////
///////////////////////////////////////////////////
    return (
      <div className="App">

        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>

        <div>
        <p>
        <GalleryList
         galleryList={galleryList}
         fetchGuests={fetchGuests} />
        </p>
        </div>
      </div>
    );
}

export default App;
