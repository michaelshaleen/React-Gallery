import React from 'react';
import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import GalleryList from '../GalleryList/GalleryList';
import GalleryItem from '../GalleryItem/GalleryItem';
// import galleryItems from '../modules/gallery.data.js';


function App() {
  const [galleryList, setGalleryList] = useState([]);
  const [galleryItem, setGalleryItem] = useState('');


  axios({
    method: 'GET',
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
  //issues getting galleryList
  // into the return


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <div>{galleryList.title} galleryList.title</div>
        <p>Gallery goes here</p>

        <form>
        <p>
        <GalleryList galleryList={galleryList} />
        </p>
        <img src="images/goat_small.jpg"/>
        </form>

      </div>
    );
}

{/* <GalleryItem /> */}

export default App;
